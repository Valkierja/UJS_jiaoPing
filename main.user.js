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
// @grant        none
// ==/UserScript==

function giveScore() {
    var score = '80'; //教师分数, 默认80分

    //以下是分数框哈希ID, 似乎是定值，没经过大范围测试
    var ID_hash_first_part = 'li_2_F9066C26C99'
    var ID_hash_last_part = '89D1E05383001CAC1890'
    var ID_hash_mid_part = 4; // 循环从4开始
    var ID_hash_mid_part_hex = ID_hash_mid_part.toString(16); // 转成十六进制, 有bug

    for (; ID_hash_mid_part < 13; ID_hash_mid_part++) {
        var ID_hash = ID_hash_first_part + ID_hash_mid_part_hex + ID_hash_last_part
        var Selector1 = '#' + ID_hash + ' > input[type=hidden]:nth-child(2)'
        var Selector2 = '#' + ID_hash + ' > input[type=hidden]:nth-child(3)'
        document.querySelector(Selector1).value = score//BUG:分数不是这样写的, 但是到底是怎么写进去分数的没太看懂
        document.querySelector(Selector2).value = score
    }


    document.querySelector('#submit').click()//提交该老师的分数
}

function autoPj() {
    document.getElementById('wpj_yq').click()//转换到未评价页面
    var index = 1;
    while (true) { // 无限循环
        try {
            var teacher_id = '#wpjkc > li:nth-child(' + index.toString(10) + ')'
            document.querySelector(teacher_id).click() //进入对应教师页面
            giveScore()
            ++index
        } catch (e) {
            if (e instanceof SyntaxError) {
                // 遇到SyntaxError时停止循环
                break;
            } else {
                throw e; // 不是SyntaxError直接抛出
            }
        }
    }
} autoPj();
