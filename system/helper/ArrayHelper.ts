/**
 * array to string
 * @param {*} a
 * @returns {string}
 */
export function arrayToString(a) {
  var s = "";
  for (var i = 0; i < a.length; i++) {
    if (s != "") s += ",";
    s += a[i];
  }
  return s;
}
