
	/* Code here is applied to multiple assessment tools */
	
	function newAssessment(div){
	
		var hazard_data = [
			// -1 is equivellant of "n/a"
			{class: 'Forest (other)', age: 20, cover: -1, surface_fuel: 25, overall_fuel: 35, height: -1, model: 'Forest'},
			{class: 'Shrubland', age: 20, cover: -1, surface_fuel: 15, overall_fuel: 15, height: 1.5, model: 'Scrub'},
			{class: 'Scrub', age: 20, cover: -1, surface_fuel: 25, overall_fuel: 25, height: 3, model: 'Scrub'},
			{class: 'Mallee/Mulga', age: 20, cover: -1, surface_fuel: 8, overall_fuel: 8, height: 3, model: 'Scrub'},
			{class: 'Rainforest', age: 20, cover: -1, surface_fuel: 10, overall_fuel: 12, height: -1, model: 'Forest'},
			{class: 'Grassland', age: 20, cover: -1, surface_fuel: 4.5, overall_fuel: 4.5, height: -1, model: 'Grass'},
			{class: 'Karri', age: 5, cover: 30, surface_fuel: 11.7, overall_fuel: 11.7, height: -1, model: 'Forest'},
			{class: 'Karri', age: 5, cover: 50, surface_fuel: 15, overall_fuel: 15, height: -1, model: 'Forest'},
			{class: 'Karri', age: 5, cover: 60, surface_fuel: 16.7, overall_fuel: 16.7, height: -1, model: 'Forest'},
			{class: 'Karri', age: 5, cover: 80, surface_fuel: 20.2, overall_fuel: 20.2, height: -1, model: 'Forest'},
			{class: 'Karri', age: 5, cover: 100, surface_fuel: 24.2, overall_fuel: 24.2, height: -1, model: 'Forest'},
			{class: 'Karri', age: 10, cover: 30, surface_fuel: 20.2, overall_fuel: 20.2, height: -1, model: 'Forest'},
			{class: 'Karri', age: 10, cover: 50, surface_fuel: 24.2, overall_fuel: 24.2, height: -1, model: 'Forest'},
			{class: 'Karri', age: 10, cover: 60, surface_fuel: 26.2, overall_fuel: 26.2, height: -1, model: 'Forest'},
			{class: 'Karri', age: 10, cover: 80, surface_fuel: 31, overall_fuel: 31, height: -1, model: 'Forest'},
			{class: 'Karri', age: 10, cover: 100, surface_fuel: 36, overall_fuel: 36, height: -1, model: 'Forest'},
			{class: 'Karri', age: 15, cover: 30, surface_fuel: 25, overall_fuel: 25, height: -1, model: 'Forest'},
			{class: 'Karri', age: 15, cover: 50, surface_fuel: 29, overall_fuel: 29, height: -1, model: 'Forest'},
			{class: 'Karri', age: 15, cover: 60, surface_fuel: 34, overall_fuel: 34, height: -1, model: 'Forest'},
			{class: 'Karri', age: 15, cover: 80, surface_fuel: 41, overall_fuel: 41, height: -1, model: 'Forest'},
			{class: 'Karri', age: 15, cover: 100, surface_fuel: 46, overall_fuel: 46, height: -1, model: 'Forest'},
			{class: 'Karri', age: 20, cover: 30, surface_fuel: 30, overall_fuel: 30, height: -1, model: 'Forest'},
			{class: 'Karri', age: 20, cover: 50, surface_fuel: 35, overall_fuel: 35, height: -1, model: 'Forest'},
			{class: 'Karri', age: 20, cover: 60, surface_fuel: 40, overall_fuel: 40, height: -1, model: 'Forest'},
			{class: 'Karri', age: 20, cover: 80, surface_fuel: 47, overall_fuel: 47, height: -1, model: 'Forest'},
			{class: 'Karri', age: 20, cover: 100, surface_fuel: 52, overall_fuel: 52, height: -1, model: 'Forest'},
			{class: 'Karri', age: 25, cover: 30, surface_fuel: 35, overall_fuel: 35, height: -1, model: 'Forest'},
			{class: 'Karri', age: 25, cover: 50, surface_fuel: 40, overall_fuel: 40, height: -1, model: 'Forest'},
			{class: 'Karri', age: 25, cover: 60, surface_fuel: 44, overall_fuel: 44, height: -1, model: 'Forest'},
			{class: 'Karri', age: 25, cover: 80, surface_fuel: 53, overall_fuel: 53, height: -1, model: 'Forest'},
			{class: 'Karri', age: 25, cover: 100, surface_fuel: 58, overall_fuel: 58, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 5, cover: 20, surface_fuel: 4.2, overall_fuel: 4.2, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 5, cover: 40, surface_fuel: 6.2, overall_fuel: 6.2, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 5, cover: 50, surface_fuel: 7.5, overall_fuel: 7.5, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 5, cover: 60, surface_fuel: 8.6, overall_fuel: 8.6, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 5, cover: 80, surface_fuel: 9.8, overall_fuel: 9.8, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 10, cover: 20, surface_fuel: 7.7, overall_fuel: 7.7, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 10, cover: 40, surface_fuel: 10.3, overall_fuel: 10.3, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 10, cover: 50, surface_fuel: 11.5, overall_fuel: 11.5, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 10, cover: 60, surface_fuel: 13, overall_fuel: 13, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 10, cover: 80, surface_fuel: 14.4, overall_fuel: 14.4, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 15, cover: 20, surface_fuel: 10.5, overall_fuel: 10.5, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 15, cover: 40, surface_fuel: 13, overall_fuel: 13, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 15, cover: 50, surface_fuel: 14.2, overall_fuel: 14.2, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 15, cover: 60, surface_fuel: 15.6, overall_fuel: 15.6, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 15, cover: 80, surface_fuel: 17.5, overall_fuel: 17.5, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 20, cover: 20, surface_fuel: 12.7, overall_fuel: 12.7, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 20, cover: 40, surface_fuel: 15, overall_fuel: 15, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 20, cover: 50, surface_fuel: 16.5, overall_fuel: 16.5, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 20, cover: 60, surface_fuel: 17.8, overall_fuel: 17.8, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 20, cover: 80, surface_fuel: 20.2, overall_fuel: 20.2, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 25, cover: 20, surface_fuel: 14.8, overall_fuel: 14.8, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 25, cover: 40, surface_fuel: 17, overall_fuel: 17, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 25, cover: 50, surface_fuel: 18.5, overall_fuel: 18.5, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 25, cover: 60, surface_fuel: 20, overall_fuel: 20, height: -1, model: 'Forest'},
			{class: 'Jarrah', age: 25, cover: 80, surface_fuel: 22.5, overall_fuel: 22.5, height: -1, model: 'Forest'},
			{class: 'Woodland', age: 5, cover: 20, surface_fuel: 4.2, overall_fuel: 4.2, height: -1, model: 'Forest'},
			{class: 'Woodland', age: 10, cover: 20, surface_fuel: 7.7, overall_fuel: 7.7, height: -1, model: 'Forest'},
			{class: 'Woodland', age: 15, cover: 20, surface_fuel: 10.5, overall_fuel: 10.5, height: -1, model: 'Forest'},
			{class: 'Woodland', age: 20, cover: 20, surface_fuel: 12.7, overall_fuel: 12.7, height: -1, model: 'Forest'},
			{class: 'Woodland', age: 25, cover: 20, surface_fuel: 14.8, overall_fuel: 14.8, height: -1, model: 'Forest'}
		];
		
		var constants = {
			'fdi': 80,
			'gfdi': 110,
			'windspeed': 45,
			'moisture_factor': 5,
			'heat_of_combustion': 18600,
			'elevation_of_receiver': 2,
			'flame_width': 100,
			'flame_temperature': 1090,
			'flame_emissivity': 0.95,
			'ambient_temp': 308,
			'relative_humidity': 0.25
		};
		constants['flame_emissive_power'] = 5.67E-11 * constants['flame_emissivity'] * Math.pow(constants['flame_temperature'], 4);
		
		var atmospheric = [
			{c1n: 1.486, c2n: -0.002003, c3n: 0.0000468, c4n: -0.06052},
			{c1n: 0.01225, c2n: -0.000059, c3n: 0.00000166, c4n: -0.001759},
			{c1n: -0.0001489, c2n: 6.893E-07, c3n: -1.922E-08, c4n: 0.00002092},
			{c1n: 8.381E-07, c2n: -3.823E-09, c3n: 1.0511E-10, c4n: -1.166E-07},
			{c1n: -1.685E-09, c2n: 7.637E-12, c3n: -2.085E-13, c4n: 2.35E-10}
		];
		
		$.each(atmospheric, function(n, values){
			atmospheric[n].calc = values['c1n'] + (values['c2n'] * constants['ambient_temp']) + (values['c3n'] * constants['flame_temperature']) + (values['c4n'] * constants['relative_humidity']);
		});
		
		/*************/
		
		var input = {};
		
		input['calculate_risk'] = function(){
		
			var D7 = parseInt(input['separation_distance'].val());
			
			var likelihood_rating = (function(){
				
				switch(input['likelihood_vegetation_age'].val()){
					case '6+':
						if(D7 >= 100) return ['Possible', 'yellow'];
						if(D7 >= 30)  return ['Likely', 'orange'];
						if(D7 < 30) return ['Almost Certain', 'red'];
					break;
					case '36':
						if(D7 >= 100) return ['Unlikely', 'green'];
						if(D7 >= 30)  return ['Possible', 'yellow'];
						if(D7 < 30) return ['Likely', 'orange'];
					break;
					case '03':
						if(D7 >= 100) return ['Unlikely', 'green'];
						if(D7 >= 30)  return ['Unlikely', 'green'];
						if(D7 < 30) return ['Possible', 'yellow'];
					break;
				}
				
				return ['', ''];
				
			})();
			
			var data_row = (function(){
				
				var G7 = input['vegetation_species'] && input['vegetation_species'].val();
				var I7 = input['vegetation_age'] && parseInt(input['vegetation_age'].val());
				var J7 = input['canopy_cover'] && parseInt(input['canopy_cover'].val());
				
				for(x in hazard_data){
					if(hazard_data[x].class == G7 && hazard_data[x].age == I7 && hazard_data[x].cover == J7){
						return hazard_data[x];
					}
				}
				
			})();
			
			if(typeof data_row !== 'undefined'){
			
				var AD7 = parseInt(input['site_slope'].val()); // Site slope
				var AF7 = parseInt(input['effective_slope'].val()); // Effective Slope
				var AG7 = (0.0012 * constants['fdi'] * data_row.surface_fuel) * Math.exp(0.069 * AF7) // Forest ROS
				var AH7 = (0.023 * (Math.pow(constants['windspeed'], 1.21)) * Math.pow(data_row.height, 0.54)) * Math.exp(0.069 * AF7) // Scrub ROS
				var AI7 = (0.024 * Math.pow(constants['windspeed'], 1.312) * Math.exp(-0.0243 * constants['moisture_factor']) * (1 - Math.exp(-0.116 * data_row.cover))) * Math.exp(0.069 * AF7); // Tussock ROS
				var AJ7 = (0.13 * constants['gfdi']) * Math.exp(0.069 * AF7); //Grass ROS
				
				switch(data_row.model){
					case 'Forest':
						var AK7 = constants['heat_of_combustion'] * data_row.overall_fuel * AG7 / 36; // Int
						var AL7 = (13 * AG7 + 0.24 * data_row.overall_fuel) / 2; // FL
					break;
					case 'Grass':
						var AK7 = constants['heat_of_combustion'] * data_row.overall_fuel * AJ7 / 36; // Int
						var AL7 = 1.192 * Math.pow(AK7 / 1000, 0.5); // FL
					break;
					case 'Scrub':
						var AK7 = constants['heat_of_combustion'] * data_row.overall_fuel * AH7 / 36; // Int
						var AL7 = 0.0775 * Math.pow(AK7, 0.46); // FL
					break;
					case 'Tussock':
						var AK7 = constants['heat_of_combustion'] * data_row.overall_fuel * AI7 / 36; // Int
					break;
				}
				
				var AM7 = constants['elevation_of_receiver']; // EOR
				
				var angles = [];
				
				for(i = 1; i < 180; i++){
					var AS6 = i * Math.PI / 180;		
					var AT7 = (AL7 * Math.sin(AS6) - 0.5 * AL7 * Math.cos(AS6) * Math.tan(AD7 * Math.PI / 180) - D7 * Math.tan(AD7 * Math.PI / 180) - AM7) / (D7 - 0.5 * AL7 * Math.cos(AS6));
					var AU7 = (AM7 + (D7 - 0.5 * AL7 * Math.cos(AS6)) * Math.tan(AD7 * Math.PI / 180)) / (D7 - 0.5 * AL7 * Math.cos(AS6));
					var AV7 = 0.5 * constants['flame_width'] / (D7 - 0.5 * AL7 * Math.cos(AS6));
					var AW7 = 1 / Math.PI * ((AT7 / Math.sqrt(1 + AT7 * AT7)) * (Math.atan(AV7 / Math.sqrt(1 + AT7 * AT7))) + (AV7 / Math.sqrt(1 + AV7 * AV7)) * (Math.atan(AT7 / Math.sqrt(1 + AV7 * AV7))) + (AU7 / Math.sqrt(1 + AU7 * AU7)) * (Math.atan(AV7 / Math.sqrt(1 + AU7 * AU7))) + (AV7 / Math.sqrt(1 + AV7 * AV7)) * (Math.atan(AU7 / Math.sqrt(1 + AV7 * AV7))));
					var AS7 = D7 <= (0.5 * AL7 * Math.cos(AS6)) ? 1 : AW7;
					angles.push({angle: i, value: AS7});
				}
				
				var maximum_angle = angles[0];
				$.each(angles, function(i, value){
					if(value.value > maximum_angle.value)
						maximum_angle = value;
				});
				
				var AR7 = maximum_angle.value; // Worst case view
				var AQ7 = maximum_angle.angle;
				var AN7 = D7 <= 0.5 * AL7 * Math.cos(AQ7 * Math.PI / 180) ? 0 : (D7 - 0.5 * AL7 * Math.cos(AQ7 * Math.PI / 180)); // Path length
				
				var AO7 = AN7 != 0 ? (atmospheric[0].calc + (atmospheric[1].calc * AN7) + (atmospheric[2].calc * Math.pow(AN7, 2)) + (atmospheric[3].calc * Math.pow(AN7, 3)) + (atmospheric[4].calc * Math.pow(AN7, 4))) : 1;
				var AP7 = constants['flame_emissive_power'] * AR7 * AO7;
				
				//console.clear();
				//console.log('AP7: ' + AP7);
				
				var hazard_rating = (function(){
					
					var F7 = $('input[name="low_threat"]:checked', div).val();
					
					if(typeof F7 == 'undefined')	return ['', ''];
					if(F7 == 'Yes')					return ['Low', 'blue'];
					if(AP7 <= 12.5)					return ['Medium', 'green'];
					if(AP7 <= 29)					return ['High', 'yellow'];
					if(AP7 > 29)					return ['Very High', 'orange'];
					
					return ['', ''];
					
				})();
				
			}
			
			var risk_rating = (function(){
				
				var E7 = likelihood_rating[0];
				var R7 = input['consequence_rating'].val();
				
				if(E7 == 'Almost Certain' && R7 == 'Minor')			return ['High (3D)', 'yellow'];
				if(E7 == 'Almost Certain' && R7 == 'Moderate')		return ['Very High (2C)', 'orange'];
				if(E7 == 'Almost Certain' && R7 == 'Major')			return ['Extreme (1C)', 'red'];
				if(E7 == 'Almost Certain' && R7 == 'Catastrophic')	return ['Extreme (1A)', 'red'];
				
				if(E7 == 'Likely' && R7 == 'Minor')					return ['Medium (4C)', 'green'];
				if(E7 == 'Likely' && R7 == 'Moderate')				return ['High (3A)', 'yellow'];
				if(E7 == 'Likely' && R7 == 'Major')					return ['Very High (2A)', 'orange'];
				if(E7 == 'Likely' && R7 == 'Catastrophic')			return ['Extreme (1B)', 'red'];
				
				if(E7 == 'Possible' && R7 == 'Minor')				return ['Low (5A)', 'blue'];
				if(E7 == 'Possible' && R7 == 'Moderate')			return ['Medium (4A)', 'green'];
				if(E7 == 'Possible' && R7 == 'Major')				return ['High (3B)', 'yellow'];
				if(E7 == 'Possible' && R7 == 'Catastrophic')		return ['Very High (2B)', 'orange'];
				
				if(E7 == 'Unlikely' && R7 == 'Minor')				return ['Low (5C)', 'blue'];
				if(E7 == 'Unlikely' && R7 == 'Moderate')			return ['Low (5B)', 'blue'];
				if(E7 == 'Unlikely' && R7 == 'Major')				return ['Medium (4B)', 'green'];
				if(E7 == 'Unlikely' && R7 == 'Catastrophic')		return ['High (3C)', 'yellow'];
				
				return ['', ''];
				
			})();
			
			/* Update all the inputs with their respected values & colour */
			
			input['likelihood_rating'] && input['likelihood_rating'].val(likelihood_rating[0]).attr('rating', likelihood_rating[1]);
			input['risk_rating'] && input['risk_rating'].val(risk_rating[0]).attr('rating', risk_rating[1]);

			if(data_row){
				input['vegetation_height'] && input['vegetation_height'].val(data_row.height == -1 ? 'n/a' : data_row.height);
				input['overall_fuel_load'] && input['overall_fuel_load'].val(data_row.overall_fuel);
				input['surface_fuel_load'] && input['surface_fuel_load'].val(data_row.surface_fuel);
				input['hazard_rating'] && input['hazard_rating'].val(hazard_rating[0]).attr('rating', hazard_rating[1]);
			} else {
				input['vegetation_height'] && input['vegetation_height'].val('');
				input['overall_fuel_load'] && input['overall_fuel_load'].val('');
				input['surface_fuel_load'] && input['surface_fuel_load'].val('');
				input['hazard_rating'] && input['hazard_rating'].val('').attr('rating', '');
			}
			
		}
		
		// Build an object with each input for easy access later; then trigger the calculation function on keyup/change
		$('input[name], select[name]', div).each(function(){
			input[$(this).attr('name')] = $(this);
		}).on('keyup change', input['calculate_risk']);
		
		// On change of classification, update the allowable drop downs
		if(typeof input['vegetation_species'] !== 'undefined'){
			
			input['vegetation_species'].on('change', function(){
				
				var $this = $(this);
				var options = {vegetation_age : [], canopy_cover : []};
				
				// Remove all options (with a value)
				input['vegetation_age'].find('option').remove();
				input['canopy_cover'].find('option').remove();
				
				$.each(hazard_data, function(i, data){
					if(data.class == $this.val()){
						// Create the valid options
						options['vegetation_age'].push(data.age);
						options['canopy_cover'].push(data.cover);
					}
				});
				
				options['vegetation_age'] = options['vegetation_age'].filter(function(value, index, self) { 
					return self.indexOf(value) === index;
				});
				options['canopy_cover'] = options['canopy_cover'].filter(function(value, index, self) { 
					return self.indexOf(value) === index;
				});
				
				// Append a blank option if there are more than 1 available to choose from. If there's only option to show, just show that.
				if(options['vegetation_age'].length > 1){
					input['vegetation_age'].append('<option></option>');
				}
				if(options['canopy_cover'].length > 1){
					input['canopy_cover'].append('<option></option>');
				}
				
				$.each($.unique(options['vegetation_age']), function(i, value){					
					input['vegetation_age'].append('<option>' + value + '</option>');
				});
				
				$.each($.unique(options['canopy_cover']), function(i, value){					
					input['canopy_cover'].append('<option value="' + value + '">' + (value == -1 ? 'n/a' : value) + '</option>');
				});
				
				input['calculate_risk']();
				
			});
			
		}
		
		return input;
		
	}
	
	function generateEmail(subject, div){
		
		var lines = [];
		
		$('div.input, td.title', div).each(function(){
			
			if($(this).hasClass('title')){
				
				lines.push('');
				
				if($(this).text().length > 0){
					lines.push('- ' + $(this).text());
				}
				
				return;
			}
			
			var input = $('input[type=text], input[type=tel], input[type=radio]:selected, select, textarea', this);
			var title = $('span:eq(0)', this).text();
			
			if(input.length == 0 || title.length == 0) return;
			
			if(input.prop('tagName') == 'SELECT'){
				var value = $('option:selected', input).text();
			} else {
				var value = input.val();
			}
			
			lines.push(title + ': ' + value);
			
		});
		
		//var pin = $('input[name="asset_pin"]').val();
		//var subject = 'Human Settlement [' + (pin.length > 0 ? pin : 'Unknown') + ']';
		return 'mailto:?subject=' + encodeURI(subject) + '&body=' + lines.map(encodeURI).join('%0A');
		
	}
	