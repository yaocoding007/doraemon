(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["doraemon-js-utils"] = {}));
})(this, (function (exports) { 'use strict';

    /**
     *
     * yarn build:staging --version=*****
     * 用来获取 --version后面的版本号
     * @returns string
     */
    var getNpmConfigArgvVersion = function () {
        var npm_config_argv = process.env.npm_config_argv
            ? JSON.parse(process.env.npm_config_argv)
            : process.env.npm_config_argv;
        var original = (npm_config_argv || {}).original;
        if (!original) {
            return;
        }
        var versionStr = original.find(function (item) { return /^--version/g.test(item); });
        if (!versionStr) {
            return;
        }
        var _a = versionStr.split('='); _a[0]; var version = _a[1];
        return version;
    };

    var version = require("../package.json").version;

    exports.getNpmConfigArgvVersion = getNpmConfigArgvVersion;
    exports.version = version;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
