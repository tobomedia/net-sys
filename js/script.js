/* Author:
 tobomedia.com
*/


var settings = {
featureElem: $('.feature_wrap ul'),
featuredContentMove: function() {
				var featureElemPos = settings.featureElem.position();	
				if(featureElemPos.left > -2000) {
					$(settings.featureElem).animate({left: + (featureElemPos.left-1000) + 'px'}, 500);
				} else {
					$(settings.featureElem).animate({left:'0px'}, 500);
				}
				},
scrollerMove: function() {
					
					var currentPos = $('#scroller li').position(), moveBy = currentPos.left;
					
					$('#scroller li').css({left:'-' + moveBy +'px'});
				}

};

setInterval(function() {settings.featuredContentMove()},5000);
setInterval(function() {settings.scrollerMove() }, 100);








