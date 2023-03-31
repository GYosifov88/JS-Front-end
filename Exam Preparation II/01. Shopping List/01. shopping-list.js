function shoppingList(data){
    let initialList = [...data[0].split('!')];
    
    for (let index = 1; index < data.length; index++) {
        let [currentAction, item, newItem] = data[index].split(' ');
        
        if (currentAction === 'Urgent' && !initialList.includes(item)){
            initialList.unshift(item);            
        }
        if (currentAction === 'Unnecessary' && initialList.includes(item)){
            initialList = initialList.filter(e => e !== item);
        }
        if(currentAction === 'Correct' && initialList.includes(item)){
            let index = initialList.indexOf(item);            
            initialList[index] = newItem;
            
        }
        if(currentAction === 'Rearrange' && initialList.includes(item)){
            initialList = initialList.filter(x => x !== item)
            initialList.push(item);
        }
        if (currentAction === 'Go'){
            break;            
        }
    }
    console.log(initialList.join(', '));
}

shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Banana Onion",
"Rearrange Milk",
"Correct Tomatoes Potatoes",
"Go Shopping!"]
)