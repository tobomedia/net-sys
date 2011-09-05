/* Author:
 tobomedia.com
*/


var settings = {
	featureElem: $('.feature_wrap ul'),
	featuredContentMove: function() {
						var featureElemPos = settings.featureElem.position();	
						if(featureElemPos.left > -5000) {
							$(settings.featureElem).fadeOut(500).animate({left: '-=1000px'}).fadeIn(500);
						} else {
							$(settings.featureElem).fadeOut(500).animate({left:'0px'}).fadeIn(500);
						}
					},
	scrollerElem: $('.scroller_wrap'),
	scrollerElemPos: 0,
	scrollerParentWidth: 0 ,
	scrollerMove: function() { 
						$('ul', settings.scrollerElem).each(function() { 
							if((settings.scrollerElemPos+110) < settings.scrollerParentWidth) {
									$(this).css({left:'-' + settings.scrollerElemPos++ +'px'})
							} else { settings.scrollerElemPos = 0	}
						})
					}
	};
//imediate function for setup of page elements
(function() {
 var cloned = $('ul', settings.scrollerElem).clone(),
	 scrollerElemChildren = $('ul', settings.scrollerElem);

	 $(settings.scrollerElem).append(cloned);
	 $(cloned).addClass('cloned');

	// imediate function to check the elements have loaded if they have run the loop if they havent wait 10millseconds and call the function again
	(function init() {
		if($('li', scrollerElemChildren).innerWidth()) {
			$('li', scrollerElemChildren).each( function() {
		settings.scrollerParentWidth += ($(this).innerWidth()+50);
			$(settings.scrollerElem).css({width: settings.scrollerParentWidth*2 + 'px'}) ;
			});
		} else { setTimeout(function() {init()}, 10)}
		//console.log(settings.scrollerParentWidth)
	}())
}())


//timeouts
setInterval(function() {settings.featuredContentMove()},5000);
setInterval(function() {settings.scrollerMove() }, 65);








