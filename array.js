let arr=[10,39,1,44,3,21,34,93,21,313,11,233];
let bigData=arr[0];
let secondBig=arr[0];
for (let i =0; i < arr.length; i++) {
    
  if (bigData<arr[i]) {
    bigData=arr[i];
  }
   if (secondBig<arr[i] && bigData>arr[i]) {
        secondBig=arr[i];
    }
    
}

// for (let i = 0; i < arr.length; i++) {
    
   
    
// }

console.log(secondBig)
console.log(bigData)