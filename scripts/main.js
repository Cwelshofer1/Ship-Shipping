import { DockList } from "./DockList.js"
import { HaulerList} from "./HaulerList.js"
import { ShipList } from "./ShippingShipList.js"

const mainContainer = document.querySelector("#container")

const shipHTML = ` 
<h1>Hauling Ships
${HaulerList()}
</h1>
<h1 class="h1">Shipping Ships
${ShipList()}
</h2>
<h1>Docks
${DockList()}
</h1>

`


mainContainer.innerHTML = shipHTML
// Convert each dock object to an <li> and append to the docksHTML string