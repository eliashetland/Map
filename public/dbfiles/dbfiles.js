getData();
async function getData() {
    const response = await fetch('/api');
    const data = await response.json();

    const root = document.createElement('div');
    const table = document.createElement('table');
    //
    const header = document.createElement('tr');
    const nameH = document.createElement('th');
    const geoH = document.createElement('th');
    const dateH = document.createElement('th');

    nameH.textContent = "Name";
    geoH.textContent = "Location";
    dateH.textContent = "Date";

    header.append(nameH, geoH, dateH);
    table.append(header);

    for (item of data) {
        
        const row = document.createElement('tr');
        const name = document.createElement('td');
        const geo = document.createElement('td');
        const date = document.createElement('td');

        name.textContent = item.name;
        geo.textContent = item.lat + ', ' + item.long;
        const dateString = new Date(item.timestamp).toLocaleString();
        date.textContent = dateString;


        row.append(name, geo, date);
        table.append(row);
    }

    root.append(table);
    document.body.append(root);
    console.log(data);
}
