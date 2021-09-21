import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
    let result = 0;

    for (let i = 0; i < matrix.length; i++) {
        let j = 0;
        while (j < matrix[i].length) {
            if (matrix[i][j] === '^^') {
                result += 1;
                j++;
            } else { j++ }

        }
    }
    return result
}

/*complete*/