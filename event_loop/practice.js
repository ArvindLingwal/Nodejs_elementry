a= 12;
b= 14;
c= 9;
console.log('-----------------')

if(a>b && a>c){ max = a; }
else if(b>a && b>c){max = b; }
else { max = c; }
console.log(max)
console.log('------------------')

max = Math.max(a,b,c);
console.log(max)
console.log('-----------------------')

if(a>b && a>c){ max = a; }
if(b>a && b>c){max = b; }
if(c>a && c>b) { max = c; }
console.log('----------------------------------')
a=3
for (i=1; i<11; i++){
    console.log(`${a}*${i}=${a*i}`)
}

// for (i=2; i<a/2; i++){
//     if(a%i==0) {
//         let;
//         break;
//     }
//     else
// }

