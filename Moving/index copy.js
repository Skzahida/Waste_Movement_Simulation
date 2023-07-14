//  import { mydata } from './coord.js';

//  const map = L.map('map').setView([19.07094158, 72.90730592], 12);
//  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//      maxZoom: 17,
//      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//  }).addTo(map);

//  // create a red polyline from an array of LatLng points
//  var geojson = L.geoJSON(mydata, {});

//  geojson.addTo(map);

//  const coordinates = mydata.features.map(feature => feature.geometry.coordinates);

//  console.log("hi" + coordinates);
//  const polyline = L.polyline(coordinates, { color: '#DE3163' }).addTo(map);

//  // zoom the map to the polyline
//  map.fitBounds(polyline.getBounds());
//  map.setZoom(5);
//  //create markerplayer
//  const points = coordinates.map((v, i) => {
//      return { id: i, latlng: v };
//  });
//  const animMarker = L.markerPlayer(points, 40000).addTo(map);

//  //init contorols
//  const playTogBtn = document.getElementById('play-tog-btn');
//  const progBar = document.getElementById('prog-bar');

//  function startAnim() {
//      animMarker.start();
//      playTogBtn.innerText = "⏸";
//  }

//  function pauseAnim() {
//      animMarker.pause();
//      playTogBtn.innerText = "▶";
//  }
//  playTogBtn.addEventListener('click', e => {
//      if (animMarker.isRunning()) {
//          pauseAnim();
//      } else {
//          startAnim();
//      }
//  });
//  animMarker.on('end', e => {
//      playTogBtn.innerText = "▶";
//  });
//  animMarker.on('progresschange', e => {
//      progBar.setAttribute('style', `width: ${e.progress}%`);
//  });
//  animMarker.on('pointchange', e => {
//      document.getElementById('point-id').innerText = e.point.id;
//  });





//for actual route
// import { mydata } from './coord.js';

// const map = L.map('map').setView([19.07094158, 72.90730592], 12);
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 17,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// var geojson = L.geoJSON(mydata, {});

// geojson.addTo(map);

// const coordinates = mydata.features.map(feature => feature.geometry.coordinates);

// // console.log("hi" + coordinates);
// // const polyline = L.polyline(coordinates, { color: '#DE3163' }).addTo(map);

// var routingControl = L.Routing.control({
//     waypoints: coordinates,
//     routeWhileDragging: false,
//     lineOptions: {
//         styles: [{ color: '#00AAFF', weight: 5 }]
//     },
//     createMarker: function(i, waypoint, n) {
//         // create a non-draggable marker
//         return L.marker(waypoint.latLng, {
//             draggable: false,
//             icon: L.icon({
//                 iconUrl: 'https://cdn-icons-png.flaticon.com/512/45/45880.png',
//                 iconSize: [25, 41],
//                 iconAnchor: [12, 41],
//                 popupAnchor: [1, -34],
//                 shadowSize: [41, 41]
//             })
//         });
//     }
// }).addTo(map);


// routingControl.on('routesfound', function(e) {
//     const routes = e.routes;
//     const route = routes[0]; // assume only one route
//     const coordinates = route.coordinates;
//     const polyline = L.polyline(coordinates, { color: '#DE3163' }).addTo(map);

// });

// //create markerplayer

// const points = [];
// coordinates.forEach((coord, i) => {
//     points.push({ id: i, latlng: L.latLng(coord[0], coord[1]) });
// });
// const animMarkers = L.markerPlayer(points, 40000).addTo(map);
// //});
// // loop through markers and add event listeners
// const playTogBtn = document.getElementById('play-tog-btn');
// const progBar = document.getElementById('prog-bar');

// function startAnim() {
//     animMarkers.start();
//     playTogBtn.innerText = "⏸";
// }

