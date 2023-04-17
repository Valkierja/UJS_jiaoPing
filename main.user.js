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
// @grant        none
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
    location.reload();
}autoPj();




    // while (true) { // 无限循环
    //     try {
    //         //#wpjkc > li:nth-child(1)
    //         var teacher_id = "#wpjkc > li:nth-child(" + index.toString(10) + ")"
    //         // console.log(teacher_id)
    //         document.querySelector(teacher_id).click() //进入对应教师页面
    //         // giveScore()
    //         for (var i = 0; i < 9; i++) {
    //             $("input[name='pjf']")[i].value= "80"

    //         }
    //         document.querySelector('#submit').click()
    //         ++index
    //     } catch (e) {
    //         if (e instanceof SyntaxError) {
    //             // 遇到SyntaxError时停止循环
    //             break;
    //         } else {
    //             throw e; // 不是SyntaxError直接抛出
    //         }
    //     }
    // }



// function giveScore() {
//     for (var i = 0; i < 9; i++) {
//         $("input[name='pjf']")[i].value= "80"

//     }
// }


//旧版笨办法 有bug
// function giveScore() {
//     var score = '80'; //教师分数, 默认80分

//     //以下是分数框哈希ID, 似乎是定值，没经过大范围测试
//     var ID_hash_first_part = '#li_2_F9066C26C99'
//     var ID_hash_last_part = '89D1E05383001CAC1890 > input[type=hidden]:nth-child(2)'
//     var ID_hash_mid_part = 4; // 循环从4开始

//     for (; ID_hash_mid_part < 13; ID_hash_mid_part++) {
//         var ID_hash_mid_part_hex = ID_hash_mid_part.toString(16);
//         var Selector1 = ID_hash_first_part + ID_hash_mid_part_hex + ID_hash_last_part
//         //#li_2_F9066C26C99489D1E05383001CAC1890 > input[type=hidden]:nth-child(2)
//         //#li_2_F9066C26C99589D1E05383001CAC1890 > input[type=hidden]:nth-child(2)
//         // var Selector2 = '#' + ID_hash + ' > input[type=hidden]:nth-child(3)'
//         document.querySelector(Selector1).value = score//BUG:分数不是这样写的, 但是到底是怎么写进去分数的没太看懂
//         // document.querySelector(Selector2).value = score
//     }

//     document.querySelector('#submit').click()//提交该老师的分数
// }
