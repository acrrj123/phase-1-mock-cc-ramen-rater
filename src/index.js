// write your code here
document.addEventListener('DOMContentLoaded', () =>{

  const divMenu = document.getElementById('ramen-menu')
  const divDetail = document.getElementById('ramen-detail')
  const imgDetail = document.querySelector('img.detail-image')
  
  fetch('http://localhost:3000/ramens')
  .then(resp => resp.json())
  .then(ramensArr => ramensArr.forEach(ramen => {
    //console.log(ramen)
    renderRamensBar(ramen)
  }))

  function renderRamensBar(ramen) {
    const img = document.createElement('img')
    img.src=`${ramen.image}`
    img.id=`${ramen.id}`
    divMenu.appendChild(img)
    renderDetails(ramen)
  }

  function renderDetails(ramen) { 
    imgDetail.src="./assets/ramen/shoyu.jpg"
    const nameDetail = document.querySelector('h2')
    nameDetail.textContent = "Shoyu Ramen"
    const restDetail = document.querySelector('h3.restaurant')
    restDetail.textContent = "Nonono"
    const rating = document.querySelector('span#rating-display')
    rating.textContent = 7
    const comment = document.querySelector('p#comment-display')
    comment.textContent = "Delish. Can't go wrong with a classic!"
    renderWhenClicking(ramen)
  }

  function renderWhenClicking(ramen) {
    const btn = document.getElementById(`${ramen.id}`)
    //console.log(btn)
    btn.addEventListener('click', () => {
      const imgDetail = document.querySelector('img.detail-image')
      imgDetail.src=`${ramen.image}`
      const nameDetail = document.querySelector('h2')
      nameDetail.textContent = `${ramen.name}`
      const restDetail = document.querySelector('h3.restaurant')
      restDetail.textContent = `${ramen.restaurant}`
      const rating = document.querySelector('span#rating-display')
      rating.textContent = `${ramen.rating}`
      const comment = document.querySelector('p#comment-display')
      comment.textContent = `${ramen.comment}`
    })
  }

  fetch('http://localhost:3000/ramens')
  .then(resp => resp.json())
  .then(ramensArr => createRamen(ramensArr))

  function createRamen(ramensArr) {
    const form = document.getElementById('new-ramen')
    form.addEventListener('submit', e => {
      e.preventDefault()
      //console.log(e.target)
      const name = e.target[0].value
      const restaurant = e.target[1].value
      const image = e.target[2].value
      const rating = e.target[3].value
      const comment = e.target[4].value
      renderNewRamen(name, restaurant, image, rating, comment)
      e.target.reset()
    })
  }
    
  function renderNewRamen(name, restaurant, image, rating, comment) {
    const img = document.createElement('img')
    img.src=`${image}`
    img.id=6
    // https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg
    divMenu.appendChild(img)
    handleClick(name, restaurant, image, rating, comment)
  }

  function handleClick(name, restaurant, image, rating, comment) {
    const btn = document.getElementById('6')
    //console.log(btn)
    btn.addEventListener('click', () => {
      renderNewDetails(name, restaurant, image, rating, comment)
    })
  }

  function renderNewDetails(name, restaurant, image, rating, comment) {
    imgDetail.src=`${image}`
    const newName = document.querySelector('h2')
    newName.textContent = `${name}`
    const newRest = document.querySelector('h3.restaurant')
    newRest.textContent = `${restaurant}`
    const newRating = document.querySelector('span#rating-display')
    newRating.textContent = `${rating}`
    const newComment = document.querySelector('p#comment-display')
    newComment.textContent = `${comment}`
  }    
})
  

  
    

  


