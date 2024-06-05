
	 /* Application */
	
	$(document).ready(function(){
		
		if(window.location.hash){
			showTab(window.location.hash.substring(1));
		} else {
			showTab('about');
		}
		
	});
	 
	function showTab(id){
		
		closeSidebar();
		
		window.history.pushState(null, null, '#' + id);
		
		var a = $('a[href="#' + id + '"]', '#sidebar ul li.active'); // Find the link inside the current;
		
		if(a.length > 0){ // If we found the link, use this one
			a.click();
			return;
		}
		
		$('a[href="#' + id + '"]').eq(0).closest('ul').siblings('a').click(); // Click the parent first
		$('a[href="#' + id + '"]').eq(0).click(); // Now click the child (may be the same as the parent)
		
		window.scrollTo(0, 0);
		
	}
	
	function openSidebar(){
		
		if($('#sidebar').hasClass('open')) return;
		
		$('#sidebar').addClass('open');
		
		$('body').append($('<div id="opacity" />').on('click', closeSidebar));
		$('div#opacity').css('opacity'); // CSS3 transition fix
		$('div#opacity').css('opacity', 0.4);
		
	}
	
	function closeSidebar(){
		
		if(!$('#sidebar').hasClass('open')) return;
		
		$('#sidebar').removeClass('open');
		$('div#opacity').css('opacity'); // CSS3 transition fix
		$('div#opacity').css('opacity', 0);
		
	}
	
	$('button.update').on('click', function(e){
		
		e.stopPropagation();
		
		var parent = $('#sidebar ul ul li.active').parents('li').children('a').attr('href').substring(1);
		
		$.each($(this).data(), function(name, value){
			$('[name="' + name + '"]', 'div[page-id="' + parent + '"]').val(value).trigger('change');
		});
		
		showTab(parent);
		
	});
	
	$('header #menu').on('click', function(e){
		
		e.stopPropagation();
		
		if($('#sidebar').hasClass('open')){
			closeSidebar();
		} else {
			openSidebar();			
		}
		
	});
	
	$('#sidebar, #infobar').on('webkitTransitionEnd msTransitionEnd transitionend', function(){
		if(!$(this).hasClass('open')){
			$('div#opacity').remove();
		}
	});
	
	$(window).resize(function(){

		if($('#sidebar').hasClass('open') && window.matchMedia('(min-width:1024px)').matches){
			closeSidebar();
		}
	
	});
	
	$('#sidebar li a[href^="#"]').on('click', function(e){
		
		e.stopPropagation();

		closeSidebar();
		
		// Update sidebar
		$(this).closest('ul').find('li.active').removeClass('active');
		$(this).closest('li').addClass('active');
		
		// Update content
		$('div#pages div.page.active').removeClass('active');
		$('div#pages div[page-id="' + $(this).attr('href').substring(1) + '"]').addClass('active');
		
		window.scrollTo(0, 0);
	 
	});

	$('body').on('click', 'button:not([data-tooltip])', function(){
		// Make buttons look nicer after click - but not tooltips.
		$(this).blur();
	});

	$('body').on('change', 'select', function(){
		// Make inputs look nicer after change.
		$(this).blur();
	});
	 
	$('body').on('keypress', 'input[type=tel]', function(e){
		
		var key = e.which || e.keyCode || 0;
		return key == 13 || key == 46 || (48 <= key && key <= 57) || (typeof $(this).data('allow') === 'string' && $(this).data('allow').indexOf(String.fromCharCode(key)) >= 0);
		
	}).on('click', 'div.btn-group button', function(){
			
		$(this)
			.siblings('.btn-primary').removeClass('btn-primary').addClass('btn-default').end()
			.removeClass('btn-default').addClass('btn-primary').blur()
			.find('input').prop('selected', true).prop('checked', true).trigger('change');
		
	});
	
	$('body').on('click', '[data-goto]', function(){
		
		showTab($(this).data('goto'));
		
	});
	
	var isTouch = 'ontouchstart' in document.documentElement && 1 < window.devicePixelRatio;
	
	$('button[data-tooltip]').each(function(){
		
		$(this).tooltip({
			html: true,
			trigger: isTouch ? 'manual' : 'hover',
			title: (function(title){
				switch(title){
					case 'low_threat':
						return 'The hazard is considered low threat if:\
						<ol>\
							<li>More than 100 m from the asset; or\
							<li>Less than 1 ha in size; or\
							<li>Multiple areas less than 0.25 ha each in size; or\
							<li>Strips of vegetation less than 20 m wide (deep); or\
							<li>Non vegetated/low threat vegetation\
						</ol>';
					break;
				}
			})($(this).data('tooltip'))
		});
		
		if(isTouch){
			$(this).on('click', function(){
				$(this).tooltip('toggle');
			}).on('blur', function(){
				$(this).tooltip('hide');
			});
		}
		
	});