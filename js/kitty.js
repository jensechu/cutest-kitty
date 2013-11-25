$(document).ready(function() {
    console.log('hey cat');

    var $kitty = $('.kitty-container');

    // Change kitty's fur color
    var colors = ['#97D58C', '#FCF4CF', '#EF6B05', '#FBFE74', '#696D66', '#FFFFFF', '#A8CDC2', '#3C8417', '#B9BDD5', '#E49AC5', '#F75C29', '#AD88EE', '#EDD06F'];

    var changeFurColor = function () {
        var furColor = colors[Math.floor(Math.random() * colors.length)];
        $kitty.css('background', furColor);
    };

    $kitty.on('click', function(){
        changeFurColor();
    });
});
