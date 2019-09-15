
// Initialize and add the map
function initMap() {
    let element = document.getElementById('map');
    let options = {
        zoom: 12,
        center: {
            lat: parseFloat('59.9342802'),
            lng: parseFloat('30.3350986')
        }
    };
    let myMap = new google.maps.Map(element, options);
    let marker = new google.maps.Marker({
        position: {
            lat: parseFloat('59.9342802'),
            lng: parseFloat('30.3350986')
        },
        map: myMap,
        icon: './img/map-marker.svg'
    })
}

