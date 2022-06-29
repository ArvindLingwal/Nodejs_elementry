// import fs from "fs"


//--synchronous way---
// const textIn = fs.readFileSync('./read.txt', 'utf-8');
// console.log(textIn)
// const textOut = `hello this is added text : in ${textIn}.\n Created on ${Date.now()}.`
// fs.writeFileSync('./output.txt', textOut)
// console.log('file written.')

//---asynchronous way---using call back functions//
fs.readFile('./output1.txt','utf-8', (err, data1) => {
    if (err) return console.log('Error!!!');
fs.readFile(`./${data1}.txt`,'utf-8', (err, data2) =>
{
    console.log(data2);
    fs.readFile(`./append.txt`,'utf-8', (err, data3) => {
        console.log(data3);

        fs.writeFile('./final.txt',`${data2}\n${data3}`, 'utf-8', err => {
            console.log('your file is written.')
        })
    })
});
});
console.log('will read file!!!..........')