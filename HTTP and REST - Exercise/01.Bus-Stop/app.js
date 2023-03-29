function getInfo() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/';
    const stopId = document.getElementById('stopId');
    const stopIdVal = stopId.value;
    const buses = document.getElementById('buses');
    const stopName = document.getElementById('stopName');


    buses.innerHTML = '';
    fetch(`${BASE_URL}${stopIdVal}`, {method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            stopName.textContent = `${data.name}`;
            console.log(data);
            for (const bus in data.buses) {
                const li = document.createElement('li');
                li.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
                buses.appendChild(li);
            }
        })
        .catch((err) => {
            console.error(err);
            stopName.textContent = 'Error';
        });
}