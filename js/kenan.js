$(window).scroll(function () {
	if ($(window).scrollTop()>50) {
		$('.menu-main').css('top','0')
	}else{
		$('.menu-main').css('top','')
	}
})