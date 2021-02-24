"use strict";

const difference = (list1,list2) => {
    let newList = []
    list1.forEach(e => {
        list2.forEach(j => {
            if (e !== j) {
                newList.push(e)
            }      
        });
    });
    return newList;


}

let list1 = [1,2,3,4,5]
let list2 = [3,4,5,6,7]
console.log(difference(list1,list2));