// function pauseAnim() {
//     animMarkers.pause();
//     playTogBtn.innerText = "▶";
// }
// playTogBtn.addEventListener('click', e => {
//     if (animMarkers.isRunning()) {
//         pauseAnim();
//     } else {
//         startAnim();
//     }
// });
// animMarkers.on('end', e => {
//     playTogBtn.innerText = "▶";
// });
// animMarkers.on('progresschange', e => {
//     progBar.setAttribute('style', `width: ${e.progress}%`);
// });
// animMarkers.on('pointchange', e => {
//     document.getElementById('point-id').innerText = e.point.id;
// });



// animMarkers.forEach(markers => {
//     marker.on('end', e => {
//         playTogBtn.innerText = "▶";
//     });
//     marker.on('progresschange', e => {
//         progBar.setAttribute('style', `width: ${e.progress}%`);
//     });
//     marker.on('pointchange', e => {
//         document.getElementById('point-id').innerText = e.point.id;
//     });
// });

// // start and pause markers
// function startAnim() {
//     animMarkers.forEach(marker => marker.start());
//     playTogBtn.innerText = "⏸";
// }

// function pauseAnim() {
//     animMarkers.forEach(marker => marker.pause());
//     playTogBtn.innerText = "▶";
// }

// playTogBtn.addEventListener('click', e => {
//     if (animMarkers[0].isRunning()) {
//         pauseAnim();
//     } else {
//         startAnim();
//     }
// });
// animMarker.on('end', e => {
//     playTogBtn.innerText = "▶";
// });
// animMarker.on('progresschange', e => {
//     progBar.setAttribute('style', `width: ${e.progress}%`);
// });
// animMarker.on('pointchange', e => {
//     document.getElementById('point-id').innerText = e.point.id;
// });



//     const points = coordinates.map((v, i) => {
//         return { id: i, latlng: L.latLng(v[0], v[1]) };
//     });
//     const animMarker = L.markerPlayer(points, 40000).addTo(map);

//     //init controls
//     const playTogBtn = document.getElementById('play-tog-btn');
//     const progBar = document.getElementById('prog-bar');

//     function startAnim() {
//         animMarker.start();
//         playTogBtn.innerText = "⏸";
//     }

//     function pauseAnim() {
//         animMarker.pause();
//         playTogBtn.innerText = "▶";
//     }

//     playTogBtn.addEventListener('click', e => {
//         if (animMarker.isRunning()) {
//             pauseAnim();
//         } else {
//             startAnim();
//         }
//     });

//     animMarker.on('end', e => {
//         playTogBtn.innerText = "▶";
//     });

//     animMarker.on('progresschange', e => {
//         progBar.setAttribute('style', `width: ${e.progress}%`);
//     });

//     animMarker.on('pointchange', e => {
//         document.getElementById('point-id').innerText = e.point.id;
//     });

//     // zoom the map to the polyline
//     map.fitBounds(polyline.getBounds());
//     map.setZoom(5);
// });

// if (typeof myObject !== 'undefined' && myObject !== null) {
//     // Access the distanceTo property of the object
//     let distance = myObject.distanceTo;
// } else {
//     // Handle the case where the object is undefined
//     console.log('Object is undefined or null');
// }



// import { mydata } from './coord.js';

// const map = L.map('map').setView([19.07094158, 72.90730592], 12);
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 17,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// // Get the coordinates from the geojson data
// const coordinates = mydata.features.map(feature => feature.geometry.coordinates);

// //Create a routing control and add it to the map
// const routingControl = L.Routing.control({
//     waypoints: coordinates,
//     routeWhileDragging: false,
//     lineOptions: {
//         styles: [{ color: '#00AAFF', weight: 3 }]
//     },
//     createMarker: function(i, waypoint, n) {
//         return L.marker(waypoint.latLng, {
//             icon: L.icon({
//                 iconUrl: '../Moving/images/point.png',
//                 iconSize: [25, 41],
//                 iconAnchor: [12, 41],
//                 popupAnchor: [1, -34],
//                 shadowSize: [41, 41]
//             })
//         });
//     }
// }).addTo(map);

// // Add a polyline based on the route found by the routing control
// routingControl.on('routesfound', function(e) {
//     const routes = e.routes;
//     const route = routes[0];
//     const polyline = L.polyline(route.coordinates, { color: '#DE3163' }).addTo(map);
// })

