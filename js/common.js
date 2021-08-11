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

// toastr工具範例 以後如果有用到的話...
// toastr.options = {
//     "closeButton": true,
//     "debug": false,
//     "newestOnTop": false,
//     "progressBar": true,
//     "positionClass": "toast-bottom-center",
//     "preventDuplicates": true,
//     "showDuration": "300",
//     "hideDuration": "1000",
//     "timeOut": "5000",
//     "extendedTimeOut": "1000",
//     "showEasing": "swing",
//     "hideEasing": "linear",
//     "showMethod": "fadeIn",
//     "hideMethod": "fadeOut"
// }

// 不知道為啥會跟w3.includeHTML()衝到所以強制硬改顏色、加事件
// toastr.info('<h4>有人傳送訊息給你<h4>').css('background-color', '#2F96B4').on('click', function () {
//     window.location.href = 'other/easyChat.html'
// });

// firebase auth 登出，以後可能有G會用到
// firebase.auth().signOut().then(function () {
//     var user = firebase.auth().currentUser;
//     console.log(user)
// })