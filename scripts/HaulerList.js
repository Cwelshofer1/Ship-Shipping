import { getHaulers } from "./database.js"

const haulers = getHaulers
export const HaulerList = () => {
    
    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li class="docklist" data-id="${hauler.id}">
            ${hauler.name}</li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}
console.log(getHaulers)