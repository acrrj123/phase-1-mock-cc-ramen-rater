// write your code here
document.addEventListener('DOMContentLoaded', () => {

  fetch('http://localhost:3000/ramens')
  .then(resp => resp.json())
  .then(ramensArr => renderRamens(ramensArr))
  
  function renderRamens(ramensArr) {
    //console.log(ramensArr[0])
    renderDetails(ramensArr[0])
    ramensArr.forEach(ramen => renderRamensBar(ramen))
  }

  function renderRamensBar(ramen) {
    const img = document.createElement('img')
    img.src = ramen.image
    img.id = ramen.id
    img.addEventListener('click', () => renderDetails(ramen))
    const divMenu = document.getElementById('ramen-menu')
    divMenu.appendChild(img)
  }

  function renderDetails(ramen) {
    const divDetail = document.getElementById('ramen-detail')
    const image = document.querySelector('img.detail-image')
    image.src = ramen.image
    const name = document.querySelector('h2')
    name.textContent = ramen.name
    const restaurant = document.querySelector('h3.restaurant')
    restaurant.textContent = ramen.restaurant
    const rating = document.querySelector('span#rating-display')
    rating.textContent = ramen.rating
    const comment = document.querySelector('p#comment-display')
    comment.innerHTML = `${ramen.comment} <br>`
    const delBtn = document.createElement('button')
    delBtn.textContent = 'Delete Ramen'
    comment.appendChild(delBtn)
    delBtn.addEventListener('click', () => {
      const btn = document.getElementById(`${ramen.id}`)
      btn.remove()
      divDetail.remove()
      const p = document.querySelector('p')
      p.remove()
      rating.remove()
      comment.remove()
    })
  }

  const form = document.getElementById('new-ramen')
  form.addEventListener('submit', createRamen) 
  
  function createRamen(e) {
    e.preventDefault()
    const name = document.getElementById('new-name').value
    const restaurant = e.target[1].value
    const image = e.target[2].value
    const rating = e.target[3].value
    const comment = e.target[4].value
    //console.log(name, restaurant, image, rating, comment)
    const ramen = { name, restaurant, image, rating, comment }
    //console.log(ramen)
    renderRamensBar(ramen)
    e.target.reset()
  }
})
  

  
    

  

