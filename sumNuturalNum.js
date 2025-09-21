function findSum(n){

    let sum=0;

    for (let i = 0; i <= n; i++) {
        sum += i;
        
    }
    console.log(sum)

}
let n=5;
findSum(n)


let a=2;
let b=3;

let temp=a;
a=b;
b=temp;
console.log(a);
console.log(b);