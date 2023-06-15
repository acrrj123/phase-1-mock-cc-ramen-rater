// write your code here
document.addEventListener('DOMContentLoaded', () =>{

  const divMenu = document.getElementById('ramen-menu')
  let divDetail = document.getElementById('ramen-detail')
  const imgDetail = document.querySelector('img.detail-image')
  const comment = document.querySelector('p#comment-display')
  
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
    renderFirstRamen(ramen)
  }

  function renderFirstRamen(ramen) { 
    imgDetail.src="./assets/ramen/shoyu.jpg"
    const nameDetail = document.querySelector('h2')
    nameDetail.textContent = "Shoyu Ramen"
    const restDetail = document.querySelector('h3.restaurant')
    restDetail.textContent = "Nonono"
    const rating = document.querySelector('span#rating-display')
    rating.textContent = 7
    comment.innerHTML = "Delish. Can't go wrong with a classic! <br>"
    const delBtn = document.createElement('button')
    delBtn.textContent = 'Delete Ramen'
    comment.appendChild(delBtn)
    delBtn.addEventListener('click', () => {
      const delRamen = document.getElementById(1)
      delRamen.remove()
      divDetail.remove()
      const p = document.querySelector('p')
      p.remove()
      rating.remove()
      comment.remove()
    })
    renderDetailsWhenClicking(ramen)
  }
  
  function renderDetailsWhenClicking(ramen) {
    const btn = document.getElementById(`${ramen.id}`)
    //console.log(btn)
    btn.addEventListener('click', () => {
      imgDetail.src=`${ramen.image}`
      const nameDetail = document.querySelector('h2')
      nameDetail.textContent = `${ramen.name}`
      const restDetail = document.querySelector('h3.restaurant')
      restDetail.textContent = `${ramen.restaurant}`
      const rating = document.querySelector('span#rating-display')
      rating.textContent = `${ramen.rating}`
      const comment = document.querySelector('p#comment-display')
      comment.innerHTML = `${ramen.comment} <br>`
      const delBtn = document.createElement('button')
      delBtn.textContent = 'Delete Ramen'
      comment.appendChild(delBtn)
      delBtn.addEventListener('click', () => {
        btn.remove()
        divDetail.remove()
        const p = document.querySelector('p')
        p.remove()
        rating.remove()
        comment.remove()
      })
    })
  }

  fetch('http://localhost:3000/ramens')
  .then(resp => resp.json())
  .then(ramensArr => createRamen(ramensArr))

  function createRamen(ramensArr) {
    const form = document.getElementById('new-ramen')
    form.addEventListener('submit', e => {
      e.preventDefault()
      const name = document.getElementById('new-name').value
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
    image.id = 6
    const newName = document.querySelector('h2')
    newName.textContent = `${name}`
    const newRest = document.querySelector('h3.restaurant')
    newRest.textContent = `${restaurant}`
    const newRating = document.querySelector('span#rating-display')
    newRating.textContent = `${rating}`
    const newComment = document.querySelector('p#comment-display')
    newComment.innerHTML = `${comment} <br>`
    const delBtn = document.createElement('button')
    delBtn.textContent = 'Delete Ramen'
    newComment.appendChild(delBtn)
    delBtn.addEventListener('click', () => {
      const btn = document.getElementById(6)
      btn.remove()
      divDetail.remove()
      const p = document.querySelector('p')
      p.remove()
      newRating.remove()
      newComment.remove()
    })
  }    
})
  

  
    

  

