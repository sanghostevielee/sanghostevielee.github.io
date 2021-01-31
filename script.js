mapboxgl.accessToken =
    "pk.eyJ1IjoiZGFzaGxhcHBvIiwiYSI6ImNqbjJ3aHhjZTBwZXozcGw4eW90YTY5cW0ifQ.B30zBLfnXNoQA6Wt452TwQ";

// Add the map to the page

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/levaro/cjstchk0j2w9i1fs38c2eb7lp",
    center: [11.5690239, 48.14],
    pitch: 45, // pitch in degrees
    zoom: 12,
    maxZoom: 15,
    minZoom: 12
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());


// Objects with btn

var obj = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [11.5033143, 48.1582675, 0]
            },
            properties: {
                name: "Nymphenburg Palace",
                keyword: "Kind and generous",
                iconSize: [80, 80],
                icon: "images/duck.png",
                emoji: "buttons/nymph.png",
                page: "pages/nymph.html",
                address: "Schloß Nymphenburg 1, 80638 Munich",
                open: "The castle is closed, but the park is open 24/7"

            }
        },
        {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [11.53911, 48.179, 0]
            },
            properties: {
                name: "Olympiastadion Ghost-station",
                keyword: "Adventure!",
                iconSize: [80, 80],
                icon: "images/ghost-station.png",
                page: "pages/olympia.html",
                address: "80992 Munich",
                open: "Open 24 hours",
                emoji: "buttons/olympia.png"
            }
        },
        {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [11.5166098, 48.04286, 0]
            },
            properties: {
                name: "Grünwald",
                keyword: "Mahlzeit!",
                iconSize: [80, 80],
                icon: "images/grunwald.png",
                emoji: "buttons/grunwald.png",
                page: "pages/grunwald.html",
                address: "Zeillerstraße 3, 82031 Grünwald bei München",
                open: "Mon&Tue closed, Wed-Sun 10:00-17:00"
            }
        },

        {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [11.5292564, 48.1698845, 0]
            },
            properties: {
                name: "Westfriedhof station",
                keyword: "Influencer",
                iconSize: [80, 80],
                icon: "images/westfriedhof.png",
                emoji: "buttons/westfriedhof.png",
                page: "pages/westfriedhof.html",
                address: "Orpheusstr. 80992 Munich",
                open: "Open 24 hours"
            }
        },
        {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [11.5371773, 48.1706628, 0]
            },
            properties: {
                name: "Borstei",
                keyword: "At least Audi",
                iconSize: [80, 80],
                icon: "images/borstei.png",
                emoji: "buttons/borstei.png",
                page: "pages/borstei.html",
                address: "Löfftzstr., 80637 Munich",
                open: "Open 24 hours"
            }
        },
        {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [11.5986166, 48.1301765, 0]
            },
            properties: {
                name: "Au-Haidhausen",
                keyword: "Frenchie",
                iconSize: [80, 80],
                icon: "images/au-haidhausen.png",
                emoji: "buttons/haidhausen.png",
                page: "pages/haidhausen.html",
                address: "81667 Munich",
                open: "Open 24 hours"
            }
        },
        {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [11.5434812, 48.12668, 0]
            },
            properties: {
                name: "Bavaria Park",
                keyword: "Slimy",
                iconSize: [80, 80],
                icon: "images/bavaria-park.png",
                emoji: "buttons/bavariapark.png",
                page: "pages/bavariapark.html",
                address: "80339 Munich",
                open: "Open 24 hours"
            }
        },
        {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [11.5823548, 48.1563786, 0]
            },
            properties: {
                name: "Walking Man",
                keyword: "Funky",
                iconSize: [80, 80],
                icon: "images/walking-man.png",
                emoji: "buttons/walkingman.png",
                page: "pages/walkingman.html",
                address: "Leopoldstr. 36, 80802 Munich",
                open: "Open 24 hours"
            }
        },
        {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [11.5229517, 48.2504689, 0]
            },
            properties: {
                name: "Ruderregatta",
                keyword: "Juliane says...",
                iconSize: [80, 80],
                icon: "images/ruderregatta.png",
                emoji: "buttons/ruder.png",
                page: "pages/ruder.html",
                address: "Dachauerstr. 35, 85764 Oberschleißheim",
                open: "Open 24 hours, but the bus operates only on weekdays"
            }
        },
        {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [11.6910373, 48.1253362, 0]
            },
            properties: {
                name: "Riemer Park",
                keyword: "Aesthetical",
                iconSize: [80, 80],
                icon: "images/Park.png",
                emoji: "buttons/riemer.png",
                page: "pages/riemer.html",
                address: "81829 Munich",
                open: "Open 24 hours"
            }
        },
        {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [11.5002653, 48.1095044, 0]
            },
            properties: {
                name: "Waldfriedhof",
                keyword: "SpoOoOoOky",
                iconSize: [80, 80],
                icon: "images/waldfriedhof.png",
                emoji: "buttons/waldfriedhof.png",
                page: "pages/waldfriedhof.html",
                address: "Fürstenriederstr. 288, 81377 Munich",
                open: "Everyday 8:00-17:00"
            }
        },
        {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [11.5461636, 48.1421748, 0]
            },
            properties: {
                name: "Hackerbrücke",
                keyword: "Romantique",
                iconSize: [80, 80],
                icon: "images/hackerbrucke.png",
                emoji: "buttons/hacker.png",
                page: "pages/hacker.html",
                address: "Arnulfstr. 21, 80335 Munich",
                open: "Open 24 hours"
            }
        }

    ]
};


