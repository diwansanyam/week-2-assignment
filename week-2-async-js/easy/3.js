import fs from "fs";

function reading() {
    var contents =fs.readFileSync('easy/a.txt','utf-8');
    console.log(contents);
    // fs.readFile('easy/a.txt','utf-8',(err,content)=>{
    //     if(err){
    //         console.log(err);
    //     }else{
    //         console.log(content);
    //     }
    // })
    for (let index = 0; index < 1000; index++) {
        console.log(index);
        
    }
}
reading();