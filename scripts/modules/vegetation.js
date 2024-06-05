
	/* Vegetation */

	(function(){
		
		var $main = $('div[page-id="vegetation"]');
		var $div = $('ul.data', $main);

		var data = {
			01: {'text': 'Trees are greater than 10m tall', 'yes': 2, 'no': 6},
			02: {'text': 'Foliage cover is greater than 90%', 'yes': 'Rainforest', 'no': 3},
			03: {'text': 'Foliage cover is greater than 30%', 'yes': 4, 'no': 7},
			04: {'text': 'Overstorey dominated by Karri', 'yes': 'Karri', 'no': 5},
			05: {'text': 'Overstorey dominated by Jarrah', 'yes': 'Jarrah', 'no': 'Forest (other)'},
			06: {'text': 'Low trees and shrubs are 2-10m tall', 'yes': 7, 'no': 9},
			07: {'text': 'Foliage cover is greater than 10%', 'yes': 'Woodlands', 'no': 8},
			08: {'text': 'Understorey is dominated by grass', 'yes': 'Grassland', 'no': 'Shrubland'},
			09: {'text': 'Shrubs are 2m tall or less', 'yes': 10, 'no': 11},
			10: {'text': 'Foliage cover is less than 10%', 'yes': 8, 'no': 'Shrubland'},
			11: {'text': 'Foliage cover is less than 30%', 'yes': 12, 'no': 'Scrub'},
			12: {'text': 'Vegetation has a multi-stemmed habit', 'yes': 13, 'no': 14},
			13: {'text': 'Foliage cover is less than 10%', 'yes': 8, 'no': 'Mallee/Mulga'},
			14: {'text': 'Foliage cover is less than 10%', 'yes': 8, 'no': 'Scrub'}
		};

		function question(id){

			if(typeof data[id] == 'undefined') return;

			var html = '<li class="list-group-item" data-id="' + id + '">\
			<div class="btn-group">\
				<button class="btn btn-default">Yes<input type="radio" name="question[' + id + ']" value="yes"></button>\
				<button class="btn btn-default">No<input type="radio" name="question[' + id + ']" value="no"></button>\
			</div>';
			
			html += '<span>' + data[id].text + '</span></li>';
			
			return html;

		}
		
		$div.append(question(1)).on('change', 'li[data-id] input', function(){

			var $this = $(this);
			var $id = $this.closest('li[data-id]').data('id');

			$this.closest('li[data-id]').nextAll().remove();

			if($this.val().length == 0) return;

			var goto = data[$id][$this.val()];

			if(typeof goto == 'string'){
				$div.append('<li class="list-group-item" style="background:#5cb85c;color:white">Classification: <b>' + goto + '</b></li>');
				$('button.update', $main).data('vegetation_species', goto).show();
			} else {
				$div.append(question(goto));
				$('button.update', $main).hide();
			}

		});
		
		$('button.reset', $main).on('click', function(){
			$div.html(question(1));
		});
		
	})();
