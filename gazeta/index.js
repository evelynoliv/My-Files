var db = []
var urlBase = 'https://clube-static.clubegazetadopovo.com.br'

function propSort( a, b ) {
  if ( a.fantasyName < b.fantasyName ){
    return -1;
  }
  if ( a.fantasyName > b.fantasyName ){
    return 1;
  }
  return 0;
}


function dbSearch (value) {
  value = value.toLowerCase()
  var dbFiltered = db.filter(x => x.fantasyName.toLowerCase().indexOf(value) > -1)
  render(dbFiltered)
}



function render (data) {
  
  var list = document.getElementById('list')

  list.innerHTML = ''

 
  data.sort(propSort)

  for (const item of data) {

    
    var div = document.createElement('div')

    var a = '<br>'

    
    div.innerHTML = `<img src="${urlBase}/${item.cover}" > ${item.fantasyName} ${a}
    Desconto: ${item.discountAmount}%`
    
    
    list.appendChild(div)
  }


}

fetch("https://gdp-prd-clube.s3.amazonaws.com/api/repository/partners/all.json ")
  .then(response => response.json())
  .then(json => {
    console.log(json)
    
    db = json

    render(db)
  });

