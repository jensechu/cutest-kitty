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
            $kitty.attr('src', '/media/images/kitty-nomming.png');
            updateKittyMood('hunger');
        }

        else if ( tool == "yarn" ) {
            $kitty.attr('src', '/media/images/kitty-nomming.png');
            updateKittyMood('happiness');
        }

        else if ( tool == "catnip" ) {
            $kitty.attr('src', '/media/images/kitty-nomming.png');
            updateKittyMood('chill');
        }

    }

    // Update the kitty's mood
    var updateKittyMood = function ( emotion ) {
        if ( mood[emotion] + 10 <= 100 ) {
            mood[emotion] = mood[emotion] + 10;
        }
        console.log(mood[emotion]);
        $('div[data-mood="' + emotion + '"]').css('width', mood[emotion] + '%');
    }


    // Feed the kitty    
    $fish.draggable({ 
        revert: true, 
        revertDuration: 20,
        drag: function () {
            $kitty.attr('src', '/media/images/kitty-hungry.png');            
        }
    });

    // Toss kitty yarn
    $yarn.draggable({
        revert: true, 
        revertDuration: 20
    });

    // get kitty stoned
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
