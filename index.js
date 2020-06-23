/***** Deliverable 1 *****/
const header = document.querySelector("#header")
//add defer to script to load properly 

/***** Deliverable 2 *****/
header.style.color = "red"
// header.addEventListener('click', (event) => event.target.style.color = "red")
/***** Deliverable 3 *****/
//adding players to webpage 
let parentDiv = document.querySelector(".player-container")

PLAYERS.forEach(player => {
    parentDiv.innerHTML += `
    <div class="player" data-number=${player.number}>
  <h3>
    player name: <em>${player.name}</em>
  </h3>
  <img src=${player.photo} alt="${player.name}">
</div>`
})
/***** Deliverable 4 *****/
//removing last player
parentDiv.querySelector("[data-number= '7']").remove()
