const employee = {name:'shalini', city:'Mumbai'};

const addProperty = (key, value)=>{
    employee[key] = value;
    console.log(employee)
    return employee;
}

module.exports = addProperty;