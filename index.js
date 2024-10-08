let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

let bag = " ";
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        bag += arr[i] + " ";
    }
}
console.log("Even No",bag);



let bag2 = " ";
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 != 0){
        bag2 += arr[i] + " ";
    }
}
console.log("Odd No",bag2);