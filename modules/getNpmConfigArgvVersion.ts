

type func = () => string;
/**
 *
 * yarn build:staging --version=*****
 * 用来获取 --version后面的版本号
 * @returns string
 */
const getNpmConfigArgvVersion: func = () => {
    const npm_config_argv = process.env.npm_config_argv
        ? JSON.parse(process.env.npm_config_argv)
        : process.env.npm_config_argv;
    const { original } = npm_config_argv || {};
    if (!original) { return; }
    const versionStr = original.find(item => /^--version/g.test(item));
    if (!versionStr) { return; }
    const [_, version] = versionStr.split('=');
    return version;
}

export default getNpmConfigArgvVersion;