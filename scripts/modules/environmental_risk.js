
	/* Environmental Risk */

	(function(){
		
		var div = 'div[page-id="environmental_risk"]';
		
		$('table', div).prepend(
			$('tbody.asset').eq(0).clone(),
			$('tbody.likelihood').eq(0).clone()
		);
		
		$('table', div).append(
			$('tbody.footer').eq(0).clone()
		);

		var input = newAssessment(div);
		
		$('input[name], select[name]', div).on('keyup change', function(){
			
			var asset_vulnerability = (function(){
				
				var extent = input['geographic_extent'].val();
				var status = input['conservation_status'].val();
				
				if(status == 'Local Conservation' && extent == 'Highly Restricted')	return ['Moderate', 'yellow'];
				if(status == 'Local Conservation' && extent == 'Restricted')		return ['Low', 'green'];
				if(status == 'Local Conservation' && extent == 'Widespread')		return ['Low', 'green'];
				
				if(status == 'Priority' && extent == 'Highly Restricted')			return ['High', 'orange'];
				if(status == 'Priority' && extent == 'Restricted')					return ['Moderate', 'yellow'];
				if(status == 'Priority' && extent == 'Widespread')					return ['Low', 'green'];
				
				if(status == 'Threatened' && extent == 'Highly Restricted')			return ['Very High', 'red'];
				if(status == 'Threatened' && extent == 'Restricted')				return ['High', 'orange'];
				if(status == 'Threatened' && extent == 'Widespread')				return ['Moderate', 'yellow'];
				
				return ['', ''];
				
			})();
			
			var consequence_rating = (function(){
				
				var Q7 = asset_vulnerability[0];
				var P7 = input['potential_fire_impact'].val();
				
				if(Q7 == 'Very High' && P7 == 'Sensitive')	return ['Catastrophic', 'red'];
				if(Q7 == 'Very High' && P7 == 'Influenced')	return ['Major', 'orange'];
				if(Q7 == 'Very High' && P7 == 'Dependent')	return ['Moderate', 'yellow'];
				
				if(Q7 == 'High' && P7 == 'Sensitive')		return ['Major', 'orange'];
				if(Q7 == 'High' && P7 == 'Influenced')		return ['Moderate', 'yellow'];
				if(Q7 == 'High' && P7 == 'Dependent')		return ['Minor', 'green'];
				
				if(Q7 == 'Moderate' && P7 == 'Sensitive')	return ['Major', 'orange'];
				if(Q7 == 'Moderate' && P7 == 'Influenced')	return ['Moderate', 'yellow'];
				if(Q7 == 'Moderate' && P7 == 'Dependent')	return ['Minor', 'green'];
				
				if(Q7 == 'Low' && P7 == 'Sensitive')		return ['Moderate', 'yellow'];
				if(Q7 == 'Low' && P7 == 'Influenced')		return ['Minor', 'green'];
				if(Q7 == 'Low' && P7 == 'Dependent')		return ['Minor', 'green'];
				
				return ['', ''];
				
			})();
			
			input['asset_vulnerability'].val(asset_vulnerability[0]).attr('rating', asset_vulnerability[1]);
			input['consequence_rating'].val(consequence_rating[0]).attr('rating', consequence_rating[1]);
			input['calculate_risk'](); // Call again to calculate risk_rating;
			
		});

		$('form', div).on('reset', function(e){
			if(confirm('Are you sure you want to reset this form?')){
				$('input[rating]', this).removeAttr('rating');
			} else {
				e.preventDefault();
			}
		});
		
		$('button.send_email', div).on('click', function(){
			
			var pin = $('input[name="asset_pin"]').val();
			var subject = 'Environmental Risk Assessment [' + (pin.length > 0 ? pin : 'Unknown') + ']';
			
			var href = generateEmail(subject, div);
			
			window.location = href;
			
		});
		
	})();
