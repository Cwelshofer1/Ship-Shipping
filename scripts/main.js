import { DockList } from "./DockList.js"
import { HaulerList} from "./HaulerList.js"
import { ShipList } from "./ShippingShipList.js"

const mainContainer = document.querySelector("#container")

const shipHTML = ` 
<h1>Hauling Ships</h1> 
${HaulerList()}
<h1>Shipping Ships</h1>
${ShipList()}
<h1>Docks</h1>
${DockList()}

`


mainContainer.innerHTML = shipHTML
// Convert each dock object to an <li> and append to the docksHTML string