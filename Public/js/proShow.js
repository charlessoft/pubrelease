// JavaScript Document
$(function(){
	(function(){
		var a = $('#pro_show .bar a');
		var ul = $('#pro_show ul')
		$(a).click(function(){
			now = $(this).index();
			$(ul).remove();
		});
	})();
});