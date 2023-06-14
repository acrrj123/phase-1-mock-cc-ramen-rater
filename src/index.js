// write your code here
document.addEventListener('DOMContentLoaded', () =>{
  
  fetch('http://localhost:3000/ramens')
  .then(resp => resp.json())
  .then(ramensArr => ramensArr.forEach(ramen => {
    //console.log(ramen)
    renderRamensBar(ramen)
  }))

  function renderRamensBar(ramen) {
    const divMenu = document.getElementById('ramen-menu')
    const img = document.createElement('img')
    img.src=`${ramen.image}`
    img.id=`${ramen.id}`
    divMenu.appendChild(img)
    renderDetails(ramen)
  }

  function renderDetails(ramen) { 
    const divDetail = document.getElementById('ramen-detail')
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
    renderWhenClicking(ramen)
  }

  function renderWhenClicking(ramen) {
    const btn = document.getElementById(`${ramen.id}`)
    //console.log(btn)
    btn.addEventListener('click', () => {
      renderDetails(ramen)
    })
  }

  fetch('http://localhost:3000/ramens')
  .then(resp => resp.json())
  .then(ramensArr => createRamen(ramensArr))

  function createRamen(ramensArr) {
    const form = document.getElementById('new-ramen')
    form.addEventListener('submit', e => {
      e.preventDefault()
      const newName = e.target[0].value
      console.log(newName)
      
    })
  }

  
    

  


})