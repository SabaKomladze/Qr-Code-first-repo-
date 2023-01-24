function countChar(x,ch){
    let count=0;
    for(let i=0; i<x.length;i++){
        if(x[i]==ch){
            count+=1;
        }
    }
    return count;
}
function countBs(x){
    return countChar(x,"B");
}
console.log(countBs("BBBBBB"));