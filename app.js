var MINI = require('minified');
var _ = MINI._,
    $ = MINI.$,
    $$ = MINI.$$,
    EE = MINI.EE,
    HTML = MINI.HTML;
$(function () {
    function openNav() {
        document.getElementById("sideNav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    function closeNav() {
        document.getElementById("sideNav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }

    function openCity(evt, cityName) {
        // Declare all variables
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    $('.triggerSideNavOpen').on('click', function () {
        openNav();
    });
    $('.triggerSideNavClose').on('click', function () {
        closeNav();
    });
    $('.sideNav a').on('click', function () {
        closeNav();
    });
    $('.tabContainer .tab .tablinks').on('click', function (event) {
        openCity(event, event.target.innerText);
    });
    $($('.tabContainer .tab .tablinks')[0]).set('+active');
    $('.tabContainer .tabcontent')[0].style.display = "block";
});