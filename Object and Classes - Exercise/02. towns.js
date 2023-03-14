function towns(data){
    class Town {
        constructor(town, latitude, longitude){
            this.town = town,
            this.latitude = latitude,
            this.longitude = longitude
            return {
                town: this.town,
                latitude: this.latitude,
                longitude: this.longitude
            }
        }
    }

    let townsList = [];
    for (const line of data) {
        let [cityName, latitude, longitude] = line.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        townsList.push(new Town(cityName, latitude, longitude));
    }

   for (let i = 0; i < townsList.length; i++) {
    console.log(townsList[i]);
   }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)