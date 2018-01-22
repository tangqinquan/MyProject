$(function(){
    $(".btn").click(function(){
        $(".div1").animate({left:'50%',top:'20%'},2000);
        $(".div2").animate({left:'50%',top:'40%'},2000)
    })
    $(".btn2").click(function(){
        $(".div1").animate({left:'10%',top:'10%'},2000);
        $(".div2").animate({left:'70%',top:'10%'},2000)
    })

});

$(".btn3").click.toggle(function(){
    $(".div1").animate({left:'50%',top:'20%'},2000);
    $(".div2").animate({left:'50%',top:'40%'},2000)
},function(){
    $(".div1").animate({left:'10%',top:'10%'},2000);
    $(".div2").animate({left:'70%',top:'10%'},2000)
})
//$(this).animate({left:'10%',top:'0%'},1000)
//),function(){
   // $(this).animate({left:'90%',top:'30%'},1000);