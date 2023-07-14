// import { marker } from 'leaflet';
import { mydata } from './coord.js';

const map = L.map('map').setView([19.07094158, 72.90730592], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



/* 
        ALL Variables Declaration   
*/

// Create an array to hold all the markers
const markers = [];


var wasteType = document.getElementById('waste-type1');

var info = L.control();

info.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function(props) {
    this._div.innerHTML = '<h4>US Population Density</h4>' + (props ?
        '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>' :
        'Hover over a state');
};

info.addTo(map);

function createMarkers() {
    // Loop through the geojson data to create moving markers
    for (let i = 0; i < mydata.features.length; i++) {
        const start = mydata.features[i].properties.start;
        const end = mydata.features[i].properties.end;

        // Create a routing control for the current start and end points
        const routingControl = L.Routing.control({
            waypoints: [
                L.latLng(start),
                L.latLng(end)
            ],
            routeWhileDragging: false,
            lineOptions: {
                styles: [{ color: '#00AAFF', weight: 3 }]
            },
            createMarker: function(i, waypoint, n) {
                return L.marker(waypoint.latLng, {
                    icon: L.icon({
                        iconUrl: '../Moving/images/point.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowSize: [41, 41]
                    })
                });
            }
        }).addTo(map);

        // Add a polyline based on the route found by the routing control
        routingControl.on('routesfound', function(e) {
            const routes = e.routes;
            const route = routes[0];
            const polyline = L.polyline(route.coordinates, { color: '#DE3163' }).addTo(map);


            // Create a moving marker for the current start and end points
            var selectedValue = wasteType.value;
            if (selectedValue === 'Dry-waste') {
                const popupContent = `<h3>Marker ${i + 1} </h3><p>Dry Waste</p>`;
                // Dry waste selected, set marker color to red
                const marker = L.Marker.movingMarker(route.coordinates, 11000, {
                    icon: L.icon({
                        iconUrl: '../Moving/images/green.png',
                        iconSize: [30, 41],
                        iconAnchor: [15, 41],
                        popupAnchor: [2, -34],
                        shadowSize: [41, 41]
                    })
                }).bindPopup(popupContent).addTo(map);
                markers.push(marker);

            } else {
                // Dry waste selected, set marker color to red
                const popupContent = `<h3>Marker ${i + 1} </h3><p>Wet Waste</p>`;
                const marker = L.Marker.movingMarker(route.coordinates, 11000, {
                    icon: L.icon({
                        iconUrl: '../Moving/images/yellow.png',
                        iconSize: [30, 41],
                        iconAnchor: [15, 41],
                        popupAnchor: [2, -34],
                        shadowSize: [41, 41]
                    })
                }).bindPopup(popupContent).addTo(map);
                markers.push(marker);

            }

            console.log(markers);

            const markerSelect = document.getElementById('marker-select');
            const playTogBtn = document.getElementById('play-tog-btn');
            const progBar = document.getElementById('prog-bar');
            // const selectedMarkers = []; // array to keep track of selected markers

            // Populate the marker select dropdown
            markerSelect.innerHTML = '';
            for (let i = 0; i < markers.length; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.text = `Location ${i + 1}`;
                markerSelect.appendChild(option);
            }

            // Add event listener to the marker select dropdown
            // markerSelect.addEventListener('change', function() {
            //     const selectedIndex = parseInt(markerSelect.value);
            //     for (let i = 0; i < markers.length; i++) {
            //         if (i === selectedIndex) {
            //             markers[i].start();
            //         } else {
            //             markers[i].pause();
            //         }
            //     }
            // })


            // Add event listener to the play toggle button
            const selectedIndex = parseInt(markerSelect.value);
            const selectedMarker = markers[selectedIndex];
            playTogBtn.addEventListener('click', function() {
                const selectedIndex = parseInt(markerSelect.value);
                const selectedMarker = markers[selectedIndex];
                for (let i = 0; i < selectedMarker.length; i++) {
                    if (i === selectedIndex) {
                        selectedMarker.start();

                        playTogBtn.innerText = '⏸';
                    } else {
                        selectedMarker.pause();
                        playTogBtn.innerText = '▶';
                    }
                }
            });




            playTogBtn.addEventListener('click', function() {
                const selectedIndex = parseInt(markerSelect.value);
                const selectedMarker = markers[selectedIndex];

                if (selectedMarker.isRunning()) {
                    pauseAnim();
                    playTogBtn.innerText = '▶';
                } else {
                    selectedMarker.start();
                    playTogBtn.innerText = '⏸';
                }
            });





            selectedMarker.on('end', function() {
                playTogBtn.innerText = '▶';

            });

            // Add event listener to the progress bar
            selectedMarker.on('progresschange', function(e) {
                progBar.setAttribute('style', `width: ${e.progress}%`);
            });

            // Add event listener to the point
            selectedMarker.on('pointchange', function(e) {
                document.getElementById('point-id').innerText = e.point.id;
            });


            function pauseAnim() {
                selectedMarker.pause();
                playTogBtn.innerText = "▶";
            }


        });
    }
}

createMarkers()


// Get the date picker input field
const datePicker = document.getElementById('date-picker');

// Add an event listener to the date picker input field
datePicker.addEventListener('change', function() {
    const selectedDate = new Date(datePicker.value);

    // Iterate through all markers
    for (let i = 0; i < markers.length; i++) {
        const marker = markers[i];
        const start = new Date(marker.feature.properties.start);
        const end = new Date(marker.feature.properties.end);

        // Check if the marker's start or end date falls within the selected date range
        if (selectedDate >= start && selectedDate <= end) {
            // Move the marker to its corresponding location on the map
            marker.moveTo(marker.route.coordinates[0], 1000);
            map.addLayer(marker);
        } else {
            // Remove the marker from the map
            map.removeLayer(marker);
        }
    }
});


wasteType.addEventListener('change', function() {
    // Get the selected value
    var selectedValue = wasteType.value;
    console.log(selectedValue)
        // Update the marker color based on the selected value
    for (var i = 0; i < markers.length; i++) {
        map.removeLayer(markers[i]);

    }

    markers.length = 0;
    if (selectedValue === 'Dry-waste') {
        createMarkers();

    } else {
        // Dry waste selected, set marker color to red
        createMarkers();
    }
});