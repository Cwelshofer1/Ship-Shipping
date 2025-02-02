import { getDocks } from "./database.js"
import { getHaulers } from "./database.js"

const docks = getDocks
export const DockList = () => {

    let docksHTML = "<ul>"

    for (const dock of docks) {

        docksHTML += `<li class="docklist"  data-id="${dock.id}" data-type="dock" data-location="${dock.location}">
            ${dock.location} can hold ${dock.volume} million tons of cargo</li>`
    
}

    docksHTML += "</ul>"

    return docksHTML
    
}

document.addEventListener(
    "click", 
    (clickEvent) => {
    const itemClicked = clickEvent.target;

    if (itemClicked.dataset.type === "dock") {
        const dockId = parseInt(itemClicked.dataset.id);
        const dockName = itemClicked.dataset.location;

        const haulerList = getHaulers;
        let haulersAtDock = [];

        // Loop through haulers and store matches
        for (const hauler of haulerList) {
            if (dockId === hauler.dockId) {
                haulersAtDock.push(hauler.name);
            }
        }

        // Run the alert *once* after the loop, not inside it
        if (haulersAtDock.length > 0) {
            window.alert(`The ${dockName} is currently unloading ${haulersAtDock.join(", ")}`);
        } else {
            window.alert(`The ${dockName} is currently unloading nothing`);
        }
    }
});
        
             
        
            
            
            
           
           
           
  
    
            