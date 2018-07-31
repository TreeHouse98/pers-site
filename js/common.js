$(document).ready(function () {
	//Wow JS
	new WOW().init();

	//MixiTub Works

    function heightDetect() {
        $('.main_head').css("height", $(document).height());
    }
    heightDetect();

    $(window).resize(function () {
		heightDetect();
    });

    //Slowly Slide
    $(".slowly").on('click', function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$("body, html").animate({scrollTop: top}, 1500);
    });

    //Header with Scroll
	$(window).scroll(function () {
		if($(window).scrollTop() > 610){
			$('.main-menu-wrap').addClass('scroll');
			$('.main-menu-wrap .main-menu .nav-menu li a').css('color', '#111');
			$('.mobile-menu-button').css('color', '#111');
			$('svg path').css('fill', '#111');
		} else {
			$('.main-menu-wrap').removeClass('scroll');
            $('.main-menu-wrap .main-menu .nav-menu li a').css('color', '#fff');
            $('.mobile-menu-button').css('color', '#fff');
            $('svg path').css('fill', '#fff');
		}
    });

	//Mobile Menu
	$('.mobile-menu-button').click(function (event) {
		event.preventDefault();
		if(!$('body > .layout').hasClass('aside-form-open')){
			$('body > .layout').removeClass('aside-form-close').addClass('aside-form-open');
			$('.mobile-wrapper').removeClass('close').addClass('open');
			$('.mobile-menu-button').removeClass('unhide').addClass('hide');
		} else {
			$('body > .layout').removeClass('aside-form-open').addClass('aside-form-close');
			$('.mobile-wrapper').removeClass('open').addClass('close');
			$('.mobile-menu-button').removeClass('hide').addClass('unhide');
		}
    });

	//Close Mobile Menu
	$('.mobile-wrapper .popup-but-close').click(function (event) {
		event.preventDefault();
        $('body > .layout').removeClass('aside-form-open').addClass('aside-form-close');
        $('.mobile-wrapper').removeClass('open').addClass('close');
        $('.mobile-menu-button').removeClass('hide').addClass('unhide');
    });

	//Skills Bar
    $(".chart").each(function () {
		$(this).easyPieChart({
			size: 140,
			animate: 2000,
			lineCap: 'butt',
			scaleColor: false,
			barColor: '#1DE9B6',
			trackColor: 'transparent',
			lineWidth: 8
		});
    });

    //MixiTup Works
	$('#table-works').mixItUp();

    //Portfolio Nav Link Theme
	$('.s-works li').click(function () {
		$('.s-works li').removeClass('active');
		$(this).addClass('active');
    });

	//Popup Description Block
	$('.popup').magnificPopup();

	//Name of ID for works
	var arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

	//Each Portfolio Item for adding ID
	$('.portfolio-item').each(function (i) {
		$(this).find("a").attr("href", "#work-" + arr[i]);
        $(this).find(".port-descr").attr("id", "work-" + arr[i]);
    });

	//Modal Success
	$('.btn-close-modal').click(function (event) {
		event.preventDefault();
		$('.success-popup').fadeOut(300);
    });

	//E-mail Ajax Send
	$(".main-form").submit(function(event) {
		event.preventDefault();
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
            $('.success-popup').fadeIn(600);
			setTimeout(function() {
                $('.success-popup').fadeOut(600);
				th.trigger("reset");
			}, 2300);
		});
		return false;
	});

    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {
		console.log(err);
    }

    $("img, a").on("dragstart", function(event) {
    	event.preventDefault();
    });
});