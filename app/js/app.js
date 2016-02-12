var map = L.map('map').setView([36.031, -80.068], 5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'discovery-creative.0f3090ae',
    accessToken: 'pk.eyJ1IjoiZGlzY292ZXJ5LWNyZWF0aXZlIiwiYSI6IlJzOEt3a00ifQ.n9FSbHZ35ahD8F3SUua4Zg'
}).addTo(map);

var attackIcons = {
  state1: {
    state:'Florida',
    numAttacks: 924,
    markerCoordinates: [27.80, -81.38],
    popupText: 'U.S. Rank: #1 | Percent of Attacks: 48% | Total Attacks: 924 | Confirmed Fatalities: 40 | Provoked Incidents: 83'
  },
  state2: {
    state:'Hawaii',
    numAttacks: 259,
    markerCoordinates: [19.808, -155.742],
    popupText: 'U.S. Rank: #2 | Percent of U.S. Attacks: 13% | Total Attacks: 259 | Confirmed Fatalities: 35 | Provoked Incidents: 11'
  },
  state3: {
    state:'California',
    numAttacks: 257,
    markerCoordinates: [37.892, -120.915],
    popupText: 'U.S. Rank: #3 | Percent of U.S. Attacks: 13% | Total Attacks: 257 | Confirmed Fatalities: 18 | Provoked Incidents: 32'
  },
  state4: {
    state:'South Carolina',
    numAttacks: 132,
    markerCoordinates: [33.888, -80.881],
    popupText: 'U.S. Rank: #4 | Percent of U.S. Attacks: 6.8% | Total Attacks: 132 | Confirmed Fatalities: 8 | Provoked Incidents: 10'
  },
  state5: {
    state:'North Carolina',
    numAttacks: 90,
    markerCoordinates: [35.621, -78.684],
    popupText: 'U.S. Rank: #5 | Percent of U.S. Attacks: 4.6% | Total Attacks: 90 | Confirmed Fatalities: 9 | Provoked Incidents: 3'
  },
  state6: {
    state:'Texas',
    numAttacks: 67,
    markerCoordinates: [31.090, -98.854],
    popupText: 'U.S. Rank: #6 | Percent of U.S. Attacks: 3.5% | Total Attacks: 67 | Confirmed Fatalities: 6 | Provoked Incidents: 7'
  },
  state7: {
    state:'New Jersey',
    numAttacks: 47,
    markerCoordinates: [40.094, -74.421],
    popupText: 'U.S. Rank: #7 | Percent of U.S. Attacks: 2.4% | Total Attacks: 47 | Confirmed Fatalities: 6 | Provoked Incidents: 11'
  },
  state8: {
    state:'New York',
    numAttacks: 29,
    markerCoordinates: [42.811, -75.058],
    popupText: 'U.S. Rank: #8 | Percent of U.S. Attacks: 1.5% | Total Attacks: 29 | Confirmed Fatalities: 3 | Provoked Incidents: 7'
  },
  state9: {
    state:'Oregon',
    numAttacks: 28,
    markerCoordinates: [44.543, -123.925],
    popupText: 'U.S. Rank: #9 | Percent of U.S. Attacks: 1.4% | Total Attacks: 28 | Confirmed Fatalities: 1 | Provoked Incidents: 0'
  },
  state10: {
    state:'Virginia',
    numAttacks: 17,
    markerCoordinates: [37.282, -76.596],
    popupText: 'U.S. Rank: #10 | Percent of U.S. Attacks: 0.9% | Total Attacks: 17 | Confirmed Fatalities: 2 | Provoked Incidents: 3'
  },
  state11: {
    state:'Alabama',
    numAttacks: 13,
    markerCoordinates: [30.429, -88.022],
    popupText: 'U.S. Rank: #11 (tied Georgia) | Percent of U.S. Attacks: 0.7% | Total Attacks: 13 | Confirmed Fatalities: 2 | Provoked Incidents: 1'
  },
  state12: {
    state:'Georgia',
    numAttacks: 13,
    markerCoordinates: [31.165, -81.650],
    popupText: 'U.S. Rank: #11 (tied Al.) | Percent of U.S. Attacks: 0.7% | Total Attacks: 13 | Confirmed Fatalities: 3 | Provoked Incidents: 0'
  },
  state13: {
    state:'Louisiana',
    numAttacks: 11,
    markerCoordinates: [29.688, -92.0434],
    popupText: 'U.S. Rank: #13 (tied Mass.) | Percent of U.S. Attacks: 0.6% | Total Attacks: 11 | Confirmed Fatalities: 1 | Provoked Incidents: 3'
  },
  state14: {
    state:'Massachusetts',
    numAttacks: 11,
    markerCoordinates: [42.195, -71.125],
    popupText: 'U.S. Rank: #13 (tied  La.) | Percent of U.S. Attacks: 0.6% | Total Attacks: 11 | Confirmed Fatalities: 3 | Provoked Incidents: 1'
  },
  state15: {
    state:'Delaware',
    numAttacks: 7,
    markerCoordinates: [38.925, -75.388],
    popupText: 'U.S. Rank: #15 (tied RI) | Percent of U.S. Attacks: 0.4% | Total Attacks: 7 | Confirmed Fatalities: 0 | Provoked Incidents: 3'
  },
  state16: {
    state:'Rhode Island',
    numAttacks: 7,
    markerCoordinates: [41.459, -71.586],
    popupText: 'U.S. Rank: #17 (tied DE) | Percent of U.S. Attacks: 0.3% | Total Attacks: 6 | Confirmed Fatalities: 0 | Provoked Incidents: 2'
  },
  state17: {
    state:'Connecticut',
    numAttacks: 6,
    markerCoordinates: [41.244, -72.641],
    popupText: 'U.S. Rank: #17 (tied MD) Percent of U.S. Attacks: 0.3% Total Attacks: 6 Confirmed Fatalities: 0 Provoked Incidents: 2'
  },
  state18: {
    state:'Maryland',
    numAttacks: 6,
    markerCoordinates: [37.770, -75.541],
    popupText: 'U.S. Rank: #17 (tied CT) | Percent of U.S. Attacks: 0.3% | Total Attacks: 6 | Confirmed Fatalities: 1 | Provoked Incidents: 3'
  },
  state19: {
    state:'Mississippi',
    numAttacks: 5,
    markerCoordinates: [30.353, -89.077],
    popupText: 'U.S. Rank: #18 | Percent of U.S. Attacks: 0.3% | Total Attacks: 5 | Confirmed Fatalities: 2 | Provoked Incidents: 2'
  },
  state20: {
    state:'Alaska',
    numAttacks: 1,
    markerCoordinates: [65.766, -152.050],
    popupText: 'U.S. Rank: #19 (tied) | Percent of U.S. Attacks: <0.1% | Total Attacks: 1 | Confirmed Fatalities: 0 | Provoked Incidents: 1'
  },
  state21: {
    state:'New Mexico',
    numAttacks: 1,
    markerCoordinates: [34.343, -106.083],
    popupText: 'U.S. Rank: #19 (tied) | Percent of U.S. Attacks: <0.1% | Total Attacks: 1 (captive shark) | Confirmed Fatalities: 0 | Provoked Incidents: 1'
  },
  state22: {
    state:'Illinois',
    numAttacks: 1,
    markerCoordinates: [40.747, -88.725],
    popupText: 'U.S. Rank: #19 (tied) | Percent of U.S. Attacks: <0.1% | Total Attacks: 1 (bull shark) | Confirmed Fatalities: 0 | Provoked Incidents: 0'
  },
  state23: {
    state:'Kentucky',
    numAttacks: 1,
    markerCoordinates: [37.474, -84.946],
    popupText: 'U.S. Rank: #19 (tied) | Percent of U.S. Attacks: <0.1% | Total Attacks: 1 (captive shark) | Confirmed Fatalities: 0 | Provoked Incidents: 1'
  },
  state24: {
    state:'Maine',
    numAttacks: 1,
    markerCoordinates: [44.527, -68.906],
    popupText: 'U.S. Rank: #19 (tied) | Percent of U.S. Attacks: <0.1% | Total Attacks: 1 | Confirmed Fatalities: 0 | Provoked Incidents: 0'
  },
  state25: {
    state:'Missouri',
    numAttacks: 1,
    markerCoordinates: [38.410, -92.460],
    popupText: 'U.S. Rank: #19 (tied) | Percent of U.S. Attacks: <0.1% | Total Attacks: 1 (captive shark) | Confirmed Fatalities: 0 | Provoked Incidents: 1'
  },
  state26: {
    state:'Pennsylvania',
    numAttacks: 1,
    markerCoordinates: [40.680, -78.002],
    popupText: 'U.S. Rank: #19 (tied) | Percent of U.S. Attacks: <0.1% | Total Attacks: 1 (captive shark) | Confirmed Fatalities: 0 | Provoked Incidents: 1'
  },
  state27: {
    state:'Washington',
    numAttacks: 1,
    markerCoordinates: [47.754, -123.574],
    popupText: 'U.S. Rank: #19 (tied) | Percent of U.S. Attacks: <0.1% | Total Attacks: 1 (captive shark) | Confirmed Fatalities: 0 | Provoked Incidents: 0'
  }
};

var createMarker = function(obj) {
  for ( var key in obj ) {
    var myIcon = L.divIcon({className: 'circle-marker', html:obj[key].numAttacks });
    L.marker(obj[key].markerCoordinates, {icon: myIcon})
      .addTo(map)
      .bindPopup('<strong>' + obj[key].state +'</strong>' + obj[key].popupText);
  }
}

createMarker(attackIcons);
