// JavaScript Document
$(document).ready(function(){
    "use strict";
    $("p").click(function(){
        $(this).toggleClass("highlight");
    });
    $("h2").click(function(){
        $(this).css("color", "#A415C4");
    });
    $("#small").click(function(){
        $("body").css("font-size", "1em");
    });
    $("#medium").click(function(){
        $("body").css("font-size", "1.3em");
    });
    $("#large").click(function(){
        $("body").css("font-size", "1.6em");
    });
});