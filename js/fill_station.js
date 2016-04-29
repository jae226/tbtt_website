var locations = [
  [
    "Bartels Hall. East side of lobby (floor 1)", // Description
    42.445788, -76.475845 // Latitude, Longitude
  ],
  [
    "Barton Hall. NW corner by stairs (basement)",
    42.446140, -76.481378
  ],
  [
    "Barton Hall. SW corner of track (floor 1)",
    42.445790, -76.481088
  ],
  [
    "Caldwell Hall. Across from elevator/stairs (floors B,1,2,3,4)",
    42.449213, -76.478285
  ],
  [
    "Cornell Store. Outside restrooms (floor 1)",
    42.446604, -76.483805
  ],
  [
    "Day Hall. Outside Provost/President's office (floor 3)",
    42.447012, -76.483488
  ],
  [
    "Duffield Hall. Outside restrooms by Mattin's (floor 1)",
    42.444473, -76.482305
  ],
  [
    "Fernow Hall. Floors G,1,2",
    42.448439, -76.475221
  ],
  [
    "Fischell Band Center. Outside restrooms (floor 1)",
    42.443812, -76.477209
  ],
  [
    "Hollister Hall. At corner of building L-shape (floor 1)",
    42.444093, -76.484633 //10
  ],
  [
    "Human Ecology Building. Along north hallway (floor T)",
    42.450539, -76.478544
  ],
  [
    "Human Ecology Building. Outside restrooms (floors T,1,2)",
    42.450311, -76.478748
  ],
  [
    "Humphries Service Building. Near south entrance lobby (floor 1)",
    42.442636, -76.475444
  ],
  [
    "Kennedy Hall. Outside restrooms by auditorium (floor 1)",
    42.448287, -76.479451
  ],
  [
    "Klarman Hall. Outside restrooms behind big TV (floors G,1)",
    42.449105, -76.483028
  ],
  [
    "Klarman Hall. Top of stairs on north side (floors 3)",
    42.449430, -76.483221
  ],
  [
    "Klarman Hall. Top of stairs on south side (floors 3)",
    42.448822, -76.483194
  ],
  [
    "Mann Library. South end of lobby (floors 1)",
    42.448575, -76.476319
  ],
  [
    "Martha Van Rensselaer Hall. Outside restrooms by Martha's (basement)",
    42.450001, -76.478923
  ],
  [
    "Martha Van Rensselaer Hall. Near elevator (floors T,G,1,2)",
    42.449945, -76.478338
  ],
  [
    "Morrill Hall. Outside restrooms on north side (floor 1)",
    42.448748, -76.485314
  ],
  [
    "Myron Taylor Hall. Outside restrooms by commons (floor 1)",
    42.443765, -76.485555
  ],
  [
    "Noyes Community Center. Near rock wall",
    42.446477, -76.488189
  ],
  [
    "Olin Library. Floors B,1,2,3,4,5,6,7",
    42.447919, -76.484640
  ],
  [
    "Phillips Hall. Outside restrooms (floor 2)",
    42.444678, -76.482187
  ],
  [
    "Physical Sciences Building. Outside restrooms by Goldie's (floor 1)",
    42.449919, -76.481578
  ],
  [
    "Rhodes Hall. Next to kitchen (floor 2)",
    42.443420, -76.481672
  ],
  [
    "Rockefeller Hall. South side (basement)",
    42.448855, -76.481872
  ],
  [
    "Savage Hall. Along south hallway (floor 1)",
    42.449736, -76.480163
  ],
  [
    "Schwartz Center. Lobby near elevator (floor 1)",
    42.442390, -76.485989
  ],
  [
    "Sibley Hall. Outside men's restroom on west side (floor 1)",
    42.450913, -76.484427
  ],
  [
    "Sibley Hall. East side by stairs (floor 2)",
    42.450946, -76.483499
  ],
  [
    "Space Sciences Building. Left hallway from main entrance (floor 1)",
    42.448828, -76.481169
  ],
  [
    "Statler Hall. In hallway to Mac's (floor G)",
    42.445917, -76.482128
  ],
  [
    "Statler Hall. Outside restrooms (floors 1,2)",
    42.445672, -76.481946
  ],
  [
    "Teagle Hall. Across from vending machines (floor 1)",
    42.445636, -76.478939
  ],
  [
    "Thurston Hall. Across from elevator (floor 1)",
    42.445636, -76.478939
  ],
  [
    "Upson Hall. Outside restrooms (floor 1)",
    42.444002, -76.482254
  ],
  [
    "Warren Hall. Outside restrooms on east side (floors 1,2,3,4)",
    42.449216, -76.476633
  ],
  [
    "Willard Straight Hall. Outside men's restroom (floor 1)",
    42.446786, -76.485653
  ]
]

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      // center: new google.maps.LatLng(-33.92, 151.25),
      center: new google.maps.LatLng(42.447508, -76.482175),
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

