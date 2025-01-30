import { getShips } from "./database.js"

const ships = getShips
export const ShipList = () => {
    
    let shipsHTML = "<ul>"

    for (const ship of ships) {
        shipsHTML += `<li class="docklist" data-id="${ship.id}">
            ${ship.name}</li>`
    }

    shipsHTML += "</ul>"

    return shipsHTML
}
console.log(getShips)