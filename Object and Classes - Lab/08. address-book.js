function addressBook(data){
    let addresses = {};
    for (const line of data) {
        let [name, address] = line.split(':');
        addresses[name] = address;
    }

    let sortedNames = Object.keys(addresses)
    .sort((a, b) => a.localeCompare(b));
    
    for (const name of sortedNames) {
        console.log(`${name} -> ${addresses[name]}`);
    }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);

addressBook(
    ['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
);