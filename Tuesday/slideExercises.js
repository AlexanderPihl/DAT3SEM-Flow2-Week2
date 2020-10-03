const myList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function myCallback(param) {
    let x = param * 10;
    if (x < 500) {
        return true;
    } else {
        return false;
    }
}

function myFilter(myList, callback) {
    const newList = [];
    for (idx in myList) {
        if (callback(myList[idx])) {
            newList.push(myList[idx]);
        };
    }
    return newList;
}
console.log( myFilter(myList, myCallback) );