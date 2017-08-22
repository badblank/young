$(document).ready(function(){
	//图片点击效果
	$(".img_list_bg").hover(function(){
		$(this).animate({"margin-top":"40px"});
		},function(){
		$(this).animate({"margin-top":"60px"});
	});
				
				
	//导航条底部内容
	var now = 1;
	var now_w = $(".nav_index li").eq(now).children("div").width();
	$(".nav_index li").eq(now).children("div").children("div").width(now_w);
	$(".nav_index li").hover(function(){
		var touch = $(".nav_index li").index(this);
		var w = $(this).children("div").width();
		var ww =  w+"px";
		var inc_ww = "+=" + ww;
		var dec_ww = "-=" + ww;
		if( now > touch ){
			$(this).children("div").children("div").css("left",ww);
			$(this).children("div").children("div").width(w);
			$(this).children("div").children("div").animate({"left":"0px"});	
		}else if( now < touch ){
			$(this).children("div").children("div").css("right",ww);
			$(this).children("div").children("div").width(w);
			$(this).children("div").children("div").animate({"right":"0px"});
		}
	},function(){
		var touch = $(".nav_index li").index(this);
		var w = $(this).children("div").width();
		var ww =  w+"px";
		if( now  !== touch ){
			if( now > touch ){
				$(this).children("div").children("div").animate({"left":ww});						
			}else if( now < touch ){
				$(this).children("div").children("div").animate({"right":ww});
			}
		}
	})
});