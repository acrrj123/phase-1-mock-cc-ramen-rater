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
  

  
    

  

