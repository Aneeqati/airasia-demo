function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var arrows = document.getElementsByClassName("item");
for (var i = 0; i < arrows.length; i++) {
    arrows[i].style.background = getRandomColor();
}

function checkplace(id) {
    var imageUrl = "https://www.airasia.com/aa/yourtravels/images/destinations/" + id + ".png";
    $("#" + id).css('background-image', 'url("' + imageUrl + '")');
    $("#" + id).css('background-repeat', 'no-repeat');
    $("#" + id).css('background-position', 'center');
    $("#" + id).css('color', 'white');
}

function filterplace(value) {

    var el = $("[data-id*=" + value + "]");
    for (var j = 0; j < el.length; j++) {
        el[j].parentNode.parentNode.style.display = "block";
    }
    if ($("#" + value).length > 0) {
        $("#" + value).css("display", "block");
    }
    if ($("." + value).length > 0) {
        var elem = document.getElementsByClassName(value);
        for (var i = 0; i < elem.length; i++) {
            elem[i].style.display = "block";
        }
    }
}

$("#filter-results").on('change keyup paste', function (e) {
    var search_val = $('#filter-results').val();
    if (search_val.length == 0) {
        var element = document.getElementsByClassName("item-list");
        for (var i = 0; i < element.length; i++) {
            element[i].style.display = "block";
        }
    } else {
        var element = document.getElementsByClassName("item-list");
        for (var i = 0; i < element.length; i++) {
            element[i].style.display = "none";
        }
        search_val = search_val.replace(/\s/g, '');
        search_val = search_val.toLowerCase();
        filterplace(search_val);
    }
});
$(document).ready(function () {
    if ($(".savebtn").length) {

        var offsets = $(".savebtn").offset();
        $(".savebtn").css("top", offsets.top - 20)
    }
})