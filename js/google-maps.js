// Initialize and add the map
function initMap() {

    var gmap = document.getElementById('gmap');
    var position = {lat: parseFloat(gmap.dataset.lat), lng: parseFloat(gmap.dataset.lng)};
    var zoom = parseInt(gmap.dataset.zoom);
    var scrollwheel = Boolean(gmap.dataset.scrollwheel);
    var draggable = Boolean(gmap.dataset.draggable);
    var pancontrol = Boolean(gmap.dataset.pancontrol);
    var icon = gmap.dataset.iconurl;
    var window = gmap.dataset.infowindow;

    var map = new google.maps.Map(gmap, {
        center: position,
        zoom: zoom,
        scrollwheel: scrollwheel,
        draggable: draggable,
        panControl: pancontrol
    });

    var marker = new google.maps.Marker({
        position: position,
        icon: icon,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Hello World!'
    });

    if (window) {
        var infowindow = new google.maps.InfoWindow({
            content: window
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

        infowindow.open(map, marker);
    }
}