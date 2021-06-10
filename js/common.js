// 回最上層 js
$("#goTop").click(function () {
    $("html").animate({
        scrollTop: 0
    }, 1000);
});
$("#goTop").fadeOut('fast');
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('#goTop').fadeIn("fast");
    } else {
        $('#goTop').stop().fadeOut("fast");
    }
});

// 滑鼠特效
new fairyDustCursor({
    colors: ["#ff0000", "#00ff00", "#0000ff"]
});

//背景泡泡特效
bubbly({});

//social share tool init
$(window).on('load', function () {
    SocialShareKit.init();
});

// firebase realtimedatabase 設定
var firebaseConfig = {
    apiKey: "AIzaSyAK6h_Ar0tHjBKpyAswltO7AYRsJqasiBc",
    authDomain: "gusty-little-world.firebaseapp.com",
    projectId: "gusty-little-world",
    storageBucket: "gusty-little-world.appspot.com",
    messagingSenderId: "367454470907",
    appId: "1:367454470907:web:0b7d3f6c8cdea053da265e",
    measurementId: "G-H3LJ64Y0HB",
    databaseURL: "https://gusty-little-world-default-rtdb.firebaseio.com/"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();