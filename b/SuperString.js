/**
 * Created by tuananh on 12/4/15.
 */
module.exports = {
    invert: function () {
        var result = "";
        for (var i = this.length - 1; i >= 0; i--) {
            result += this.charAt(i);
        }
        return result;
    },
    camelCase: function () {
        var result = "";
        var prevChar = undefined;
        for (var i = 0; i < this.length; i++) {
            var currentChar = this.charAt(i);
            if (i == 0 || prevChar == " ") {
                result += currentChar.toUpperCase();
            } else {
                result += currentChar;
            }
            prevChar = currentChar;
        }
        return result;
    },
    longestWord : function() {
        var words = this.split(' ');
        var longest = 0;

        for (var i=0;i < words.length;i++) {
            if (words[i].length > longest) {
                longest = words[i].length;
                var longestWord = words[i];
            }
        }

        return [longestWord , longest];
    }
};