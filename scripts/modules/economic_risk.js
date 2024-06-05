
	/* Economic Risk */

	(function(){
		
		var div = 'div[page-id="economic_risk"]';
		
		$('table', div).prepend(
			$('tbody.asset').eq(0).clone(),
			$('tbody.likelihood').eq(0).clone(),
			$('tbody.hazard').eq(0).clone()
		);
		
		$('table', div).append(
			$('tbody.footer').eq(0).clone()
		);

		var input = newAssessment(div);
		
		$('input[name], select[name]', div).on('keyup change', function(){
			
			var asset_vulnerability = (function(){
				
				var susceptibility = input['asset_susceptibility'].val();
				var level = input['impact_level'].val();
				
				if(susceptibility == 'High' && level == 'Local')		return ['Moderate', 'yellow'];
				if(susceptibility == 'High' && level == 'Regional')		return ['High', 'red'];
				if(susceptibility == 'High' && level == 'State')		return ['High', 'red'];
				
				if(susceptibility == 'Moderate' && level == 'Local')	return ['Low', 'green'];
				if(susceptibility == 'Moderate' && level == 'Regional')	return ['Moderate', 'yellow'];
				if(susceptibility == 'Moderate' && level == 'State')	return ['High', 'red'];
				
				if(susceptibility == 'Low' && level == 'Local')			return ['Low', 'green'];
				if(susceptibility == 'Low' && level == 'Regional')		return ['Low', 'green'];
				if(susceptibility == 'Low' && level == 'State')			return ['Moderate', 'yellow'];
				
				return ['', ''];
				
			})();
		
			var consequence_rating = (function(){
				
				var Q7 = asset_vulnerability[0];
				var P7 = input['hazard_rating'].val();
				
				if(Q7 == 'High' && P7 == 'Low')				return ['Moderate', 'yellow'];
				if(Q7 == 'High' && P7 == 'Medium')			return ['Major', 'orange'];
				if(Q7 == 'High' && P7 == 'High')			return ['Major', 'orange'];
				if(Q7 == 'High' && P7 == 'Very High')		return ['Catastrophic', 'red'];
				
				if(Q7 == 'Moderate' && P7 == 'Low')			return ['Minor', 'green'];
				if(Q7 == 'Moderate' && P7 == 'Medium')		return ['Moderate', 'yellow'];
				if(Q7 == 'Moderate' && P7 == 'High')		return ['Moderate', 'yellow'];
				if(Q7 == 'Moderate' && P7 == 'Very High')	return ['Major', 'orange'];
				
				if(Q7 == 'Low' && P7 == 'Low')				return ['Minor', 'green'];
				if(Q7 == 'Low' && P7 == 'Medium')			return ['Minor', 'green'];
				if(Q7 == 'Low' && P7 == 'High')				return ['Minor', 'green'];
				if(Q7 == 'Low' && P7 == 'Very High')		return ['Moderate', 'yellow'];
				
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
			var subject = 'Economic Risk Assessment [' + (pin.length > 0 ? pin : 'Unknown') + ']';
			
			var href = generateEmail(subject, div);
			
			window.location = href;
			
		});
		
	})();
