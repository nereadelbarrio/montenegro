(function (blink) {
	'use strict';

	var montenegroStyle = function () {
			blink.theme.styles.basic.apply(this, arguments);
		},
		page = blink.currentPage;

	montenegroStyle.prototype = {
		bodyClassName: 'content_type_clase_montenegro',
		ckEditorStyles: {
			name: 'montenegro',
			styles: [

				{ name: 'Título 1', element: 'h4', attributes: { 'class': 'bck-title bck-title1'} },
				{ name: 'Título 2', element: 'h4', attributes: { 'class': 'bck-title bck-title2'} },
				{ name: 'Título 3', element: 'h4', attributes: { 'class': 'bck-title bck-title3'} },
				{ name: 'Título 4', element: 'h4', attributes: { 'class': 'bck-title bck-title4'} },
				{ name: 'Título 5', element: 'h4', attributes: { 'class': 'bck-title bck-title5'} },
				{ name: 'Título 6', element: 'h4', attributes: { 'class': 'bck-title bck-title6'} },
				{ name: 'Título 7', element: 'h4', attributes: { 'class': 'bck-title bck-title7'} },
				{ name: 'Título 8', element: 'h4', attributes: { 'class': 'bck-title bck-title8'} },
				{ name: 'Título 9', element: 'h4', attributes: { 'class': 'bck-title bck-title9'} },
				{ name: 'Título 10', element: 'h4', attributes: { 'class': 'bck-title bck-title10'} },
				{ name: 'Título 11', element: 'h4', attributes: { 'class': 'bck-title bck-title11'} },
				{ name: 'Título 12', element: 'h4', attributes: { 'class': 'bck-title bck-title12'} },
				{ name: 'Título 13', element: 'h4', attributes: { 'class': 'bck-title bck-title13'} },
				{ name: 'Título 14', element: 'h4', attributes: { 'class': 'bck-title bck-title14'} },

				{ name: 'Énfasis 1', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-1'} },
				{ name: 'Énfasis 2', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-2'} },
				{ name: 'Énfasis 3', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-3'} },
				{ name: 'Énfasis 4', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-4'} },
				{ name: 'Énfasis 5', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-5'} },
				{ name: 'Énfasis 6', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-6'} },
				{ name: 'Énfasis 7', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-7'} },
				{ name: 'Énfasis 8', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-8'} },
				{ name: 'Énfasis 9', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-9'} },
				{ name: 'Énfasis 10', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-10'} },
				{ name: 'Énfasis 11', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-11'} },
				{ name: 'Énfasis 12', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-12'} },

				{ name: 'Lista ordenada 1', element: 'ol', attributes: { 'class': 'bck-ol bck-ol1' } },
				{ name: 'Lista ordenada 2', element: 'ol', attributes: { 'class': 'bck-ol bck-ol2' } },
				{ name: 'Lista ordenada 3', element: 'ol', attributes: { 'class': 'bck-ol bck-ol3' } },
				{ name: 'Lista ordenada 4', element: 'ol', attributes: { 'class': 'bck-ol bck-ol4' } },
				{ name: 'Lista ordenada 5', element: 'ol', attributes: { 'class': 'bck-ol bck-ol5' } },
				{ name: 'Lista ordenada 6', element: 'ol', attributes: { 'class': 'bck-ol bck-ol6' } },
				{ name: 'Lista ordenada 7', element: 'ol', attributes: { 'class': 'bck-ol bck-ol7' } },
				{ name: 'Lista ordenada 8', element: 'ol', attributes: { 'class': 'bck-ol bck-ol8' } },
				{ name: 'Lista ordenada 9', element: 'ol', attributes: { 'class': 'bck-ol bck-ol9' } },
				
				{ name: 'Lista desordenada 1', element: 'ul', attributes: { 'class': 'bck-ul bck-ul1' } },
				{ name: 'Lista desordenada 2', element: 'ul', attributes: { 'class': 'bck-ul bck-ul2' } },
				{ name: 'Lista desordenada 3', element: 'ul', attributes: { 'class': 'bck-ul bck-ul3' } },
				{ name: 'Lista desordenada 4', element: 'ul', attributes: { 'class': 'bck-ul bck-ul4' } },
				{ name: 'Lista desordenada 5', element: 'ul', attributes: { 'class': 'bck-ul bck-ul5' } },
				{ name: 'Lista desordenada 6', element: 'ul', attributes: { 'class': 'bck-ul bck-ul6' } },
				{ name: 'Lista desordenada 7', element: 'ul', attributes: { 'class': 'bck-ul bck-ul7' } },

				{ name: 'Caja 1', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box1' } },
				{ name: 'Caja 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box2' } },
				{ name: 'Caja 3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box3' } },
				{ name: 'Caja 4', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box4' } },
				{ name: 'Caja 5', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box5' } },
				{ name: 'Caja 6', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box6' } },
				{ name: 'Caja 8', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box8' } },
				{ name: 'Caja 9', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box9' } },
				{ name: 'Caja 10', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box10' } },
				{ name: 'Caja 11', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box11' } }

			]
		},

		init: function () {
			var parent = blink.theme.styles.basic.prototype;
			parent.init.call(this);
			this.addActivityTitle();
			if(window.esWeb) return;
			this.removeFinalSlide();
			this.handleScrollEnd();
			this.setTooltip();
			window.editar && this.configEditor();

			if ($('.navbar-bottom').length > 0) {
 				$('.navbar-bottom ol').wrapAll('<div id="bottom-navigator"></div>');
		 		var width = 0;
		 		$('.navbar-bottom li').each(function(i, elem){ width += $(elem).outerWidth(true); });
		 		$('.navbar-bottom ol').css('width', width * 1.1);
		 		var scroll = new IScroll('#bottom-navigator', {
		 			scrollX: true,
		 			scrollY: false,
		 			eventPassthrough: true
		 		});
		 		scroll.on('scrollEnd', this.handleScrollEnd);
		 		this.handleScrollEnd.call(scroll);
	 		}

		},

		configEditor: function (editor) {
			editor.dtd.$removeEmpty['span'] = false;
		},


		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				return $(this).html().trim() + ' > ' + blink.courseInfo.unit;
			});
		},

		handleScrollEnd: function () {
 			$('#bottom-navigator')
 				.removeClass('show_left')
 				.removeClass('show_right');

 			if (this.x < 0) {
 				$('#bottom-navigator').addClass('show_left');
 			}
 			if (this.x > this.maxScrollX) {
 				$('#bottom-navigator').addClass('show_right');
 			}

 		},

		setTooltip: function () {},

		getEditorStyles: function () {
			return this.ckEditorStyles;
		}
	};

	montenegroStyle.prototype = _.extend({}, new blink.theme.styles.basic(), montenegroStyle.prototype);

	blink.theme.styles.montenegro = montenegroStyle;

})( blink );