map.on("load", function (e) {
    addButton();
    addMarker();
});

function addButton() {
    // For each feature in the GeoJSON object above:
    var x = 0;
    obj.features.forEach(function (marker) {
        // Create a div element for the marker.
        var el = document.createElement("div");
        // Assign a unique `id` to the marker.
        // Assign the `marker` class to each marker for styling.
        el.className = "marker";
        el.style.backgroundImage = "url(" + marker.properties.icon + ")";
        el.style.backgroundRepeat = "no-repeat";
        el.style.backgroundSize = "100%";
        el.style.width = marker.properties.iconSize[0] + "px";
        el.style.height = marker.properties.iconSize[1] + "px";


        //Create a button

        var button = document.createElement("div");
        button.className = "button";


        var button_text = document.createElement("div");
        button_text.className = "button_text";
        button_text.innerHTML = marker.properties.keyword;

        button.appendChild(button_text);

        var icon = document.createElement("div");
        icon.className = "button_icon";
        icon.style.backgroundImage = "url(" + marker.properties.emoji + ")";

        button.append(icon);

        document.getElementById("buttons_container").appendChild(button);




        // Go to the object after cliking the button

        button.addEventListener("click", function (e) {
            var button_container = document.getElementsByClassName("button");
            flyToStore(marker);
            // Close all other popups and display popup for clicked store + blogpost part appears
            createPopUp(marker);
            readBlogpost(marker);
            // Remove bottom_container after cliking a button
            bottom_container.style.display = "none";
            //Icon increaces
            el.style.width = (marker.properties.iconSize[0]) * 2 + "px";
            el.style.height = (marker.properties.iconSize[1]) * 2 + "px";




        });

        // Create a marker using the div element
        // defined above and add it to the map

        new mapboxgl.Marker(el, { offset: [0, -23] })
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);


        //  When element is clicked, do two things:
        // 1. Fly to the point
        // 2. Close all other popups and display popup for clicked store
        // 3. Related blog-post page appears

        el.addEventListener("click", function (e) {
            // Fly to the point
            flyToStore(marker);
            // Close all other popups and display popup for clicked store
            createPopUp(marker);
            //Read blog-post
            readBlogpost(marker);
            // Remove bottom_container after cliking a button
            bottom_container.style.display = "none";
            // Increase icon
            el.style.width = (marker.properties.iconSize[0]) * 2 + "px";
            el.style.height = (marker.properties.iconSize[1]) * 2 + "px";
        });
        x = x + 300;
    });
}

