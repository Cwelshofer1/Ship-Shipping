import { getShips } from "./database.js"
import { getHaulers } from "./database.js"

const ships = getShips





export const ShipList = () => {
    
    let shipsHTML = "<ul>"

    for (const ship of ships) {
        shipsHTML += `<li class="docklist" data-haulerid="${ship.haulerId}" data-name="${ship.name}" data-type="ship" >
            ${ship.name}</li>`
    }

    shipsHTML += "</ul>"

    return shipsHTML
}



document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
            if(itemClicked.dataset.type === "ship"){
            // Get the haulerId value of the shipping ship clicked
                const shipId = itemClicked.dataset.haulerid
                const shipName = itemClicked.dataset.name
            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }
            
            // Iterate the array of hauler objects
                for(const hauler of getHaulers) {
                // Does the haulerId foreign key match the id of the current hauler?
                    if(parseInt(shipId) === hauler.id) {

                        // Reassign the value of `haulingShip` to the current hauler
                        haulingShip = hauler.name
                      
                    }
                    
                }
                window.alert(`${shipName} is being hauled by ${haulingShip}`) 
            // Show an alert to the user with this format...
             
        }    // Palais Royal is being hauled by Seawise Giant
    }
)