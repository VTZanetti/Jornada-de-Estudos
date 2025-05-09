for (let i =1; i <= 5; i++){
    if(i === 2) break;
    console.log(i)
}

//continue
for (let i =1; i <= 5; i++){
    if(i === 3 || i === 4){
        continue;
    }
    console.log(i)
}