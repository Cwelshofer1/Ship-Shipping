const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],

    haulers: [
        {
            id: 1,
            name: "SuperHauler",
            dock: "Superdock"
        },
        {
            id: 2,
            name: "McMegaHauler",
            dock: "McMegaDock"
        },
        {
            id:3,
            name: "MrGlobalHauler",
            dock:"MrGlobalDock"
        },
        {
            id: 4,
            name: "HighrollerHauler",
            dock: "HighrollerDock"
        }
    ],
    shippingShips: [
        { id: 1, name: "Titan Voyager" },
        { id: 2, name: "Neptune's Pride" },
        { id: 3, name: "Ocean Guardian" },
        { id: 4, name: "Storm Breaker" },
        { id: 5, name: "Wave Runner" },
        { id: 6, name: "Blue Horizon" },
        { id: 7, name: "Arctic Explorer" },
        { id: 8, name: "Seafarer" },
        { id: 9, name: "Aqua Titan" },
        { id: 10, name: "Majestic Mariner" }
    ]
}
export const getDocks = structuredClone(database.docks)
console.log(getDocks)
    // You write the code for copying the array and returning it
export const getHaulers = structuredClone(database.haulers)
export const  getShips  = structuredClone(database.shippingShips)