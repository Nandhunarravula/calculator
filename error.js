try{
    const a = 10;
    const b = 0;
    const c = a / b;
    if(c === Infinity){
        throw new Error("Error");
    }
    console.log(c)

}catch(error){
    console.log(error.name)

}finally{
    console.log("Done")
}

function sub(a,b){
    return a / b
}