let arr=[10,39,1,44,3,21,34,93,21,313,11,233];
let target=34;
let start=0;
let end=arr.length-1;

arr.sort((a,b)=>a-b)

while (start<=end) {
  let mid=Math.floor((start+end)/2);

  if (arr[mid]===target) {
    console.log(`your data is ${arr[mid]} Index ${mid}`);
    break;
  }

  if (arr[mid]>target) {
    end=mid-1
  }
  else{
    start=mid+1;
  }
}




let target2=44;
 let result;
 let resultIndex;
 for (let i = 0; i < arr.length; i++) {
   
  if (arr[i]===target2) {
    result=arr[i];
    resultIndex=i;
  }
   
  
 }
 if (result) {
   console.log(`your data is ${result} index is ${resultIndex}`);
 }
 

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



