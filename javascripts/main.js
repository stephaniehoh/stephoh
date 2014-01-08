$(document).ready(function(){
  initScroll()
  initSnap()
  $("p.email-show").hide()
  emailHover()
  $('.hcaption').hcaptions({
    height: 365,
    width: 550,
    overlay_bg: '#666',
    overlay_opacity: 0.9
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



