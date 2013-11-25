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

    // Feed the kitty
    var feedKitty = function () {
        if ( mood.hunger + 10 <= 100 ) {
            mood.hunger = mood.hunger + 10;
        }
        $hunger.css('width', mood.hunger + '%');
    }
    
    $fish.draggable({ 
        revert: true, 
        revertDuration: 20,
        drag: function () {
            $kitty.attr('src', '/media/images/kitty-hungry.png');            
        }
    });

    $kitty.droppable({
        drop: function () {
            $kitty.attr('src', '/media/images/kitty-nomming.png');
            feedKitty();
        }
    });

    // Toss kitty yarn
    $yarn.draggable();

    // get kitty stoned
    $catnip.draggable();

});
