const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    let verticalJoin = [];
    for (let index = 0; index < letters[0].length; index++) {
        let verticalWord = '';
        for (let horizontalArray of letters) {
            verticalWord += horizontalArray[index]
        }
        verticalJoin.push(verticalWord);
    } 
    for (let v of verticalJoin) {
        if (v.includes(word)) {
            return true;
        }
    }
    return false;
};

module.exports = wordSearch