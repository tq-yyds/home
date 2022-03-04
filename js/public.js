$(function(){
	var banner = function() {
		var widths = $(".banner").width();
		var lengths = $('.bannerul li').length;
		$('.bannerul').append($('.bannerul li').first().clone());
		var sid = null;
		var index = 0;
		$('.bannerul li img').width(widths);

		function play() {
			index++;
			if (index == $('.bannerul li').length) {
				index = 1;
				$('.bannerul').stop().animate({
					'margin-left': 0
				}, 0)
			}
			if (index == $('.bannerul li').length - 1) {
				$(' .num li').eq(0).addClass('active').siblings().removeClass('active')
			}
			core(index);
		}

		sid = setInterval(play, 2000);
		$(' .banner').hover(function() {
			clearInterval(sid);
		}, function() {
			sid = setInterval(play, 2000);
		})
		$(".num li").click(function() {
				index = $(this).index();
				core(index);
			})
			//点击下一个
		$(".ban_next").click(function() {
				play();
			})
			//点击上一个
		$(".ban_prev").click(function() {
			index--;
			if (index == -1) {

				$(".bannerul").css({
					"margin-left": -($(".bannerul li").length - 1) * ($(".bannerul li").eq(0).width()) + "px"
				});
				index = $(".bannerul li").length - 2;
			}
			core(index);
		})

		function core(num) {
			$('.bannerul').stop().animate({
				'margin-left': -($('.bannerul li').eq(0).innerWidth() * num)
			}, 1000);
			$(' .num li').eq(num).addClass('active').siblings().removeClass('active');
		}
	}
	
	var newsbanner = function() {
		var index = 0;
		$(".newsnext").click(function() {
			index++;
			if (index >= $(".newsban li").length - 4) {
				index = $(".newsban li").length - 4;
			}
			core(index)
		})
		$(".newsprev").click(function() {
			index--;
			if (index < 0) {
				index = 0;
			}
			core(index);
		})



		function core(num) {
			$(".newsban ul").animate({
				"margin-left": -num * ($(".newsban li").eq(0).width()) + "px"
			}, 1000);
		}
	}
	var moto=function(){
		$(".moto_choose").click(function(){
			$(this).find(".moto_radio").addClass("active");
			$(this).siblings(".moto_choose").find(".moto_radio").removeClass("active");
		})
	}
	var size=function(){
		var wid=$(window).width();
		if(wid<992){
			newban()
		}
	}
	var newban=function(){
		var swiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        slidesPerView: 2,
	        slidesPerColumn: 1,
	        paginationClickable: true
        });
	}
	var login=function(){
		$(".rembtn").click(function(){
			var clas=$(this).attr("class").indexOf("active");
			if(clas==-1){
				$(this).addClass("active");
			}else{
				$(this).removeClass("active");
			}
		})
		$(".eye").click(function(){
			var clas=$(this).attr("class").indexOf("eyes");
			if(clas==-1){
				$(this).addClass("eyes");
				$(this).prev("input").attr("type","password");
			}else{
				$(this).removeClass("eyes");
				$(this).prev("input").attr("type","text");
			}
		})
		var index=0;
		$(".regiscut").click(function(){
			index=$(this).index();
			$(this).addClass("active").siblings(".regiscut").removeClass("active");
			$(".login").eq(index).addClass("active").siblings(".login").removeClass("active");
		})
	}
	var vap=function(){
		$(".menu").click(function(){
			console.log(1)
			var cs=$(".menubox").css("left");
			if(cs!="0px"){
				$(".menubox").animate({"left":"0"});
			}else{
				$(".menubox").animate({"left":"-100%"});
			}
		})
		$(".serbtn").click(function(){
			$(".w_search").animate({"right":"0"})
		})
		$(".w_sebtn").click(function(){
			$(".w_search").animate({"right":"-100%"})
		})
		
	}
	var w_car=function(){
		var index=0;
		$(".w_cartit span").click(function(){
			index=$(this).index();
			$(this).addClass("active").siblings("span").removeClass("active");
			$(".w_cut").eq(index).addClass("active").siblings(".w_cut").removeClass("active");
		})
	}
	var homecar=function(){
		var index=0;
		$(".home_cut").click(function(){
			index=$(this).index();
			$(this).addClass("active").siblings(".home_cut").removeClass("active");
			$(".comm").eq(index).addClass("active").siblings(".comm").removeClass("active");
		})
	}
	var notlog=function(){
		$(".login_tou").hover(function(){
			$(this).find(".login_down").stop().fadeToggle();
		})
	}
	var score=function(){
		$(".score").click(function(){
			$(this).addClass("active");
 			$(this).prevAll().addClass("active");
 			$(this).nextAll(".score").removeClass("active");
		})
	}
	
	var animat = function() {
		var stop = $(window).scrollTop();
		var he = $(window).height();
		if (stop >= 200) {
			$(".onlinebox:last-child").fadeIn()
		} else {
			$(".onlinebox:last-child").fadeOut()
		}
		function use(ele) {
			ele.each(function() {
				var eoffset = $(this).offset().top;
				if (stop + he > eoffset) {
					$(this).animate({
						"top": "0px",
						"opacity": "1"
					}, 1000)
				}
			})

		}

		use($(".carmat li"));//新车资讯
		use($(".guide li"));
		use($(".drive li"));
		use($(".indust li"));
		use($(".advert li"));
		use($(".prolist li"));//产品列表
	}

	$(window).scroll(function() {
		animat();
	})
	var page=function(){
		$(".page a").click(function(){
			$(this).addClass("active").siblings(".page a").removeClass("active");
			$(this).parent(".page").find("em").removeClass("active");
			$(this).parent(".page").find("i").removeClass("active");
		})
		$(".page em").click(function(){
			$(this).addClass("active").siblings(".page em").removeClass("active");
			$(this).parent(".page").find("i").removeClass("active");
		})
		$(".page i").click(function(){
			$(this).addClass("active").siblings(".page i").removeClass("active");
			$(this).parent(".page").find("em").removeClass("active");
		})
	}
	page();

	
	animat();//动画
	notlog();//头像下拉
	homecar();//个人主页评论回复文章切换
	w_car();//移动端新车试驾切换
	vap();//移动端的js
	newsbanner();//每日热点
	banner();//导航
	size();
	login();//登录
	score();//评分
	moto();//价格类型
})