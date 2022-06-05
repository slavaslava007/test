import {CityType, GovernmentBuildings} from "../2/02_02";


export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(h=>h.address.street.title !== street)
}


export  const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildings>,Count: number) => {
    return buildings.filter(b=>b.staffCount>Count)
}


