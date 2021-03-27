
//Toggles text box when clicked//

$(".info").mouseover(function(){
  $(".text-box").toggle();
  $(".backdrop").toggle();
})
$(".text-box").mouseleave(function(){
  $(".text-box").toggle();
  $(".backdrop").toggle();
  
  $(".info").mouseleave(function(){
  $(".text-box").toggle();
  $(".backdrop").toggle();
  });
})
//Shows refresh-message when mouseover event occurs//
$(".restart").mouseover(function(){
$(".refresh-message").toggle();
$(".backdrop").toggle();
});

$(".restart").mouseleave(function(){
$(".refresh-message").toggle();
$(".backdrop").toggle();
});

//When the push button is clicked it calls and activates this animated image function//
$(".push").click(function(){
  $(".soda-bottle2").hide();
  $(".soda-bottle3").show();
  $(".soda-bottle3").animate({
    marginTop: "210px", 
  },"fast");
  $(".soda-bottle3").animate({
  opacity: "0"
  },"fast");
  $(".soda-bottle").animate({
  opacity: "1"
  },2000);
  $(".sale-message").animate({
  opacity: "1"
  },4000);
});
//When the grab button is clicked it calls and activates this animated image function//
$(".grab-button").click(function(){
$(".hand-take").animate({
marginTop: "-150px"
});
$(".hand-take").animate({
marginTop: "-70px"
},2000);
$(".soda-bottle").animate({
marginTop: "420px"
},3000);
});
//When the restart button is clicked it calls and activates the reload function, and resets the code//
$(".restart").click(function(){
location.reload();
});