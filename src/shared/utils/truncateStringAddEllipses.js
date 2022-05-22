/**
 * @param {string} str
 * @param {number} length
 * @return {string}
 */
export default function truncateStringAddEllipses(str, length) {
  return str?.length > length ? str.substr(0, length - 1) + '...' : str;
}