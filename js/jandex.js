/**
 * Дана строка, состоящая из букв A-Z:
 * "AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"
 * Нужно написать функцию RLE, которая на выходе даст строку вида:
 * "A4B3C2XYZD4E3F3A6B28"
 * И сгенерирует любую ошибку, если на вход пришла невалидная строка.
 *
 * Пояснение:
 * 1. если символ встречается 1 раз, он остается без изменений
 * 2. если символ повторяется более 1 раза, к нему добавляется количество повторений
 */
/*function rle(str) {
    let resStr = '';

    if (/^[A-Z]*$/.test(str)) {

        let masStr = str.split('');
        let symbol = masStr[0];
        let count = 1;

        function addStr(str, symbol, count) {
            return str + symbol + (count > 1 ? count : '');
        }

        let length = masStr.length;

        for (var i = 1; i <= length; i++) {

            if (i == length) {
                resStr = addStr(resStr, symbol, count);
                break;
            }

            if (symbol != masStr[i]) {
                resStr = addStr(resStr, symbol, count);
                symbol = masStr[i];
                count = 0;
            }

            count++;

        }

        return resStr;
    } else {
        //return new Error('not valid string');
        throw new UserException('notvalid');
    }
}
*/

var r = 'AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB';

console.log(/A+/.exec(r));

function rle(str) {
    let resStr = '';
    let symbol;
    if (/^[A-Z]*$/.test(str)) {
        while (str) {
            symbol = str[0];
            let r = new RegExp(symbol + '+');
            let count = r.exec(str)[0].length;
            resStr += symbol + count;
            r = new RegExp('^.{' + count + '}');
            str = str.replace(r, '');
        }
        return resStr;
    } else {
        return new Error('not valid string');
    }
}

try {
    var r = rle('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB');
} catch (e) {
    console.log(e);
}
console.log(r);