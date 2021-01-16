

  mapboxgl.accessToken =
    "pk.eyJ1IjoiZGFzaGxhcHBvIiwiYSI6ImNqbjJ3aHhjZTBwZXozcGw4eW90YTY5cW0ifQ.B30zBLfnXNoQA6Wt452TwQ";
  
   // Add the map to the page
    
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    center: [11.5690239, 48.154782],
    zoom: 11
  });

  var stores = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [11.5643935, 48.1321211, 0]
        },
        properties: {
          name: "Ristorante Pizzeria Mixto",
          keyword: "I want a cheap Pizza!",
          iconSize: [60, 60],
          icon: "images/pizza.png"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [11.537753, 48.170654, 0]
        },
        properties: {
          name: "Borstei",
          keyword: "I feel motivated to travel",
          iconSize: [60, 60],
          icon: "images/Boresti.png"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [11.5033143, 48.1582675, 0]
        },
        properties: {
          name: "Nymphenburg Palase",
          keyword: "Calm and relaxed at Nymphenerg",
          iconSize: [60, 60],
          icon: "images/castle.png"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [11.5643935, 48.1321211, 0]
        },
        properties: {
          name: "Ristorante Pizzeria Mixto",
          keyword: "I want a cheap pizza!",
          iconSize: [60, 60],
          icon: "images/pizza.png"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [11.537753, 48.170654, 0]
        },
        properties: {
          name: "Borstei",
          keyword: "I feel motivated to travel around",
          iconSize: [60, 60],
          icon: "images/Boresti.png"
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [11.5033143, 48.1582675, 0]
        },
        properties: {
          name: "Nymphenburg Palase",
          keyword: "Calm and relaxed at Nymphenberg",
          iconSize: [60, 60],
          icon: "images/castle.png"
        }
      }
    ]
  };

  
  // Assign a unique id to each store. You'll use this `id`
  //  later to associate each point on the map with a listing
  //  in the sidebar.
    
  stores.features.forEach(function(store, i) {
    store.properties.id = i;
  });


  map.on('load', function (e) {


    addMarkers();

  });



   function addMarkers() {
     // For each feature in the GeoJSON object above: 
     var x= 0;
     stores.features.forEach(function(marker) {
       // Create a div element for the marker. 
       var el = document.createElement("div");
       // Assign a unique `id` to the marker.  
       // Assign the `marker` class to each marker for styling.  
       el.className = "marker";
       el.style.backgroundImage = 'url(' + marker.properties.icon +')';
       el.style.backgroundRepeat='no-repeat';
       el.style.backgroundSize='100%';
       el.style.width = marker.properties.iconSize[0] + 'px';
       el.style.height = marker.properties.iconSize[1] + 'px';

       var colors = ['red', 'blue', 'green', 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown'];

       var button = document.createElement("div");
       button.className = "button";
       //button.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];


       
       var button_text = document.createElement('div');
       button_text.className = "button_text";
       button_text.innerHTML = marker.properties.keyword;


       button.appendChild(button_text)  
        
       var icon = document.createElement('div');
       icon.className='button_icon';
       icon.style.backgroundImage = 'url(' + marker.properties.icon +')';

       button.append(icon);
       

        

       document.getElementById('buttons_container').appendChild(button);
       
       button.addEventListener('click',function(e){

         var button_container = document.getElementsByClassName('button');
         flyToStore(marker);
          // Close all other popups and display popup for clicked store  
         createPopUp(marker);

       });          
       
       
        // 

        // //
        // Create a marker using the div element
        // defined above and add it to the map.
        // 
       new mapboxgl.Marker(el, { offset: [0, -23] })
         .setLngLat(marker.geometry.coordinates)
         .addTo(map);

        // //
        // Listen to the element and when it is clicked, do three things:
        // 1. Fly to the point
        // 2. Close all other popups and display popup for clicked store
        // 3. Highlight listing in sidebar (and remove highlight for all other listings)
        // 
       el.addEventListener("click", function(e) {
          // Fly to the point  
         flyToStore(marker);
          // Close all other popups and display popup for clicked store  
         createPopUp(marker);
       });
       x = x+300;
     });
   }
   // //

   // //
    // Use Mapbox GL JS's `flyTo` to move the camera smoothly
    // a given center point.
    // 
  function flyToStore(currentFeature) {
    map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 17
    });
  }

   // //
    // Create a Mapbox GL JS `Popup`.
    // 
  function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName("mapboxgl-popup");
    if (popUps[0]) popUps[0].remove();
    var popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML(
        "<h3>Good choice!</h3>" +
          "<h4>" +
          currentFeature.properties.name +
          "</h4>"
      )
      .addTo(map);
  }

 