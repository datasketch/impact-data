import L from 'leaflet'

function initializeMap (selector) {
  const map = L.map(selector, {
    center: [14.925843, -69.204674],
    minZoom: 1.5,
    zoom: 3,
    zoomControl: false
  })
  L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(map)
  return map
}

function loadGeoJSON (map, geojson, onEachFeature, filter) {
  const geo = L.geoJSON(geojson, {
    style: {
      color: '#009688',
      fillColor: 'transparent',
      weight: 1
    },
    filter,
    onEachFeature
  }).addTo(map)
  return geo
}

export { initializeMap, loadGeoJSON }
