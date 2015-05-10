var themeApp = {
	coverSize:function(){
		var wh = $(window).height();
		var mhh = $('.main-header').height();
		var ch = wh-mhh;
		$('.cover').css('min-height', ch+2 +'px');

		var cih = $('.cover-inner').height();
		var pdt = (ch-cih)/2;
		if (pdt>0) {
			$('.cover-inner').css('padding-top', parseInt(pdt) +'px');
		}
	},
	coverResize:function(){
		$(window).resize(function(){
			themeApp.coverSize();
		});
	},
	fixedNav:function(){
		var navbar = $('.main-header');
		navbar_top = navbar.offset().top;
		$(window).resize(function(){
			navbar_top = navbar.offset().top;
		});
		console.log('nav-top' + navbar_top);
		if(navbar_top == 0) {
			navbar.addClass('fixed');
			$('.main-content').addClass('nav-fixed');
		}

		$(window).on('scroll', function(){
			if($(window).scrollTop() >= navbar_top ) {
				navbar.addClass('fixed');
				$('.main-content').addClass('nav-fixed');
			} else {
				navbar.removeClass('fixed');
				$('.main-content').removeClass('nav-fixed');
			}
		});
	},
	featuredMedia: function(){
	    $(".post").each(function() {
			var thiseliment = $(this);
			var media_wrapper = $(this).find('featured');
			var media_content_image = media_wrapper.find($('img'));
			var media_content_embeded = media_wrapper.find('iframe');
			if (media_content_image.length > 0) {
				$(media_content_image).addClass('img-responsive').prependTo(thiseliment).wrap("<div class='featured-media'></div>");
				thiseliment.addClass('post-type-image');
				media_wrapper.remove();
			}
			else if (media_content_embeded.length > 0) {
				$(media_content_embeded).prependTo(thiseliment).wrap("<div class='featured-media'></div>");
				thiseliment.addClass('post-type-embeded');
			}
		});
	},
	responsiveIframe: function() {
		$('.post').fitVids();
	},
	highlighter: function() {
		$('pre code').each(function(i, block) {
		    hljs.highlightBlock(block);
		  });
	},
	backToTop: function() {
		$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		$('#back-to-top').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({scrollTop : 0},1000);
			return false;
		});
	},
	errorBlockResize:function() {
		var wh = $(window).height();
		// var mhh = $('.main-header').height();
		var mfh = $('.main-footer').height();
		var ebh = wh-mfh-16-201;
		$('.error-block').css('min-height', ebh +'px');

		ebih = $('.error-block-inner').height();
		pdt = (ebh-ebih)/2;
		if (pdt>0) {
			$('.error-block-inner').css('padding-top', parseInt(pdt) +'px');
		}
	},
	errorBlockSize:function(){
		$(window).resize(function(){
			themeApp.errorBlockResize();
		});
	},
	init:function(){
		themeApp.coverSize();
		themeApp.coverResize();
		themeApp.fixedNav();
		themeApp.featuredMedia();
		themeApp.responsiveIframe();
		themeApp.highlighter();
		themeApp.backToTop();
		themeApp.errorBlockSize();
		themeApp.errorBlockResize();
	}
}
$(document).ready(function(){

	themeApp.init();
	$('.btn').on('click', function(e) {
		e.preventdefault();
	})
	// wh = $(window).height();
	// mhh = $('.main-header').height();
	// ch = wh-mhh;
	// $('.cover').css('min-height', ch+2 +'px');
	// console.log(wh);

	// cih = $('.cover-inner').height();
	// pdt = (ch-cih)/2;
	// if (pdt>0) {
	// 	$('.cover-inner').css('padding-top', parseInt(pdt) +'px');
	// }
});