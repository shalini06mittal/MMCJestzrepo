function factorial(no)
{
    if(no<=0)
     throw new Error(no+' cannot be less than 0')
    
    else{
        let fact = 1;
        for (let index = 1; index <= no; index++) {
        fact *=index;
        
        }
        return fact;
    } 
}

module.exports=  factorial;