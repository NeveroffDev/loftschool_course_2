
// Initialize and add the map
function initMap() {
    let element = document.getElementById('map');
    let options = {
        zoom: 13,
        center: {
            lat: parseFloat('59.896228'),
            lng: parseFloat('30.4220842')
        },
        gestureHandling: 'cooperative'
    };
    let myMap = new google.maps.Map(element, options);
    let marker = new google.maps.Marker({
        position: {
            lat: parseFloat('59.896228'),
            lng: parseFloat('30.4220842')
        },
        map: myMap,
        icon: './img/map-marker.svg',
        title: 'Санкт-Петербург, ул.Бабушкина, д.12/1, 15'
    })
}

