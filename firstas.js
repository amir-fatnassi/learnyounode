var fs=require('fs');
var filePath=process.argv[2];

fs.readFile(filePath, function calback(err, data){
    if(err){return err}
    var str=data.toString();
    var arr=str.split('\n');
    var l=arr.length-1;
    console.log(l);
});


