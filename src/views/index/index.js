import './index.css'
import { initializeMap, loadGeoJSON } from '@/services/map'
import geojson from '@/data/america.json'
import { fetchSpreadsheet, uniqueCountries } from '@/services/spreadsheet'
import { renderSidenav } from '@/services/render'

let map, geo, countries, orgs
const sidenav = document.querySelector('.sidenav')
window.addEventListener('DOMContentLoaded', init)

function onEachFeature (feature, layer) {
  layer
    .bindTooltip(Object.values(feature.properties).toString())
    .on({
      mouseover: onMouseover,
      mouseout: onMouseout,
      click: onClick
    })
}

function onMouseover (e) {
  const { target } = e
  target.setStyle({ weight: 2, fillColor: '#80CBC4' })
}

function onMouseout (e) {
  geo.resetStyle(e.target)
}

function onClick (e) {
  const { target } = e
  const country = Object.values(target.feature.properties).toString()
  const organizations = orgs.filter(org => org.pais.includes(country))
  map.fitBounds(target.getBounds())
  const template = renderSidenav(country, organizations)
  sidenav.innerHTML = template
}

function filterCountries (feature) {
  const country = feature.properties['PAÍS'].toLowerCase()
  return countries.includes(country)
}

function init () {
  fetchSpreadsheet()
    .then(data => {
      orgs = data.sheets('orgs').all()
      countries = uniqueCountries(orgs)
      map = initializeMap('map')
      geo = loadGeoJSON(map, geojson, onEachFeature, filterCountries)
    })
}
