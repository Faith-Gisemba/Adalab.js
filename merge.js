function divideArray(arr){
    if(arr.length <= 1){
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    console.log({left});
    console.log({right});
    return sortedArray(divideArray(left),divideArray(right));
}

function sortedArray(left,right){
    let emptyArr = [];
    console.group("empty2",emptyArr);
    console.group("left2",left);
    console.group("right2",right);
    while(left.length && right.length){
        if(left[0] <right[0]){
            emptyArr.push(left.shift());
        }
        else{
            emptyArr.push(right.shift());
        }
    }
    console.log({emptyArr})
    return[...emptyArr,...left,...right];
}
let arr = [3,10,2,50,1,4,6];


function divArr(arr){
    if(arr.length <= 1){
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);
    console.log({left});
    console.log({right});
    return sortedArray(divideArra)

}


// Revision
function division(arr){
    if(arr.length <= 1){
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle)
    console.log({left});
    console.log({right});
    return sortedArray(division(left),division(right));
}

let ma = ["on","up","top","under","near","near","on"];
console.log(ma.filter((prona,index) =>{
    return ma.indexOf(prona) !== index
}));

console.log(ma.filter((prona,index) =>{
    return ma.indexOf(prona) === index
}));