// // Create an array to hold all the markers
// const markers = [];

// // Loop through the coordinates array to create moving markers
// for (let i = 0; i < coordinates.length; i++) {
//     const start = L.latLng(mydata.features[i].properties.start);
//     const end = L.latLng(mydata.features[i].properties.end);

//     const marker = L.Marker.movingMarker([start, end], 10000, {
//         icon: L.icon({
//             iconUrl: '../Moving/images/car.png',
//             iconSize: [30, 41],
//             iconAnchor: [15, 41],
//             popupAnchor: [2, -34],
//             shadowSize: [41, 41]
//         })
//     }).addTo(map);

//     markers.push(marker);

//     const playTogBtn = document.getElementById(`play-tog-btn`);
//     const progBar = document.getElementById(`prog-bar`);
//     playTogBtn.addEventListener('click', function() {
//         if (marker.isRunning()) {
//             pauseAnim();
//             playTogBtn.innerText = "▶";
//         } else {
//             marker.start();
//             playTogBtn.innerText = "⏸";
//         }

//     });

//     // Add event listeners to the marker
//     marker.on('start', function() {
//         playTogBtn.innerText = "⏸";
//     });
//     marker.on('stop', function() {
//         playTogBtn.innerText = "▶";
//     });
//     marker.on('end', function() {
//         playTogBtn.innerText = "▶";
//     });

//     marker.on('progresschange', function(e) {
//         progBar.setAttribute('style', `width: ${e.progress}%`);

//         // Update the position of all markers
//         for (let j = 0; j < markers.length; j++) {
//             markers[j].moveTo(e.latlngs[j], e.times[j]);
//         }
//     });

//     marker.on('pointchange', function(e) {
//         document.getElementById(`point-id-${i}`).innerText = e.point.id;
//     });

//     function pauseAnim() {
//         marker.pause();
//         playTogBtn.innerText = "▶";
//     }
// }


// import { mydata } from './coord.js';

// const map = L.map('map').setView([19.07094158, 72.90730592], 12);
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 17,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// // Get the coordinates from the geojson data
// const coordinates = mydata.features.map(feature => feature.geometry.coordinates);

// //Create a routing control and add it to the map
// const routingControl = L.Routing.control({
//     waypoints: coordinates,
//     routeWhileDragging: false,
//     lineOptions: {
//         styles: [{ color: '#00AAFF', weight: 3 }]
//     },

//     createMarker: function(i, waypoint, n) {
//         return L.marker(waypoint.latLng, {
//             icon: L.icon({
//                 iconUrl: '../Moving/images/point.png',
//                 iconSize: [25, 41],
//                 iconAnchor: [12, 41],
//                 popupAnchor: [1, -34],
//                 shadowSize: [41, 41]
//             })
//         });
//     }
// }).addTo(map);

// // Add a polyline based on the route found by the routing control
// routingControl.on('routesfound', function(e) {
//     const routes = e.routes;
//     const route = routes[0];
//     const polyline = L.polyline(route.coordinates, { color: '#DE3163' }).addTo(map);
// })

// // Create an array to hold all the markers
// const markers = [];

// // Loop through the coordinates array to create moving markers
// for (let i = 0; i < coordinates.length; i++) {
//     const start = L.latLng(mydata.features[i].properties.start);
//     const end = L.latLng(mydata.features[i].properties.end);

//     const marker = L.Marker.movingMarker([start, end], 10000, {
//         icon: L.icon({
//             iconUrl: '../Moving/images/car.png',
//             iconSize: [30, 41],
//             iconAnchor: [15, 41],
//             popupAnchor: [2, -34],
//             shadowSize: [41, 41]
//         })
//     }).addTo(map);

//     markers.push(marker);

//     const playTogBtn = document.getElementById(`play-tog-btn`);
//     const progBar = document.getElementById(`prog-bar`);
//     playTogBtn.addEventListener('click', function() {
//         if (marker.isRunning()) {
//             pauseAnim();
//             playTogBtn.innerText = "▶";
//         } else {
//             marker.start();
//             playTogBtn.innerText = "⏸";
//         }

