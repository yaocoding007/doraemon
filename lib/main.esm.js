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

export { getNpmConfigArgvVersion, version };
