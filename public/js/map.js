mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style : "mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

const marker1 = new mapboxgl.Marker({color : 'red'})
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset : 25})
        .setHTML(`<h6> ${listing.location} </h6><p>This will be your exact location!</p>`)
        .addTo(map))
    .addTo(map);