//     });


//     // Add event listeners to the marker
//     marker.on('start', function() {
//         playTogBtn.innerText = "⏸";
//     });
//     marker.on('stop', function() {
//         playTogBtn.innerText = "▶";
//     });
//     marker.on('end', function() {
//         playTogBtn.innerText = "▶";
//     });

//     marker.on('progresschange', function(e) {
//         progBar.setAttribute('style', `width: ${e.progress}%`);

//         // Update the position of all markers
//         for (let j = 0; j < markers.length; j++) {
//             markers[j].moveTo(e.latlngs[j], e.times[j]);
//         }
//     });

//     marker.on('pointchange', function(e) {
//         document.getElementById(`point-id-${i}`).innerText = e.point.id;
//     });


//     function pauseAnim() {
//         marker.pause();
//         playTogBtn.innerText = "▶";
//     }
// }




// with marker dropdown
// import { mydata } from './coord.js';

// const map = L.map('map').setView([19.07094158, 72.90730592], 13);
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 17,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// // Create an array to hold all the markers
// const markers = [];

// // Loop through the geojson data to create moving markers
// for (let i = 0; i < mydata.features.length; i++) {
//     const start = mydata.features[i].properties.start;
//     const end = mydata.features[i].properties.end;

//     // Create a routing control for the current start and end points
//     const routingControl = L.Routing.control({
//         waypoints: [
//             L.latLng(start),
//             L.latLng(end)
//         ],
//         routeWhileDragging: false,
//         lineOptions: {
//             styles: [{ color: '#00AAFF', weight: 3 }]
//         },
//         createMarker: function(i, waypoint, n) {
//             return L.marker(waypoint.latLng, {
//                 icon: L.icon({
//                     iconUrl: '../Moving/images/point.png',
//                     iconSize: [25, 41],
//                     iconAnchor: [12, 41],
//                     popupAnchor: [1, -34],
//                     shadowSize: [41, 41]
//                 })
//             });
//         }
//     }).addTo(map);

//     // Add a polyline based on the route found by the routing control
//     routingControl.on('routesfound', function(e) {
//         const routes = e.routes;
//         const route = routes[0];
//         const polyline = L.polyline(route.coordinates, { color: '#DE3163' }).addTo(map);

//         // Create a moving marker for the current start and end points
//         const marker = L.Marker.movingMarker(route.coordinates, 11000, {
//             icon: L.icon({
//                 iconUrl: '../Moving/images/car.png',
//                 iconSize: [30, 41],
//                 iconAnchor: [15, 41],
//                 popupAnchor: [2, -34],
//                 shadowSize: [41, 41]
//             })
//         }).addTo(map);

//         markers.push(marker);
//         console.log(markers);

//         const markerSelect = document.getElementById('marker-select');
//         const playTogBtn = document.getElementById('play-tog-btn');
//         const progBar = document.getElementById('prog-bar');
//         const selectedMarkers = []; // array to keep track of selected markers

//         // Populate the marker select dropdown
//         markerSelect.innerHTML = '';
//         for (let i = 0; i < markers.length; i++) {
//             const option = document.createElement('option');
//             option.value = i;
//             option.text = `Location ${i + 1}`;
//             markerSelect.appendChild(option);
//         }

//         // Add event listener to the marker select dropdown
//         // markerSelect.addEventListener('change', function() {
//         //     const selectedIndex = parseInt(markerSelect.value);
//         //     for (let i = 0; i < markers.length; i++) {
//         //         if (i === selectedIndex) {
//         //             markers[i].start();
//         //         } else {
//         //             markers[i].pause();
//         //         }
//         //     }
//         // })


//         // Add event listener to the play toggle button
//         const selectedIndex = parseInt(markerSelect.value);
//         const selectedMarker = markers[selectedIndex];
//         playTogBtn.addEventListener('click', function() {
//             const selectedIndex = parseInt(markerSelect.value);
//             const selectedMarker = markers[selectedIndex];
//             for (let i = 0; i < selectedMarker.length; i++) {
//                 if (i === selectedIndex) {
//                     selectedMarker.start();
//                     playTogBtn.innerText = '⏸';
//                 } else {
//                     selectedMarker.pause();
//                     playTogBtn.innerText = '▶';
//                 }
//             }
//         });


