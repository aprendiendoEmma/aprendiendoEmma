"use strict";

const difference = (list1,list2) => {
    let newList = []
    list1.forEach(e => {
        if (!list2.includes(e)) {
            newList.push(e)
        }

    });
    return newList.join(" ");
}


let list1 = [1,2,3,4,5];
let list2 = [5,6,7,8,9];
console.log( difference(list1, list2) )

