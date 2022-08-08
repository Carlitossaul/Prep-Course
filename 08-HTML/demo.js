const arr = [1,"e",2,"i",3,4,"o",5,6,7,8,"a"];
for(let i = 0 ; i< arr.length; i++){
    if(arr[i] % 2 === 1){
        continue;
    }
    console.log(arr[i])
}