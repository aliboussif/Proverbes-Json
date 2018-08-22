$(document).ready(function () {

    $(".partie").each(function () {
        $(this).click(function () {
            var element = $(this).find('p');
            $.getJSON('proverbes.json', function (data) {
                var lg = data.proverbes.length;
                var proverbe = data.proverbes[Math.ceil(Math.random() * lg)];
                $(element).html(proverbe.proverbe+"<br> origine : "+proverbe.origine);
            });
        });
    });
    
    $.getJSON('proverbes.json', function (data) {
        $("h2").html(data.titre);
    });

});