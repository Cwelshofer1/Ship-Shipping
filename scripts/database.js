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
            dockId: 2
        },
        {
            id: 2,
            name: "McMegaHauler",
            dockId: 2
        },
        {
            id: 3,
            name: "MrGlobalHauler",
            dockId: 3
        },
        {
            id: 4,
            name: "HighrollerHauler",
            dockId: 4
        }
    ],
    shippingShips: [
        { id: 1, name: "Titan Voyager", haulerId: 1 },
        { id: 2, name: "Neptune's Pride", haulerId: 2 },
        { id: 3, name: "Ocean Guardian", haulerId: 3 },
        { id: 4, name: "Storm Breaker", haulerId: 4 },
        { id: 5, name: "Wave Runner", haulerId: 1 },
        { id: 6, name: "Blue Horizon", haulerId: 2 },
        { id: 7, name: "Arctic Explorer", haulerId: 3 },
        { id: 8, name: "Seafarer", haulerId: 4 },
        { id: 9, name: "Aqua Titan", haulerId: 1 },
        { id: 10, name: "Majestic Mariner", haulerId: 2}
    ]
}
export const getDocks = structuredClone(database.docks)
console.log(getDocks)
export const getHaulers = structuredClone(database.haulers)
export const getShips = structuredClone(database.shippingShips)
