    //making a map and tiles    
    const mymap = L.map('mapid').setView([0, 0], 1);
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(tileURL, { attribution });
    tiles.addTo(mymap);
    
    function addMarker(lat, long) {
        const marker = L.marker([lat, long]).addTo(mymap);
    }

    recieve();
    async function recieve() {
        const response = await fetch('/api');
        const data = await response.json();

        for(item of data){
            addMarker(item.lat, item.long);
        }
    }