// Objects without btn

var objects = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [11.5789413, 48.1516564, 0]
            },
            properties: {
                name: "Billy's Café & Kiosk",
                iconSize: [80, 80],
                icon: "images/Cafe.png",
                page: "pages/billykiosk.html",
                address: "Adalbertstr. 6, 80799 Munich",
                open: "Mon-Fri 8:00-18:30, Sat&Sun 10:00-17:30"
            }
        },
        {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [11.625829, 48.1330219, 0]
            },
            properties: {
                name: "Baumkirchen Mitte Landscape Park",
                iconSize: [80, 80],
                icon: "images/landschaftspark.png",
                page: "pages/baumkirchen.html",
                address: "Hermann-Weinhauser-Straße 31  81673 Munich",
                open: "Everyday 9:00-18:00"

            }
        },
        {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [11.4728192, 48.2055774, 0]
            },
            properties: {
                name: "Allacher Forest",
                iconSize: [80, 80],
                icon: "images/Park.png",
                page: "pages/allacher.html",
                address: "80997 Munich",
                open: "Open 24 hours"

            }
        },
        {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [11.5597485, 48.145124, 0]
            },
            properties: {
                name: "Tre Stelle Restaurante",
                iconSize: [80, 80],
                icon: "images/pizza.png",
                page: "pages/trestelle.html",
                address: "Augustenstr. 1, 80333 Munich",
                open: "Mon-Fri 11:00-23:00, Sat 11:00-15:00"

            }
        },
        {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [11.5873654, 48.1238879, 0]
            },
            properties: {
                name: "Regerplatz 2",
                iconSize: [80, 80],
                icon: "images/regerplatz.png",
                page: "pages/regerplatz.html",
                address: "Regerpl. 2, 81541 München",
                open: "Liam we love you!"

            }
        }
    ]
};



function addMarker() {
    // For each feature in the GeoJSON object above:
    var x = 0;
    objects.features.forEach(function (marker) {
        // Create a div element for the marker.
        var en = document.createElement("div");
        // Assign a unique `id` to the marker.
        // Assign the `marker` class to each marker for styling.
        en.className = "marker";
        en.style.backgroundImage = "url(" + marker.properties.icon + ")";
        en.style.backgroundRepeat = "no-repeat";
        en.style.backgroundSize = "100%";
        en.style.width = marker.properties.iconSize[0] + "px";
        en.style.height = marker.properties.iconSize[1] + "px";


        new mapboxgl.Marker(en, { offset: [0, -23] })
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);

        en.addEventListener("click", function (e) {
            // Fly to the point
            flyToStore(marker);
            // Close all other popups and display popup for clicked store
            createPopUp(marker);
            //Read blog-post
            readBlogpost(marker);
            // Remove bottom_container after cliking a button
            bottom_container.style.display = "none";
            // Increase icon
            en.style.width = (marker.properties.iconSize[0]) * 2 + "px";
            en.style.height = (marker.properties.iconSize[1]) * 2 + "px";
        });
        x = x + 300;
    });
}


// Play again button

var btn = document.getElementById("play-again_button");
btn.addEventListener("click", function () {
    location.href = "index.html";
});

// Use Mapbox GL JS's `flyTo` to move the camera smoothly a given center point.

function flyToStore(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 16
    });
}

// Read a blog-post part in a module

function readBlogpost(currentFeature) {
    blogpostcontent = document.getElementById('frame');
    blogpostcontent.src = currentFeature.properties.page;
    blogpost.style.display = "block";
    btn.style.display = "block";
}


// Create a Mapbox GL JS `Popup`.

function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName("mapboxgl-popup");
    if (popUps[0]) popUps[0].remove();
    var popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML(
            "<h3>Good choice!</h3>" +
            "<h4>" + "<b>" +
            currentFeature.properties.name + "</b>" +
            "<br/>" +
            "<p align='left'>" + currentFeature.properties.address + "</br>" +
            currentFeature.properties.open +
            "</p>" + "</h4>"

        )
        .addTo(map);
}