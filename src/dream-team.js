import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
    if (members) {
        if (typeof(members) !== 'boolean') {
            let i = 0;
            let result = [];
            while (i < members.length) {
                if (typeof(members[i]) === 'string') {

                    result.push(members[i].split(' ').join('').slice(0, 1).toUpperCase());
                    i++;
                } else { i++; }
            }

            return result.sort().join("")
        } else { return false }
    } else { return false }
}

/*complete*/