// 回最上層 js
$("#goTop").click(function () {
  $("html").animate({
    scrollTop: 0
  }, 300)
})
$("#goTop").fadeOut('fast')
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) $('#goTop').fadeIn("fast")
  else $('#goTop').stop().fadeOut("fast")
})

// 滑鼠特效
new fairyDustCursor({
  colors: ["#ff0000", "#00ff00", "#0000ff"]
})

//背景泡泡特效
bubbly({
  colorStart: "#D0D0D0",
  colorStop: "#D0D0D0",
  compose: "source-over",
  bubbleFunc: () => `hsla(${Math.random() * 360}, 100%, 50%, .3)`
})

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
}

firebase.initializeApp(firebaseConfig)
var database = firebase.database()

//判斷是否為移動設備
function isMobileDevice () {
  let mobileDevices = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
  let isMobileDevice = false
  for (var i = 0; i < mobileDevices.length; i++) {
    if (navigator.userAgent.match(mobileDevices[i])) isMobileDevice = true
  }
  return isMobileDevice
}

//檢查是否登入
function checkUser () {
  let user = firebase.auth().currentUser
  if (user == null || user == '') return false
  else return true
}

//隨機load動畫
function randomLoader () {
  let randomNum = Math.floor(Math.random() * 19) + 1
  return '<div style="margin:auto;"><img style="height:30vh;width:22.5vw;" src="../images/loading_gif/load_' + randomNum + '.gif"></div>'
}

//陣列物件過濾重復，originalArray:物件陣列，prop:要過濾的key值
function removeDuplicates (originalArray, prop) {
  let newArray = []
  let lookupObject = {}
  for (let i in originalArray) {
    lookupObject[originalArray[i][prop]] = originalArray[i]
  }
  for (let i in lookupObject) {
    newArray.push(lookupObject[i])
  }
  return newArray
}

//生成uuid
function uuid () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

//隨產生色碼陣列
function getRandomColorAry (count) {
  const colorAry = []
  for (let i = 0; i < count; i++) {
    // 生成隨機的 R、G、B 分量
    let randomR = Math.floor(Math.random() * 256)
    let randomG = Math.floor(Math.random() * 256)
    let randomB = Math.floor(Math.random() * 256)

    // 將分量轉換為十六進位，並補零到兩位
    // let hexR = ('0' + randomR.toString(16)).slice(-2)
    // let hexG = ('0' + randomG.toString(16)).slice(-2)
    // let hexB = ('0' + randomB.toString(16)).slice(-2)

    // 組合成完整的色碼
    //let randomColor = '#' + hexR + hexG + hexB
    let randomColor = 'rgba(' + randomR + ', ' + randomG + ', ' + randomB + ', 0.5)'
    colorAry.push(randomColor)
  }

  return colorAry
}

// 下面是以後可能會用到的東西...

// firebase auth 登出，以後可能有G會用到
// firebase.auth().signOut().then(function () {
//     var user = firebase.auth().currentUser;
//     console.log(user)
// })

//建立leaflet地圖
// var map = L.map('mapid', {
//     center: [22.992, 120.239], //初始經緯度
//     zoom: 8, //初始比例
//     layers: new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'), //地圖圖源
// });

//JS過濾重複資料
//=== 取出不重複 !==取出重複
//array = array.filter(function (element, index, arr) {
//return arr.indexOf(element) === index;
//});

//html去除換行
//str.replace(/\r\n|\n/g,"");

//cors anywhere使用，上面是範例，下面是測試(無法頻繁送請求會擋)
// $.ajaxPrefilter((options)=> {
//     if (options.crossDomain && $.support.cors) {
//         options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
//     }
// });

// $.get('https://www.lceb.gov.tw/OpenData.aspx?SN=1FFBB23423F4336E', (result) => {
//     console.log(result)
// })
