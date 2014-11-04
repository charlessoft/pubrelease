// JavaScript Document
window.onload = function(){
	/* 导航浮动 */
	(function(){
		$(window).scroll(navFloat);
		function navFloat(){
			var top = $(this).scrollTop(); 
			if (top >= 20) {
				$('#header').css('position','fixed');
				$('#header').css('top',0);
				$('#header').css('zIndex',1);
				$('#header').stop().animate({height: 50},'fast');
				$('#header h1').stop().animate({'line-height': 50},'fast');
				$('#header li').stop().animate({top: 0},'fast');
			}
			else {
				$('#header').css('position','static');
				$('#header').stop().animate({height: 90},'fast');
				$('#header h1').stop().animate({'line-height': 90},'fast');
				$('#header li').stop().animate({top: 20},'fast');
			}
		};
		navFloat();
	})();
	/* end 导航浮动 */
	
	/* menu */
	(function(){
		var li = $('#header .nav > li');
		for(var i=0; i<=li.length; i++){
			$(li[i]).mouseover(function(){
				$(this).css('background','#000');
				var ul = $(this).find('ul');
				if(ul.length >= 1){
					$(ul[0]).show();
				}
			});
			$(li[i]).mouseout(function(event){
				$(this).css('background','#2e2e2e');
				var ul = $(this).find('ul');
				if(ul.length >= 1){
					$(ul[0]).hide();
					event.stopPropagation();
				}
			});
		}
	})();
	/* end menu */
	
	/* banner */
	(function(){
		/* 图片居中 */
		var img = $('#banner img');
		function winSize(){
			var viewWidth = document.documentElement.clientWidth;
			if(viewWidth > 1000){
				for(var i=0; i<img.length; i++){
					$(img[i]).css('left',-($(img)[0].naturalWidth - viewWidth)/2);
				}
			}
		}
		winSize();
		window.onresize = function(){
			winSize();
		};
		/* end 图片居中 */
		
		/* 淡入淡出 */
		var li = $('#banner li');
		var smallImg = $('#banner .bar img')
		var now = 0;
		
		$(smallImg[0]).css('borderColor','#40aac0');
		$(li[0]).css({'opacity':1,'filter':'alpha(opacity=1)'});
		
		function auto() {
			if(now == li.length-1){
				now = 0;
			}
			else{
				now++;
			}
			
			$(li).fadeOut("slow");
			$(li[now]).fadeIn("slow");
			
			$(smallImg).css('borderColor','#eee');
			$(smallImg[now]).css('borderColor','#40aac0');
		};
		
		var timer = setInterval(auto,3000);
		
		/*点小图显示大图*/
		$(smallImg).click(function(){
			now = $(this).index();
			$(li).fadeOut("slow");
			$(li[now]).fadeIn("slow");
			$(smallImg).css('borderColor','#eee');
			$(smallImg[now]).css('borderColor','#40aac0');
			clearInterval(timer);
			timer = setInterval(auto,3000);
		});
		/*end 点小图显示大图*/
		/* end 淡入淡出 */
	})();
	/* end banner */
};