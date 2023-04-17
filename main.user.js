// ==UserScript==
// @name         Fuck_ujs_Pj
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  江苏大学教务系统的自动评教脚本
// @author       KSroido
// @homepageURL  https://github.com/KSroido/UJS_jiaoPing/
// @supportURL   https://github.com/KSroido/UJS_jiaoPing/issues/
// @downloadURL  https://raw.githubusercontent.com/KSroido/UJS_jiaoPing/main/main.user.js
// @updateURL    https://raw.githubusercontent.com/KSroido/UJS_jiaoPing/main/main.user.js
// @match        https://*.ujs.edu.cn/*/xsjxpj2_2.aspx*
// @grant        none
// ==/UserScript==

function autoPj() {
    var score = 60; //教师分数, 默认60分
    var rad_a,rad_b;
    rad_a = "Datagrid1__ctl";
    rad_b = "_rb_0";
    var index = 1;
    while (true) { // 无限循环
        try {
          
        } catch (e) {
          if (e instanceof SyntaxError) {
            // 遇到SyntaxError时停止循环
            break;
          } else {
            throw e; // 不是SyntaxError直接抛出
          }
        }
      }
    //document.getElementById("Datagrid1:__ctl8:rb").checked = true;

    document.getElementById("Button1").click();
} autoPj();
