function addWords(obj, wrds) {
    if(obj) {
        let arr = delExtraSpaces(obj.words, wrds);
        obj.words = (removeDupl(arr)).join(' ');
    }
}

function removeWords(obj, wrds) {
    if(obj) {
        let arr = removeDupl(delExtraSpaces(obj.words));
        let arrOfWrds = removeDupl(delExtraSpaces(wrds));
        arrOfWrds.forEach(pos => {
            if(arr.indexOf(pos) === -1)
                return 0;
            else
                arr.splice(arr.indexOf(pos), 1);
        });
        obj.words = arr.join(" ");
    }
}

function changeWords(obj, oldWrds, newWrds) {
    if(obj) {
        let arr = removeDupl(delExtraSpaces(obj.words));
        let arrOldWrds = removeDupl(delExtraSpaces(oldWrds));
        let arrNewWrds = removeDupl(delExtraSpaces(newWrds));
        arrOldWrds.forEach(pos => {
            if(arr.indexOf(pos) === -1)
                return 0;
            else
                arr.splice(arr.indexOf(pos), 1);
        });
        obj.words = arr.concat(arrNewWrds).join(" ");
    }
}

function delExtraSpaces(str = ' ', space = ' ') {
    return ((str + ' ' + space).trim()).split(/\s+/);
}

function removeDupl(arr) {
    return arr.filter((value, pos) => {
        return arr.indexOf(value) === pos;
    });
}
