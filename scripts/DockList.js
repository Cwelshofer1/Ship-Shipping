import { getDocks } from "./database.js"

const docks = getDocks
export const DockList = () => {
    
    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li class="docklist" data-id="${dock.id}">
            ${dock.location} can hold ${dock.volume} million tons of cargo</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}
console.log(getDocks)