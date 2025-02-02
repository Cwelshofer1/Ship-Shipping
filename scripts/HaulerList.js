import { getHaulers } from "./database.js"
import { getShips } from "./database.js"




const haulers = getHaulers
export const HaulerList = () => {
    
    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML +=  `<li class="docklist"data-type="hauler" data-id="${hauler.id}">
            ${hauler.name}</li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}

document.addEventListener(
    "click",
    (clickEvt) => {
        const itemClicked = clickEvt.target
       
           // Was a hauler list item clicked?
           if(itemClicked.dataset.type === "hauler"){

            // Get the id of the hauler clicked
            const haulerId = itemClicked.dataset.id
            // Start a counter variable at 0
            let shipCounter = 0
            // Iterate all of the shipping ships
            const shippingShips = getShips;

            for(const ship of shippingShips) {
                if(parseInt(haulerId) === ship.haulerId){
                    shipCounter++
                }
            }
            window.alert(`This hauler is carrying ${shipCounter} shipping ships`)    
      }
    }
)

