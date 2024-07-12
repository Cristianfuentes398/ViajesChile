const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100){
            console.log("hola")
            $("#index").addClass("bg-dark"); 
        }else {
            $("#index").removeClass("bg-dark"); 
        }
    });
}); 

$(function () {
    $("#enviar").click(function () {
        alert("El correo fue enviado correctamente");
    })

    $("#cardd1").on("mouseover", function () {
        $("#cardd1").css({ "color": "black", "font-weight": "bold"});
    })
    $("#cardd1").on("mouseout", function () {
        $("#cardd1").css({ "color": "white", "font-weight": "normal"});
    })
    $("#cardd2").on("mouseover", function () {
        $("#cardd2").css({ "color": "black", "font-weight": "bold"});
    })
    $("#cardd2").on("mouseout", function () {
        $("#cardd2").css({ "color": "white", "font-weight": "normal"});
    })
    $("#cardd3").on("mouseover", function () {
        $("#cardd3").css({ "color": "black", "font-weight": "bold"});
    })
    $("#cardd3").on("mouseout", function () {
        $("#cardd3").css({ "color": "white", "font-weight": "normal"});
    })
    $("#cardd4").on("mouseover", function () {
        $("#cardd4").css({ "color": "black", "font-weight": "bold"});
    })
    $("#cardd4").on("mouseout", function () {
        $("#cardd4").css({ "color": "white", "font-weight": "normal"});
    })

    $("#planeicon").click(function () {
        $("#paragrah1").toggle();
    })
    $("#mountainicon").click(function () {
        $("#paragrah2").toggle();
    })
    $("#routeicon").click(function () {
        $("#paragrah3").toggle();
    })
})