
	/* Impact Level */

	(function(){
		
		var $main = $('div[page-id="impact_level"]');
		var $div = $('ul.data', $main);

		var data = {
			01: {text: 'Loss / disruption / damage to the asset would impact the immediate community or local government only?', yes: 4, no: 2},
			02: {text: 'Loss / dusruption / damage to the asset would impact local governments, a remote or isolated community, or a region?', yes: 5, no: 3},
			03: {text: 'Loss / dusruption / damage to the asset would impact across multiple regions of the state or multiple isolated or remote communities', 'and': 11},
			04: {text: 'Expected outages would be less than a week?', yes: 7, no: 5},
			05: {text: 'Sound processes are in place to restore the asset or provide a backup / alternative, or there is redundancy in the system to cope?', yes: 8, no: 6},
			06: {text: 'No alternatives are in place or backup services would take weeks or months to restore', 'and': 11},
			07: {text: 'Financial losses are expected to be restricted to personal or insured losses?', yes: 9, no: 8},
			08: {text: 'Financial or recovery losses results in minor level state support being required, or there may be localised job losses?', yes: 10, no: 11},
			09: {text: 'Local Impact', colour: '#5cb85c'},
			10: {text: 'Regional Impact', colour: '#ec971f'},
			11: {text: 'State or Critical Impact', colour: '#d9534f'},
		};

		function question(id){

			if(typeof data[id] == 'undefined') return;
			if(typeof data[id].colour !== 'undefined'){
				var text = data[id].text;
				text = text.split(' ');
				$('button.update', $main).data('impact_level', text[0]).show();
			} else {
				$('button.update', $main).hide();
			}
			
			var html = '<li class="list-group-item" style="' + (typeof data[id].colour !== 'undefined' ? ('background:' + data[id].colour + ';color:white;text-align:center;line-height:34px') : '') + '" data-id="' + id + '">';
			
			if(typeof data[id]['yes'] !== 'undefined'){
				html += '<div class="btn-group">\
					<button class="btn btn-default">Yes<input type="radio" name="question[' + id + ']" value="yes"></button>\
					<button class="btn btn-default">No<input type="radio" name="question[' + id + ']" value="no"></button>\
				</div>';
			}
			
			html += '<span>' + data[id].text + '</span></li>';
			
			if(typeof data[id]['and'] !== 'undefined'){
				html += question(data[id]['and']);
			}
			
			/*'<li class="list-group-item" style="background:#5cb85c;color:white"><b>' + data[goto].text + '</b></li>'*/
			
			return html;

		}
		
		$div.append(question(1)).on('change', 'li[data-id] input', function(){

			var $this = $(this);
			var $id = $this.closest('li[data-id]').data('id');

			$this.closest('li[data-id]').nextAll().remove();
			
			if($this.val().length == 0) return;

			var goto = data[$id][$this.val()];
			$div.append(question(goto));

		});
		
		$('button.reset', $main).on('click', function(){
			$div.html(question(1));
		});
		
	})();
