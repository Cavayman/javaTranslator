/**
 * Created by cavayman on 06.01.2017.
 */
$(".login-label").on("click", closeOpen);
$("section,footer").on("click",function () {
    var login = $(".login");

    login.css("visibility", "hidden");
})

function closeOpen() {
    var login = $(".login");
    if (login.css("visibility") === "visible") {
        login.css("visibility", "hidden");
    }
    else {
        login.css("visibility", "visible");

    }
}