'use strict';

let row, maxunit, m;

row = +prompt('행크기');
m = (row + 1) / 2;

maxunit = (row * row) / 2 + 1 + '';

// for (let i = 1, v = 1, st, ed; i <= row; i++) {
//     if (i <= m) {
//         st = i, ed = row + 1 - i;
//     } else {
//         st = row + 1 - i, ed = i;
//     }

//     for (let j = 1, result, spaceEd; j <= ed; j++) {
//         if (j < st) {
//             result = '';
//             spaceEd = maxunit.length;
//         } else {
//             result = v + '';
//             spaceEd = maxunit.length - result.length;
//             v++;
//         }

//         for (let r = 0; r < spaceEd; r++) {
//             result = '&nbsp;' + result;
//         }
//         document.write(result + ' ');;
//     }
//     document.write('<br/>');
// }


for (let i = 1, v = 1, st, ed; i <= row; i++) {

    for (let j = 1, result, spaceEd; j <= row + 1 - i || j <= i; j++) {
        if (j < i && j < row + 1 - i) {
            result = '';
            spaceEd = maxunit.length;
        } else {
            result = v + '';
            spaceEd = maxunit.length - result.length;
            v++;
        }

        for (let r = 0; r < spaceEd; r++) {
            result = '&nbsp;' + result;
        }
        document.write(result + ' ');;
    }
    document.write('<br/>');
}