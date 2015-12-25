/*site.js*/

function changeColor(id, newColor) {
    $("#" + id).css("color", newColor);
}


function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    var ele = $("#username");
    ele.text(h + ":" + m + ":" + s);
    //t = setTimeout(function () {
    //    startTime()
    //}, 500);
}
//startTime();

(function() {
    //startTime();

    //var ele = document.getElementById("username");
    //ele.innerHTML = "Siya1";
   
    //var main = document.getElementById("main");
    //main.onmouseenter = function() {
    //    main.style["background-color"] = "#888";
    //};

    //main.onmouseleave = function () {
    //    main.style["background-color"] = "";
    //};

    var ele = $("#username");
    ele.text("Siya22");
    //ele.css("color", "#000");
    //changeColor("username", "blue");

    var main = $("#main");
    //main.style = "background-color: #888;";
    main.on("mouseenter", function() {
        //main.css("background-color", "rgba(208, 230, 245, 1)");
        main.css("background-color", "#888");
    });

    main.on("mouseleave", function () {
        main.css("background-color", "");
        //main.style = "";
    });

    var menuItems = $("ul.menu li a");
    menuItems.on("click", function () {
        var t1 = $(this);
        alert(t1.text());
    });


    var $sidebarAndWrapper = $("#sidebar,#wrapper");
    $("#sidebarToggle").on("click", function () {
        $sidebarAndWrapper.toggleClass("hideSidebar");
        if ($sidebarAndWrapper.hasClass("hideSidebar")) {
            $(this).text("Show sidebar");
        } else {
            $(this).text("Hide sidebar");
        }

    });

})();

