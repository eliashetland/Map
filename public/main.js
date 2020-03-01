
    let lat, long;
    const button = document.getElementById('submit');
    const input = document.getElementById('input');

    navigator.geolocation.getCurrentPosition(position => {
        lat =  position.coords.latitude;
        long = position.coords.longitude;

        document.getElementById('lat').textContent = lat;
        document.getElementById('long').textContent = long;
    });



    button.addEventListener('click', async event => {
        
        const name = input.value;
        const data = { lat, long, name};
        const options = {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(data)
        };

        if (lat != undefined && long != undefined) {
            input.value = "";
            const response = await fetch('/api', options)
            const json = await response.json();
            console.log(json);
            window.location = "/map";
        }
    
    });


