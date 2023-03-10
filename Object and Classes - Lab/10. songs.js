function songs(data){
    class Song {
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let numberOfSongs = data.shift();
    let typeSong = data.pop();

    for (const line of data) {
        let [typeList, name, time] = line.split('_');
        songs.push(new Song(typeList, name, time))
    }

    if (typeSong === 'all'){
        songs.forEach((i) => console.log(i.name));
    }else{
        let filtered = songs.filter((i) => i.typeList === typeSong);
        filtered.forEach((i) => console.log(i.name));
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )