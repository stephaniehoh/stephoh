$(document).ready(function(){
  initScroll()
  initSnap()
  $("p.email-show").hide()
  emailHover()
  $('.hcaption').hcaptions({
    height: 365,
    width: 550,
    overlay_bg: '#ec0984',
    overlay_opacity: 0.85
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



