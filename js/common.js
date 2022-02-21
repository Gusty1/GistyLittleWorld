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
//拜託看到不要用我的金鑰，好人一生平安，謝謝
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

//判斷是否為移動設備
function isMobileDevice() {
  var mobileDevices = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
  var isMobileDevice = false
  for (var i = 0; i < mobileDevices.length; i++) {
    if (navigator.userAgent.match(mobileDevices[i])) {
      isMobileDevice = true
    }
  }
  return isMobileDevice
}

//檢查是否登入
function checkUser() {
  let user = firebase.auth().currentUser
  if (user == null || user == '') {
    return false
  } else {
    return true
  }
}

// 下面是可能有用到的東西...

// firebase auth 登出，以後可能有G會用到
// firebase.auth().signOut().then(function () {
//     var user = firebase.auth().currentUser;
//     console.log(user)
// })

// toastr工具範例
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

//建立leaflet地圖
// var map = L.map('mapid', {
//     center: [22.992, 120.239], //初始經緯度
//     zoom: 8, //初始比例
//     layers: new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'), //地圖圖源
// });

//cors anywhere使用，上面是範例，下面是測試(無法頻繁送請求會擋)
// $.ajaxPrefilter((options)=> {
//     if (options.crossDomain && $.support.cors) {
//         options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
//     }
// });

// $.get('https://www.lceb.gov.tw/OpenData.aspx?SN=1FFBB23423F4336E', (result) => {
//     console.log(result)
// })

//爬蟲的js，記得chrome工具要開
// $.ajax({
//     url: '',
//     method: 'get',
//     dataType: 'text',
//     success: (result) => {
//         let html = $.parseHTML(result)
//         $.each(html, function (i, el) {
//             $(el).find('img').each((index, value) => {
//                 //    $(value)...
//             })
//         });
//     },
// })