// ==UserScript==
// @name         Fuck_ujs_Pj
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  江苏大学教务系统的自动评教脚本
// @author       KSroido
// @homepageURL  https://github.com/KSroido/UJS_jiaoPing/
// @supportURL   https://github.com/KSroido/UJS_jiaoPing/issues/
// @downloadURL  https://raw.githubusercontent.com/KSroido/UJS_jiaoPing/master/main.user.js
// @updateURL    https://raw.githubusercontent.com/KSroido/UJS_jiaoPing/master/main.user.js
// @match        https://webvpn.ujs.edu.cn/http/*/xsjxpj2_2.aspx*
// @grant        none
// ==/UserScript==

function autoPj() {
    var rad_a,rad_b;
    rad_a = "Datagrid1__ctl";
    rad_b = "_rb_0";
    for(var i=2;i<=11;i++)
    {
        document.getElementById(rad_a+i+rad_b).checked = true;
    }
    //document.getElementById("Datagrid1:__ctl8:rb").checked = true;
    document.getElementById("txt_pjxx").value = '老师备课充分，授课重点突出。';
    document.getElementById("Button1").click();
} autoPj();
