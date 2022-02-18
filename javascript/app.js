const menu = document.querySelector('.menu');
const menuSection = menu.querySelector('.menu-section');
const menuArrow = menu.querySelector('.menu-mobile-arrow');
const menuClosed = menu.querySelector('.menu-mobile-close');
const menuToggle = document.querySelector('.menu-mobile-toggle');
const menuOverlay = document.querySelector('.overlay');
const menuHasChildren = document.querySelector('.menu-item-has-children');
let subMenu;

menuSection.addEventListener('click', (e) => {
	if (!menu.classList.contains('active')) {
		return;
	}
	if (e.target.closest('.menu-item-has-children')) {
		const hasChildren = e.target.closest('.menu-item-has-children');
		showSubMenu(hasChildren);
	}
});

menuArrow.addEventListener('click', () => {
	hideSubMenu();
});

menuToggle.addEventListener('click', () => {
	toggleMenu();
    
});

menuClosed.addEventListener('click', () => {
	toggleMenu();
});

menuOverlay.addEventListener('click', () => {
	toggleMenu();
});

// Show & Hide Toggle Menu Function
function toggleMenu() {
	menu.classList.toggle('active');
	menuOverlay.classList.toggle('active');
}

// Show the Mobile Side Menu Function
function showSubMenu(hasChildren) {
	subMenu = hasChildren.querySelector('.menu-subs');
	subMenu.classList.add('active');
	subMenu.style.animation = 'slideLeft 0.5s ease forwards';
	const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
	menu.querySelector('.menu-mobile-title').innerHTML = menuTitle;
	menu.querySelector('.menu-mobile-header').classList.add('active');
}

// Hide the Mobile Side Menu Function
function hideSubMenu() {
	subMenu.style.animation = 'slideRight 0.5s ease forwards';
	setTimeout(() => {
		subMenu.classList.remove('active');
	}, 300);

	menu.querySelector('.menu-mobile-title').innerHTML = '';
	menu.querySelector('.menu-mobile-header').classList.remove('active');
}

// Windows Screen Resizes Function
window.onresize = function () {
	if (this.innerWidth > 991) {
		if (menu.classList.contains('active')) {
			toggleMenu();
		}
	}
};

 //Service Section
 $(document).ready(function () {
	$(".coverer").on("mouseover",function(){ 
       $(this).find(".caption").css({"transform":"translateY(0)","padding":"15px","min-height":"160px"});
	});
	$(".coverer").on("mouseout",function(){ 
		$(this).find(".caption").attr("style",'');
	 });
	   
$(".card-item").on("mouseover", function () {
		
    var classfinder= $(this).find(".testclass").removeClass("testclass");
    $(classfinder).addClass("mainclass");
	$(this).css({"background":"#fec01f"});
	$(this).find(".card-top h3").css({"color":"white"});
	$(this).find(".card-bottom p").css({"color":"white"});
	$(this).find(".card-top").addClass("top-center");
	$(".card-item::before").append("Hi");
	});

	$(".card-item").on("mouseout", function () {
		
		var classfinder= $(this).find(".mainclass").removeClass("mainclass");
		$(classfinder).addClass("testclass");
		$(this).css({"background":"white"});
		$(this).find(".card-top h3").css({"color":"#262339"});
		$(this).find(".card-bottom p").css({"color":"#262339"});
		$(this).find(".top-center").removeClass("top-center");
		});
	   
		// Section_skill 

		$(".progress-wrap").on("click",function(){ 

			alert("Hi");
		});

			$(".progress-bar").each(function(index,element){
			  var getvalue=$(".progress-value").text();
			  var mydata=$(element).text();
			  $(element).attr("style","width"+":"+mydata)
			  
			});
	
			$(window).scroll(function (event) {
				var scroll = $(window).scrollTop();
				// Do something
				console.log(scroll);	
				if(scroll >200){
					$(".header").css({"background":"white","position":"fixed"});
				}else if(scroll < 200){
					$(".header").css({"background":"white","position":"relative"});
				}
				
				
				$("a.brand img").css({"animation":"mymove 5s reverse"});
			
			});
	  
});

$(".menu-item-has-children").on("mouseover",function(){ 

 $(this).find(".ion-ios-arrow-down").css({"transform":"rotate(-180deg)"});

});
$(".menu-item-has-children").on("mouseout",function(){ 

	$(this).find(".ion-ios-arrow-down").css({"transform":"rotate(0deg)"});
   
   });


 
