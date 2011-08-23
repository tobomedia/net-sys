/* Author:
 tobomedia.com
*/


var settings = {
featureElem: $('.feature_wrap ul'),
featuredContentMove: function() {
				var featureElemPos = settings.featureElem.position();	
				if(featureElemPos.left > -2000) {
					console.log("move")
				$(settings.featureElem).animate({left: + (featureElemPos.left-1000) + 'px'}, 500)
				} else {
				$(settings.featureElem).animate({left:'0px'}, 500)
				}
				setTimeout(function() {settings.featuredContentMove()}, 5000)
				}
}

setTimeout(function() {settings.featuredContentMove()},5000)








