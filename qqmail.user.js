// ==UserScript==
// @name        QQ邮箱链接免跳转
// @include     *://mail.qq.com/*
// @include     *://exmail.qq.com/*
// @grant       none
// @version     1.0
// @author      kazutoiris
// @description QQ邮箱链接免跳转，一键直达，支持QQ邮箱、微信邮箱、腾讯企业邮箱
// ==/UserScript==

(function() {
    function patch(object, attr) {
        object[attr] = function() {
            // if (arguments[0].href) {
            //     console.log(arguments[0].href);
            // }
            return true;
        }
    }
    patch(window, 'openExtLink');
    patch(window, '_openExtLink');
})();