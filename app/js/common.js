$(function() {

	// Custom JS
    //E-mail Ajax Send
    $("form").submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function() {
            alert("Спасибо");
            setTimeout(function() {
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    //modal Ajax Send
    $(".form_modal").submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function() {
            alert("Спасибо");
            setTimeout(function() {
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });


        //modal
    $('.modal_button').click( function(event){ //
        event.preventDefault();
        $('.overlay').fadeIn(400,
            function(){
            $('.modal_form')
                .css('display', 'block')
                .animate({opacity: 1, top: '25%'}, 300);
        });
    });

    $('.close, .overlay').click( function(){
        $('.modal_form')
            .animate({opacity: 0, top: '-25%'}, 300,
                function(){
                    $(this).css('display', 'none');
                    $('.overlay').fadeOut(400);
                }
            );
    });
});


function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 53.9022, lng: 27.5619}
    });
    var marker = new google.maps.Marker({
        position: {lat: 53.9022, lng: 27.5619},
        map: map
    });

    var locations =[
        {lat: 53.882, lng: 27.461},
        {lat: 53.896, lng: 27.585},
        {lat: 53.896, lng: 27.585}
    ];
    var elem = document.querySelectorAll(".ion-md-pin");
    for (var i = 0; i < elem.length; i++) {
        (function (i) {
            elem[i].addEventListener('click', function() {
                marker.setMap(null);
                marker = new google.maps.Marker({position: locations[i]});
                marker.setMap(map)
            })
        })(i)
    }
}