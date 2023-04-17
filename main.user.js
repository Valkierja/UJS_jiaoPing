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

function giveScore() {
    var score = 80; //教师分数, 默认80分

    //以下是分数框哈希ID, 似乎是定值
    var ID_hash_first_part = 'li_2_F9066C26C99'
    var ID_hash_last_part = '89D1E05383001CAC1890'
    var ID_hash_mid_part = 4; // 循环从4开始
    let ID_hash_mid_part_hex = ID_hash.toString(16); // 转成十六进制

    for (; ID_hash_mid_part < 13; i++) {
        var ID_hash = ID_hash_first_part + ID_hash_mid_part_hex + ID_hash_last_part
        var Selector1 = '#' + ID_hash + ' > input[type=hidden]:nth-child(1)'
        var Selector2 = '#' + ID_hash + ' > input[type=hidden]:nth-child(2)'
        document.querySelector(Selector1).value = score
        document.querySelector(Selector2).value = score
    }




    document.querySelector('#submit').click()//提交该老师的分数
}

function autoPj() {

    var rad_a, rad_b;
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
