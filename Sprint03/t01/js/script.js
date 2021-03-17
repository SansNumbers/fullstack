String.prototype.removeDuplicates = function() {
    let arr = this.split(' ').filter((element, index, thisArg) => {
        return index == thisArg.indexOf(element);
    }).join(' ');

    arr = arr.replace(/\s+/, ' ').trim();
    return arr;
};