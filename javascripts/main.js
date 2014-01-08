$(document).ready(function() {
  initScroll()
  initSnap()
  $("p.email-show").hide()
  emailHover()
  $('.hcaption').hcaptions({
    height: 370,
    width: 550,
    overlay_bg: 'black',
    overlay_opacity: 0.8
  });
})

function initScroll(){
  $(function(){
    $.scrollIt({
      easing: 'ease-in'
    });
  })
}

function initSnap(){
  $(document).scrollsnap({
    snaps: 'section',
    proximity: 125,
    easing: 'easeOutQuart'
  });
}

function emailHover(){
 $("a.email").hover(function(){
  $("p.email-show").show(600);
 });

}
