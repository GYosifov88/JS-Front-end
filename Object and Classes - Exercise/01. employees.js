function employees(data){
    let employeesData ={};
    for (const line of data) {
        employeesData[line] = Number(line.length)
    }

    let employessObjectsList = Object.entries(employeesData)

    for (const [name, number] of employessObjectsList) {
        console.log(`Name: ${name} -- Personal Number: ${number}`);
    }
}

employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]    
)