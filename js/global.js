// all objects below contain the content that the createCardResults function will fill in
var cardContent = {
  image: 'http://unsplash.it/400?random',
  title: 'Vintage Board Game',
  seller: 'franz66',
  price: '$' + 15 + '.00'
}
var cardContent2 = {
  image: 'http://unsplash.it/400?random',
  title: 'a',
  seller: '123',
  price: '$' + 16 + '.00'
}
var cardContent3 = {
  image: 'http://unsplash.it/400?random',
  title: 'b',
  seller: '456',
  price: '$' + 17 + '.00'
}
var cardContent4 = {
  image: 'http://unsplash.it/400?random',
  title: 'c',
  seller: '789',
  price: '$' + 18 + '.00'
}
var cardContent5 = {
  image: 'http://unsplash.it/400?random',
  title: 'd',
  seller: '101112',
  price: '$' + 19 + '.00'
}
var cardContent6 = {
  image: 'http://unsplash.it/400?random',
  title: 'e',
  seller: '131415',
  price: '$' + 20 + '.00'
}
var cardContent7 = {
  image: 'http://unsplash.it/400?random',
  title: 'f',
  seller: '161718',
  price: '$' + 21 + '.00'
}
var cardContent8 = {
  image: 'http://unsplash.it/400?random',
  title: 'g',
  seller: '192021',
  price: '$' + 22 + '.00'
}
var cardContent9 = {
  image: 'http://unsplash.it/400?random',
  title: 'h',
  seller: '222324',
  price: '$' + 23 + '.00'
}
var cardContent10 = {
  image: 'http://unsplash.it/400?random',
  title: 'i',
  seller: '252627',
  price: '$' + 24 + '.00'
}
var cardContent11 = {
  image: 'http://unsplash.it/400?random',
  title: 'j',
  seller: '282930',
  price: '$' + 25 + '.00'
}
var cardContent12 = {
  image: 'http://unsplash.it/400?random',
  title: 'k',
  seller: '313233',
  price: '$' + 26 + '.00'
}


var rowResults = document.createElement('div')
rowResults.classList.add('row') // creating row to insert columns
document.getElementById('searchResultContainer').appendChild(rowResults) // searchResultContainer is the container id in which this row is contained


function createCardResults(content){ // creating the function that grabs the object list from above and places content where specified

  var col = document.createElement('div')
  col.className = 'col-sm-3 card img-rounded'
  col.style.boxShadow = '1px solid black'
  col.style.marginBottom = '30px'
  rowResults.appendChild(col)

  var cardRow1 = document.createElement('div')
  cardRow1.classList.add('cardPicture')
  cardRow1.classList.add('img-responsive')
  cardRow1.innerHTML = '<img src="'+content.image+'" />' // grabbing the image property.
  col.appendChild(cardRow1)

  var cardRow2 = document.createElement('div')
  cardRow2.classList.add('cardTitle')
  cardRow2.innerHTML = content.title // grabbing the title property.
  col.appendChild(cardRow2)

  var cardRow3 = document.createElement('div')
  cardRow3.classList.add('cardPriceAndBrand')
  col.appendChild(cardRow3)

  var cardRow3Brand = document.createElement('div')
  cardRow3Brand.classList.add('col-sm-6')
  cardRow3Brand.classList.add('brandText')
  cardRow3Brand.classList.add('text-muted')
  cardRow3Brand.style.padding = '0'
  cardRow3Brand.innerHTML = content.seller // grabbing the seller property.
  cardRow3.appendChild(cardRow3Brand)

  var cardRow3Price = document.createElement('div')
  cardRow3Price.classList.add('col-sm-6')
  cardRow3Price.classList.add('brandPrice')
  cardRow3Price.classList.add('text-success')
  cardRow3Price.classList.add('text-right')
  cardRow3Price.style.padding = '0'
  cardRow3Price.innerHTML = content.price // grabbing the price property.
  cardRow3.appendChild(cardRow3Price)
}

// calling the function.
createCardResults(cardContent)
createCardResults(cardContent2)
createCardResults(cardContent3)
createCardResults(cardContent4)
createCardResults(cardContent5)
createCardResults(cardContent6)
createCardResults(cardContent7)
createCardResults(cardContent8)
createCardResults(cardContent9)
createCardResults(cardContent10)
createCardResults(cardContent11)
createCardResults(cardContent12)
