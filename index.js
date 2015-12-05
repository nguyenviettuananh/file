/**
 * Created by tuananh on 12/4/15.
 */
const superString = require('./SuperString.js');
String.prototype.invert = superString.invert;
String.prototype.camelCase = superString.camelCase;
String.prototype.longestWord = superString.longestWord;
a = "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả";
console.log(a.invert());
console.log(a.camelCase());
console.log(a.longestWord());