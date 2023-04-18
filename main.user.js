/* globals jQuery, $ */
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
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.js
// @grant        GM_addStyle
// ==/UserScript==

function autoPj() {
    // document.getElementById('wpj_yq').click()//转换到未评价页面
    var hash = ['#li_2_F9066C26C99489D1E05383001CAC1890', '#li_2_F9066C26C99589D1E05383001CAC1890', '#li_2_F9066C26C99689D1E05383001CAC1890', '#li_2_F9066C26C99789D1E05383001CAC1890', '#li_2_F9066C26C99889D1E05383001CAC1890', '#li_2_F9066C26C99989D1E05383001CAC1890', '#li_2_F9066C26C99a89D1E05383001CAC1890', '#li_2_F9066C26C99b89D1E05383001CAC1890', '#li_2_F9066C26C99c89D1E05383001CAC1890']

    //#wpjkc > li:nth-child(1)
    var teacher_id = "#wpjkc > li:nth-child(1)"
    // console.log(teacher_id)
    document.querySelector(teacher_id).click() //进入对应教师页面
    // giveScore()
    for (var i = 0; i < 9; i++) {
        document.querySelector(hash[i] + ' > input[type=hidden]:nth-child(2)').value = 80
    }


    document.querySelector('#submit').click()
    //location.reload();
} autoPj();

