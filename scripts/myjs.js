
$( document ).ready(function() {

  $('#nmtp').hover(
    function(){
      $('#nmtptitle').css('color', '#93DEFF');
    }, function(){
      $('#nmtptitle').css('color', '#717B7F');
    }
  );

  $('#snow').hover(
    function(){
      $('#snowtitle').css('color', '#93DEFF');
    }, function(){
      $('#snowtitle').css('color', '#717B7F');
    }
  );

  matchX();
});


$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 600) {
            $("img").removeClass("rightCol").addClass("blueBG");
            console.log("Done");
    }

    matchX();
});

function matchX() {
      console.log("ran")
      var ppos = $('#smiles').position();
      console.log(ppos.left);
      //console.log($('#smilestitle').left);
      $('#smilestitle').position({left: ppos - 10});
      
};