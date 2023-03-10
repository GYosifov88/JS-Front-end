function meetings(data){
    let week = {};
    for (const line of data) {
        let [day, name] = line.split(' ');
        if (week.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        }else {
            week[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    let successfulMeeting = Object.entries(week);
    
    for (const [key, value] of successfulMeeting) {
        console.log(`${key} -> ${value}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)