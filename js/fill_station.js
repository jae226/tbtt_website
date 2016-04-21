var locations = [
    [
        "Duffield. \n Look near the bathrooms",
        42.44466, 
        -76.48256
    ]
]

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      // center: new google.maps.LatLng(-33.92, 151.25),
      center: new google.maps.LatLng(42.44466, -76.48256),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

