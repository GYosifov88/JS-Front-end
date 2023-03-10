function phoneBook(data){
    let phoneBook = {};
    for (const line of data) {
        let [ name, number] = line.split(' ');
         if (!phoneBook.hasOwnProperty(name)){   // checking if key already exist in object
            phoneBook[name] = number;
        }else{
            phoneBook[name] = number;
        }
    }

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)