function city(city){
    let keys = Object.entries(city);

    for (const [key, value] of keys) {
        console.log(`${key} -> ${value}`);
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)
