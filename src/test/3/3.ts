import {CityType, GovernmentBuildings, HpuseType} from "../2/02_02";


export const addMoneyToBudget = (building: GovernmentBuildings, add: number) => {
  building.budget +=add;
}


export const repairHouse = (house: HpuseType) => {
     house.repaired = true;

}

export const toFireStaff = (bilding: GovernmentBuildings, fire: number) => {
        bilding.staffCount -= fire
}


export  const toHireStaff = (budget: GovernmentBuildings, hire: number) => {
  budget.staffCount += hire
}



export const createmessage = (city: CityType) => {
  return `Hello ${city.title} citizend. I love all ${city.citizensNumber} person`
}