declare type func = () => string;
/**
 *
 * yarn build:staging --version=*****
 * 用来获取 --version后面的版本号
 * @returns string
 */
declare const getNpmConfigArgvVersion: func;
export default getNpmConfigArgvVersion;
