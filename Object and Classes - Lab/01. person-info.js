function personInfo (firstName, lastName, age){
    
    age = Number(age);
    let person ={
        firstName: firstName,
        lastName: lastName,
        age:age
    }
    return person
}

personInfo("Peter", 
    "Pan",
    "20"
)
