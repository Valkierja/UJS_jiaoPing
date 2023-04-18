// ==UserScript==
// @name         Fuck_ujs_Pj
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  江苏大学教务系统的自动评教脚本
// @author       KSroido
// @homepageURL  https://github.com/KSroido/UJS_jiaoPing/
// @supportURL   https://github.com/KSroido/UJS_jiaoPing/issues/
// @downloadURL  https://raw.githubusercontent.com/KSroido/UJS_jiaoPing/main/main.user.js
// @updateURL    https://raw.githubusercontent.com/KSroido/UJS_jiaoPing/main/main.user.js
// @match        https://*.ujs.edu.cn/*kcgcpj_cxKcgcpjxxIndex.html*
// @match        http://*.ujs.edu.cn/*kcgcpj_cxKcgcpjxxIndex.html*
// ==/UserScript==



function teacher() {
    console.log("teacher() start")
    //#wpjkc > li:nth-child(1)
    var teacher_id = "#wpjkc > li:nth-child(1)"

    document.querySelector(teacher_id).click() //进入对应教师页面
    console.log("teacher() end")

}



function giveScore() {
    console.log("teacher() start")
    var hash = ["#li_2_F9066C26C99489D1E05383001CAC1890", "#li_2_F9066C26C99589D1E05383001CAC1890", "#li_2_F9066C26C99689D1E05383001CAC1890", "#li_2_F9066C26C99789D1E05383001CAC1890", "#li_2_F9066C26C99889D1E05383001CAC1890", "#li_2_F9066C26C99989D1E05383001CAC1890", "#li_2_F9066C26C99a89D1E05383001CAC1890", "#li_2_F9066C26C99b89D1E05383001CAC1890", "#li_2_F9066C26C99c89D1E05383001CAC1890"]
 
    document.querySelector("#li_2_F9066C26C99489D1E05383001CAC1890 > input[type=hidden]:nth-child(2)").value = '80' //不能用for循环, 会有堵塞的问题
    document.querySelector("#li_2_F9066C26C99589D1E05383001CAC1890 > input[type=hidden]:nth-child(2)").value = '80'
    document.querySelector("#li_2_F9066C26C99689D1E05383001CAC1890 > input[type=hidden]:nth-child(2)").value = '80'
    document.querySelector("#li_2_F9066C26C99789D1E05383001CAC1890 > input[type=hidden]:nth-child(2)").value = '80'
    document.querySelector("#li_2_F9066C26C99889D1E05383001CAC1890 > input[type=hidden]:nth-child(2)").value = '80'
    document.querySelector("#li_2_F9066C26C99989D1E05383001CAC1890 > input[type=hidden]:nth-child(2)").value = '80'
    document.querySelector("#li_2_F9066C26C99A89D1E05383001CAC1890 > input[type=hidden]:nth-child(2)").value = '80'
    document.querySelector("#li_2_F9066C26C99B89D1E05383001CAC1890 > input[type=hidden]:nth-child(2)").value = '80'
    document.querySelector("#li_2_F9066C26C99C89D1E05383001CAC1890 > input[type=hidden]:nth-child(2)").value = '80'
   // while (true) {
    //     if (document.querySelector(hash[0] + " > input[type=hidden]:nth-child(2)")) {
    //         for (var i = 0; i < 9; i++) {
    //             var temp = hash[i] + " > input[type=hidden]:nth-child(2)"
    //             document.querySelector(temp).value = '80'
    //         }
    //     }
    // }
}
function autoPj() {
    //setTimeout(teacher(), 5000);
    teacher()

    window.addEventListener('load', () => { console.log('load ready'); giveScore() })
    giveScore()
    //location.reload();
} autoPj();


// console.log("teacher() start")
// //#wpjkc > li:nth-child(1)
// var teacher_id = "#wpjkc > li:nth-child(1)"

// document.querySelector(teacher_id).click() //进入对应教师页面
// console.log("teacher() end")
// for (var jindex = 0; jindex < 100000; jindex++) {
//     console.log("settime")
// }

// for (var iindex = 0; iindex < 9; iindex++) {
//     var temp = hash[iindex] + " > input[type=hidden]:nth-child(2)"
//     document.querySelector(temp).value = '80'
// }