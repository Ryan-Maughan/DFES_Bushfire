
	/* Human Settlement Risk */

	(function(){
		
		var div = 'div[page-id="human_settlement_risk"]';
		var input = newAssessment(div);
		
		$('input[name], select[name]', div).on('keyup change', function(){
		
			var consequence_rating = (function(){
				
				var Q7 = input['asset_vulnerability'].val();
				var P7 = input['hazard_rating'].val();
				
				if(Q7 == 'High' && P7 == 'Low')				return ['Moderate', 'yellow'];
				if(Q7 == 'High' && P7 == 'Medium')			return ['Major', 'orange'];
				if(Q7 == 'High' && P7 == 'High')			return ['Catastrophic', 'red'];
				if(Q7 == 'High' && P7 == 'Very High')		return ['Catastrophic', 'red'];
				
				if(Q7 == 'Moderate' && P7 == 'Low')			return ['Minor', 'green'];
				if(Q7 == 'Moderate' && P7 == 'Medium')		return ['Moderate', 'yellow'];
				if(Q7 == 'Moderate' && P7 == 'High')		return ['Major', 'orange'];
				if(Q7 == 'Moderate' && P7 == 'Very High')	return ['Catastrophic', 'red'];
				
				if(Q7 == 'Low' && P7 == 'Low')				return ['Minor', 'green'];
				if(Q7 == 'Low' && P7 == 'Medium')			return ['Minor', 'green'];
				if(Q7 == 'Low' && P7 == 'High')				return ['Moderate', 'yellow'];
				if(Q7 == 'Low' && P7 == 'Very High')		return ['Major', 'orange'];
				
				return ['', ''];
				
			})();
			
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
			var subject = 'Human Settlement Risk Assessment [' + (pin.length > 0 ? pin : 'Unknown') + ']';
			
			var href = generateEmail(subject, div);
			
			window.location = href;
			
		});
		
	})();
