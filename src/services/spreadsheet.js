import Tabletop from 'tabletop'

function fetchSpreadsheet () {
  return new Promise((resolve, reject) => {
    Tabletop.init({
      key: 'https://docs.google.com/spreadsheets/d/1U97BRjo6Gr8t9bocCJHHvJ6dtcMo1WN9efLmv-1j2GM/edit?usp=sharing',
      callback: (data, tabletop) => resolve(tabletop)
    })
  })
}

function uniqueCountries (data) {
  const set = new Set(data.reduce((array, org) => {
    org.pais.split(',').map(country => array.push(country.toLowerCase()))
    return array
  }, []).filter(country => country))
  return Array.from(set)
}

export { fetchSpreadsheet, uniqueCountries }
