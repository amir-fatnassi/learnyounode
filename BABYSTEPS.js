var l=process.argv.length;
sum=0;
for(let i=2 ; i<l ;i++){
    sum=sum + Number(process.argv[i])
}
console.log(sum)