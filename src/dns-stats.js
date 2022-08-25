const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsObject = {};

  domains.forEach(domain => {
    const dnsArr = domain.split(".").reverse();
    dnsArr[0] = "." + dnsArr[0];
    for (let i = 0; i < dnsArr.length; i++) {
      let dns = dnsArr.slice(0, i + 1).join(".");
      if (!dnsObject[dns]) {
        dnsObject[dns] = 1;
      } else {
        dnsObject[dns]++;
      }
    }
  });
  return dnsObject;
}

module.exports = {
  getDNSStats
};

/* let a = ('music.yandex.ru').split(".").reverse();
let obj = {};
a[0] = "." + a[0];
let result = [];
for (let i = 0; i < a.length; i++) {
  let dn = a.slice(0, i + 1).join(".");
  if (!obj[dn]) {
    obj[dn] = 1;
  } else {
    obj[dn]++;
  }
}
console.log(obj); */