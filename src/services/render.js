function renderSidenav (country, organizations) {
  const list = organizations.reduce((str, org) => {
    str += `<li class="sidenav__item"><a href="">${org['nombre_organizacion']}</a></li>`
    return str
  }, '')
  return (
    `<h1 class="sidenav__title">${country}</h1>
    <div class="sidenav__content">
      <ul class="sidenav__items">${list}</ul>
    </div>`
  )
}

export {
  renderSidenav
}
