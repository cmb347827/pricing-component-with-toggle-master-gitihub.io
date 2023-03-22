'use strict';
$(window).on('load',function(){
	
	
	document.querySelector('.toggle').addEventListener('keydown',function(event){
		
		if (event.key === "Enter" || event.key === "Spacebar") {
           // Prevent the default action to stop scrolling when space is pressed
           event.preventDefault();
           console.log('key is pressed');
		   const inputArr = document.querySelectorAll('input');
		   console.log(inputArr);
		
		   let show = document.querySelector('.year').getAttribute('data-show');
		   console.log('show',show);
		
		   if(show==='yes'){
			   $('.toggle__slider').css('left','40px');
		       $('.year').css('display','none');
		       $('.month').css('display','block');
	           document.querySelector('.year').setAttribute('data-show','no');
		   }else {
			   $('.toggle__slider').css('left','0');
		       $('.year').css('display','block');
		       $('.month').css('display','none');
		       document.querySelector('.year').setAttribute('data-show','yes');
	       }
        }
	});
	
	document.querySelector('.toggle').addEventListener('mousedown',function(event){
		
           // Prevent the default action to stop scrolling when space is pressed
           event.preventDefault();
           console.log('key is pressed');
		   const inputArr = document.querySelectorAll('input');
		   console.log(inputArr);
		
		   let show = document.querySelector('.year').getAttribute('data-show');
		   console.log('show',show);
		
		   if(show==='yes'){
			   $('.toggle__slider').css('left','40px');
		       $('.year').css('display','none');
		       $('.month').css('display','block');
	           document.querySelector('.year').setAttribute('data-show','no');
		   }else {
			   $('.toggle__slider').css('left','0');
		       $('.year').css('display','block');
		       $('.month').css('display','none');
		       document.querySelector('.year').setAttribute('data-show','yes');
	       }
        
	});
	
});