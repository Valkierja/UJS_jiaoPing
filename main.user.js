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


    //#wpjkc > li:nth-child(1)
    var teacher_id = "#wpjkc > li:nth-child(1)"
    // console.log(teacher_id)
    document.querySelector(teacher_id).click() //进入对应教师页面
    // giveScore()
    for (var i = 0; i < 9; i++) {
        $("input[name='pjf']")[i].value = "80"
    }
    document.querySelector('#submit').click()
    //location.reload();
}autoPj();

