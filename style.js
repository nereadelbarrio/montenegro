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

				{ name: 'Título 01', element: 'h4', attributes: { 'class': 'bck-title bck-title1'} },
				{ name: 'Título 02', element: 'h4', attributes: { 'class': 'bck-title bck-title2'} },
				{ name: 'Título 03', element: 'h4', attributes: { 'class': 'bck-title bck-title3'} },
				{ name: 'Título 04', element: 'h4', attributes: { 'class': 'bck-title bck-title4'} },
				{ name: 'Título 05', element: 'h4', attributes: { 'class': 'bck-title bck-title5'} },
				{ name: 'Título 06', element: 'h4', attributes: { 'class': 'bck-title bck-title6'} },
				{ name: 'Título 07', element: 'h4', attributes: { 'class': 'bck-title bck-title7'} },
				{ name: 'Título 08', element: 'h4', attributes: { 'class': 'bck-title bck-title8'} },
				{ name: 'Título 09', element: 'h4', attributes: { 'class': 'bck-title bck-title9'} },
				{ name: 'Título 10', element: 'h4', attributes: { 'class': 'bck-title bck-title10'} },
				{ name: 'Título 11', element: 'h4', attributes: { 'class': 'bck-title bck-title11'} },
				{ name: 'Título 12', element: 'h4', attributes: { 'class': 'bck-title bck-title12'} },
				{ name: 'Título 13', element: 'h4', attributes: { 'class': 'bck-title bck-title13'} },
				{ name: 'Título 14', element: 'h4', attributes: { 'class': 'bck-title bck-title14'} },
				{ name: 'Título 15', element: 'h4', attributes: { 'class': 'bck-title bck-title15'} },

				{ name: 'Lista ordenada 01', element: 'ol', attributes: { 'class': 'bck-ol bck-ol1' } },
				{ name: 'Lista ordenada 02', element: 'ol', attributes: { 'class': 'bck-ol bck-ol2' } },
				{ name: 'Lista ordenada 03', element: 'ol', attributes: { 'class': 'bck-ol bck-ol3' } },
				{ name: 'Lista ordenada 04', element: 'ol', attributes: { 'class': 'bck-ol bck-ol4' } },
				{ name: 'Lista ordenada 05', element: 'ol', attributes: { 'class': 'bck-ol bck-ol5' } },
				{ name: 'Lista ordenada 06', element: 'ol', attributes: { 'class': 'bck-ol bck-ol6' } },
				{ name: 'Lista ordenada 07', element: 'ol', attributes: { 'class': 'bck-ol bck-ol7' } },
				{ name: 'Lista ordenada 08', element: 'ol', attributes: { 'class': 'bck-ol bck-ol8' } },
				{ name: 'Lista ordenada 09', element: 'ol', attributes: { 'class': 'bck-ol bck-ol9' } },
				
				{ name: 'Lista desordenada 01', element: 'ul', attributes: { 'class': 'bck-ul bck-ul1' } },
				{ name: 'Lista desordenada 02', element: 'ul', attributes: { 'class': 'bck-ul bck-ul2' } },
				{ name: 'Lista desordenada 03', element: 'ul', attributes: { 'class': 'bck-ul bck-ul3' } },
				{ name: 'Lista desordenada 04', element: 'ul', attributes: { 'class': 'bck-ul bck-ul4' } },
				{ name: 'Lista desordenada 05', element: 'ul', attributes: { 'class': 'bck-ul bck-ul5' } },
				{ name: 'Lista desordenada 06', element: 'ul', attributes: { 'class': 'bck-ul bck-ul6' } },
				{ name: 'Lista desordenada 07', element: 'ul', attributes: { 'class': 'bck-ul bck-ul7' } },

				{ name: 'Caja 01', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box1' } },
				{ name: 'Caja 02', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box2' } },
				{ name: 'Caja 03', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box3' } },
				{ name: 'Caja 04', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box4' } },
				{ name: 'Caja 05', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box5' } },
				{ name: 'Caja 06', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box6' } },
				{ name: 'Caja 08', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box8' } },
				{ name: 'Caja 09', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box9' } },
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
