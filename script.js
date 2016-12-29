"use strict";

(function(){

    var counter = 60;
    function clock(){
    var set_Interval = setInterval(function(){
    counter --;
    $('#timer_text').text(counter);
    if ($('#timer_text').text() == "0" ) {
      // $('#timer_text').text('0')
      clearInterval(set_Interval);
      if ($yourScore >= 6) {
        $('#game_message').text('You Win!! Game will reload in 5 seconds...');
        setInterval(function(){
          location.reload(true)
        },5000);
      }
      else {
        $('#game_message').text('You Lose! Game will reload in 5 seconds...');
        setInterval(function(){
          location.reload(true)
        },5000);
      }
    }
    },1000);
    }
    clock();


    var $person = $('.person');

    var $joffrey = $('#joffrey.person')
    var $cersei = $('#cersei.person')
    var $eddard = $('#eddard.person')
    var $hillary = $('#hillary.hillary')
    var $hodor= $('#hodor.person')
    var $jonsnow = $('#jonsnow.person')
    var $nun = $('#nun.person')
    var $sansa = $('#sansa.person')
    var $tyrion = $('#tyrion.person')
    var $tywin = $('#tywin.person')
    var $whitewalker = $('#whitewalker.person')
    var $whitewalker2 = $('#whitewalker2.person')
    var $direwolf = $('#direwolf.person')

    var $generate = setInterval(function(){
      $person.each(function() {
      $(this).css("top", Math.random() * window.innerHeight);
      $(this).css("left", Math.random() * window.innerWidth);
    })
    }, 700)
    var $generate = setInterval(function(){
      $hillary.each(function() {
      $(this).css("top", Math.random() * window.innerHeight);
      $(this).css("left", Math.random() * window.innerWidth);
    })
    }, 700)
    var $yourScore = $('#score_text').text()


    $eddard.on("click", function() {
        $('#game_message').text('Eddard killed! Lose 1 point');
      $yourScore = Number($yourScore) - 1;
      $('#score_text').html($yourScore);
      setTimeout(function() {
        $('#game_message').text('');
      }, 2000)
      $eddard.addClass("dead");
      setTimeout(function() {
        $eddard.remove();
      }, 1500)
      $(this).removeClass('person')
    })

    $joffrey.on("click", function() {
        $('#game_message').text('Joffrey killed! Gain 1 point');
      $yourScore = Number($yourScore) + 1;
      $('#score_text').html($yourScore);
      setTimeout(function() {
        $('#game_message').text('');
      }, 2000)
      $joffrey.addClass("dead");
      setTimeout(function() {
        $joffrey.remove();
      }, 1500)
      $(this).removeClass('person')
    })
//     $hillary.on("click", function() {
//         $('#game_message').text('Hillary killed! Gain 5 points');
//       $yourScore = Number($yourScore) + 5;
//       $('#score_text').html($yourScore);
//       setTimeout(function() {
//         $('#game_message').text('');
//       }, 2000)
//       $hillary.addClass("dead");
//       setTimeout(function() {
//         $hillary.remove();
//       }, 1500)
//       $(this).removeClass('person')
//     })
    $cersei.on("click", function() {
        $('#game_message').text('Cersei killed! Gain 1 point');
      $yourScore = Number($yourScore) + 1;
      $('#score_text').html($yourScore);
      setTimeout(function() {
        $('#game_message').text('');
      }, 2000)
      $cersei.addClass("dead");
      setTimeout(function() {
        $cersei.remove();
      }, 1500)
      $(this).removeClass('person')
    })
    $hodor.on("click", function() {
        $('#game_message').text('Hodor killed! Lose 1 point');
      $yourScore = Number($yourScore) - 1;
      $('#score_text').html($yourScore);
      setTimeout(function() {
        $('#game_message').text('');
      }, 2000)
      $hodor.addClass("dead");
      setTimeout(function() {
        $hodor.remove();
      }, 1500)
      $(this).removeClass('person')
    })
    $jonsnow.on("click", function() {
        $('#game_message').text('Jon Snow killed! Lose 1 point');
      $yourScore = Number($yourScore) - 1;
      $('#score_text').html($yourScore);
      setTimeout(function() {
        $('#game_message').text('');
      }, 2000)
      $jonsnow.addClass("dead");
      setTimeout(function() {
        $jonsnow.remove();
      }, 1500)
      $(this).removeClass('person')
    })
    $nun.on("click", function() {
        $('#game_message').text('Evil nun killed! Gain 1 point');
      $yourScore = Number($yourScore) + 1;
      $('#score_text').html($yourScore);
      setTimeout(function() {
        $('#game_message').text('');
      }, 2000)
      $nun.addClass("dead");
      setTimeout(function() {
        $nun.remove();
      }, 1500)
      $(this).removeClass('person')
    })
    $sansa.on("click", function() {
        $('#game_message').text('Sansa Stark killed! Lose 1 point');
      $yourScore = Number($yourScore) - 1;
      $('#score_text').html($yourScore);
      setTimeout(function() {
        $('#game_message').text('');
      }, 2000)
      $sansa.addClass("dead");
      setTimeout(function() {
        $sansa.remove();
      }, 1500)
      $(this).removeClass('person')
    })
    $tyrion.on("click", function() {
        $('#game_message').text('Tyrion killed! Lose 1 point');
      $yourScore = Number($yourScore) - 1;
      $('#score_text').html($yourScore);
      setTimeout(function() {
        $('#game_message').text('');
      }, 2000)
      $tyrion.addClass("dead");
      setTimeout(function() {
        $tyrion.remove();
      }, 1500)
      $(this).removeClass('person')
    })
    $tywin.on("click", function() {
        $('#game_message').text('Tywin killed! Gain 1 point');
      $yourScore = Number($yourScore) + 1;
      $('#score_text').html($yourScore);
      setTimeout(function() {
        $('#game_message').text('');
      }, 2000)
      $tywin.addClass("dead");
      setTimeout(function() {
        $tywin.remove();
      }, 1500)
      $(this).removeClass('person')
    })
    $whitewalker.on("click", function() {
        $('#game_message').text('White Walker killed! Gain 1 point');
      $yourScore = Number($yourScore) + 1;
      $('#score_text').html($yourScore);
      setTimeout(function() {
        $('#game_message').text('');
      }, 2000)
      $whitewalker.addClass("dead");
      setTimeout(function() {
        $whitewalker.remove();
      }, 1500)
      $(this).removeClass('person')
    })
    $whitewalker2.on("click", function() {
        $('#game_message').text('White Walker killed! Gain 1 point');
      $yourScore = Number($yourScore) + 1;
      $('#score_text').html($yourScore);
      setTimeout(function() {
        $('#game_message').text('');
      }, 2000)
      $whitewalker2.addClass("dead");
      setTimeout(function() {
        $whitewalker2.remove();
      }, 1500)
      $(this).removeClass('person')
    })
    $direwolf.on("click", function() {
        $('#game_message').text('You killed a direwolf!!! Lose 5 points');
      $yourScore = Number($yourScore) - 5;
      $('#score_text').html($yourScore);
      setTimeout(function() {
        $('#game_message').text('');
      }, 2000)
      $direwolf.addClass("dead");
      setTimeout(function() {
        $direwolf.remove();
      }, 2500)
      $(this).removeClass('person')
    })
    setInterval(function(){
      $('.person').hide('slow/400/fast'), function() {

      };
    }, 2200)

    setInterval(function(){
      $('.person').show('slow/400/fast'), function() {

      };
    }, 500)
    setInterval(function(){
      $('.hillary').hide('slow/400/fast'), function() {

      };
    }, 1500)

    setInterval(function(){
      $('.hillary').show('slow/400/fast'), function() {

      };
    }, 4000)















})();
