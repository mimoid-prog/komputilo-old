/*ZMIANA KOLORÓW W MENU
	scrollIntervalID = setInterval(stickIt, 10);

function stickIt() { 
	var headerTop = $('#page-header').offset().top;
	var offerTop = $('#offer').offset().top;
	var aboutUsTop = $('#about-us').offset().top;
	var contactTop = $('#contact').offset().top;
	var scrollTop = $(window).scrollTop()+50;
	
	if(scrollTop>offerTop && scrollTop<aboutUsTop) {
		$('a').removeClass('active');
		$('#offer-a').addClass('active');
	}
	else if(scrollTop>aboutUsTop && scrollTop<contactTop) {
		$('a').removeClass('active');
		$('#about-us-a').addClass('active');
	}
	else if(scrollTop>contactTop) {
		$('a').removeClass('active');
		$('#contact-a').addClass('active');
	}
	else {
		$('a').removeClass('active');
		$('#header-a').addClass('active');	
	}	
}*/


//STICKY MENU
$(document).ready(function() {
	var headerH = $('.header').height();   	
	var stickyNav = function(){
	var documentW = $(document).width();	
	var scrollTop = $(window).scrollTop();
	

		if (scrollTop > headerH && documentW>1050) { 
			$('.header').addClass('sticky-header');
			$('.auxiliary-div').css('display', 'block');
		} 
		else {
			$('.header').removeClass('sticky-header');
			$('.auxiliary-div').css('display', 'none');
		}
   };

   stickyNav();

   $(window).scroll(function() {
      stickyNav();
   });
});
   

//PŁYNNY SCROLL  
$(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
})

//ROZWIJANNIE MENU
$(function() {
	$(".menu-button").on("click", function(){
		$('.header-navigation-list').toggleClass('open');
		$('.page-header').toggleClass('open');
	});
});

//POWRÓT NA GÓRĘ
$(".back-to-top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});