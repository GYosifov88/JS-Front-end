function inventory(data){
    class Hero {
        constructor(name, level, items){
            this.name = name;
            this.level = level;
            this.items = items; 
            return {
                name: this.name,
                level: this.level,
                items: this.items
            }          
        }
    }
    
    let heroes = [];

    for (const item of data) {
        let [heroName, level, items] = item.split(' / ');
        level = Number(level);
        heroes.push(new Hero(heroName, level, items));
    }

    let sortedHeroes = Object.values(heroes)
    .sort((a, b) => a.level - b.level);

    for (const hero of sortedHeroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]    
)