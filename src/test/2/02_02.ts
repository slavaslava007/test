
export  type GovernmentBuildings={
    type:"HOSPITAL"| "FIRE-STATION"
    budget:number
    staffCount:number
    address:AdressType
}

export  type TitleType = {
    title:string
}
export  type AdressType = {
   number?:number
    street: TitleType
}
export  type HpuseType = {
    buildedAt:number
    repaired:false
    address: AdressType

}
export  type  CityType = {
    title:string
    houses:Array<HpuseType>
    governmentBuildings:Array<GovernmentBuildings>
    citizensNumber:number
}