//         playTogBtn.addEventListener('click', function() {
//             const selectedIndex = parseInt(markerSelect.value);
//             const selectedMarker = markers[selectedIndex];

//             if (selectedMarker.isRunning()) {
//                 pauseAnim();
//                 playTogBtn.innerText = '▶';
//             } else {
//                 selectedMarker.start();
//                 playTogBtn.innerText = '⏸';
//             }

//         });

//         selectedMarker.on('end', function() {
//             playTogBtn.innerText = '▶';
//         });

//         // Add event listener to the progress bar
//         selectedMarker.on('progresschange', function(e) {
//             progBar.setAttribute('style', `width: ${e.progress}%`);
//         });

//         // Add event listener to the point
//         selectedMarker.on('pointchange', function(e) {
//             document.getElementById('point-id').innerText = e.point.id;
//         });


//         function pauseAnim() {
//             selectedMarker.pause();
//             playTogBtn.innerText = "▶";
//         }


//     });

// }


// import { marker } from 'leaflet';
import { mydata } from './coord.js';

const map = L.map('map').setView([19.07094158, 72.90730592], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Create an array to hold all the markers
const markers = [];


var wasteType = document.getElementById('waste-type1');



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
            // Dry waste selected, set marker color to red
            const marker = L.Marker.movingMarker(route.coordinates, 11000, {
                icon: L.icon({
                    iconUrl: '../Moving/images/green.png',
                    iconSize: [30, 41],
                    iconAnchor: [15, 41],
                    popupAnchor: [2, -34],
                    shadowSize: [41, 41]
                })
            }).addTo(map);
            markers.push(marker);

        } else {
            // Dry waste selected, set marker color to red
            const marker = L.Marker.movingMarker(route.coordinates, 11000, {
                icon: L.icon({
                    iconUrl: '../Moving/images/orange.png',
                    iconSize: [30, 41],
                    iconAnchor: [15, 41],
                    popupAnchor: [2, -34],
                    shadowSize: [41, 41]
                })
            }).addTo(map);
            markers.push(marker);

        }

        console.log(markers);

        const markerSelect = document.getElementById('marker-select');
        const playTogBtn = document.getElementById('play-tog-btn');
        const progBar = document.getElementById('prog-bar');
        const selectedMarkers = []; // array to keep track of selected markers

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
                    selectedMarker.bindPopup("This is a popup!");
                    playTogBtn.innerText = '⏸';
                } else {
                    selectedMarker.pause();
                    playTogBtn.innerText = '▶';
                }
            }
        });


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


        wasteType.addEventListener('change', function() {
            // Get the selected value
            var selectedValue = wasteType.value;
            console.log(selectedValue)
                // Update the marker color based on the selected value
            markers.length = 0;
            if (selectedValue === 'Dry-waste') {
                // Dry waste selected, set marker color to red
                const marker = L.Marker.movingMarker(route.coordinates, 11000, {
                    icon: L.icon({
                        iconUrl: '../Moving/images/green.png',
                        iconSize: [30, 41],
                        iconAnchor: [15, 41],
                        popupAnchor: [2, -34],
                        shadowSize: [41, 41]
                    })
                }).addTo(map);
                markers.push(marker);

            } else {
                // Dry waste selected, set marker color to red
                const marker = L.Marker.movingMarker(route.coordinates, 11000, {
                    icon: L.icon({
                        iconUrl: '../Moving/images/orange.png',
                        iconSize: [30, 41],
                        iconAnchor: [15, 41],
                        popupAnchor: [2, -34],
                        shadowSize: [41, 41]
                    })
                }).addTo(map);
                markers.push(marker);

            }
        });

        selectedMarker.on('end', function() {
            selectedMarker.bindPopup("This is a popup!").openPopup();
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