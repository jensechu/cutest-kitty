$(document).ready(function() {

    var $kitty = $('.kitty');
    var $kittyContainer = $('.kitty-container');

    var $fish = $('img[data-tool="fish"]');
    var $yarn = $('img[data-tool="yarn"]');
    var $catnip = $('img[data-tool="catnip"]');

    var $happiness = $('div[data-mood="happiness"]');
    var $hunger = $('div[data-mood="hunger"]');
    var $chill = $('div[data-mood="chill"]');

    var mood = {
        'happiness': 10,
        'hunger': 10,
        'chill': 10
    }

    var furColors = ['#97D58C', 
                     '#FCF4CF', 
                     '#EF6B05', 
                     '#FBFE74', 
                     '#696D66', 
                     '#FFFFFF', 
                     '#A8CDC2', 
                     '#3C8417', 
                     '#B9BDD5', 
                     '#E49AC5', 
                     '#F75C29', 
                     '#AD88EE', 
                     '#EDD06F'];

    // Change kitty's fur color
    var changeFurColor = function () {
        var furColor = furColors[Math.floor(Math.random() * furColors.length)];
        $kittyContainer.css('background', furColor);
    };

    $kittyContainer.on('click', function () {
        changeFurColor();
    });

    // Update the kitty's expression
    var updateKitty = function (tool) {
        if ( tool == "fish" ) {
            $kitty.attr('src', 'media/images/kitty-nomming.png');
            updateKittyMood('hunger');
        }

        else if ( tool == "yarn" ) {
            $kitty.attr('src', 'media/images/kitty-nomming.png');
            updateKittyMood('happiness');
        }

        else if ( tool == "catnip" ) {
            $kitty.attr('src', 'media/images/kitty-nomming.png');
            updateKittyMood('chill');
        }

        setTimeout( function() { resetKitty(tool) }, 2000);
    }

    // Update the kitty's mood
    var updateKittyMood = function ( emotion ) {
        if ( mood[emotion] + 10 <= 100 ) {
            mood[emotion] = mood[emotion] + 10;
        }
        $('div[data-mood="' + emotion + '"]').css('width', mood[emotion] + '%');
    }

    // Reset the kitty and tools
    var resetKitty = function( tool ) {
        switch ( tool ) {
            case "fish":
              console.log('fish');
              break;
            case "yarn":
              console.log('yarn');
              break;
            case "catnip":
              console.log('catnip');
              break;
        }
        $kitty.attr('src', 'media/images/kitty.png');
    }

    // Feed the kitty    
    $fish.draggable({ 
        revert: true, 
        revertDuration: 20,
        drag: function () {
            $kitty.attr('src', 'media/images/kitty-hungry.png');            
        }
    });

    // Toss the kitty yarn
    $yarn.draggable({
        revert: true, 
        revertDuration: 20
    });

    // Get the kitty stoned
    $catnip.draggable({
        revert: true, 
        revertDuration: 20
    });

    $kitty.droppable({
        drop: function (ev, obj) {
            var tool = $(obj.draggable[0]).data('tool');
            updateKitty(tool);
        }
    });

});
