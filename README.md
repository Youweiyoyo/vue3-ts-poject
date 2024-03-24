// ==UserScript==
// @name         自动确认屏蔽
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  在点击屏蔽按钮时自动点击确定按钮
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 在这里添加你想要屏蔽的按钮的选择器
    var blockButtonSelector = 'your-block-button-selector';

    // 在这里添加你想要点击的确认按钮的选择器
    var confirmButtonSelector = 'your-confirm-button-selector';

    // 监听点击事件
    document.addEventListener('click', function(event) {
        // 如果点击的是屏蔽按钮
        if (event.target.matches(blockButtonSelector)) {
            // 找到确认按钮并点击
            var confirmButton = document.querySelector(confirmButtonSelector);
            if (confirmButton) {
                confirmButton.click();
            } else {
                console.log('找不到确认按钮！');
            }
        }
    });
})();
