$(function (){
    $('#main').fullpage({
        autoScrolling:true,
	    scrollHorizontally: true,
        onLeave: function(origin, destination, direction){
            $('.section').addClass('scroll');
        },
        afterLoad: function (origin, index) {
            $('.section').removeClass('scroll');
        },
        
    })
});