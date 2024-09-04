//this items on FavouritesComponent & compere 
export interface Items {
    brand:  string
    model:  string
    year:   number
    color:  string
    mileage:number
    price:  number
    image:  string
}

export interface Items2 {
  brand:  string
  openfrom : number
  closeto : number
  city : string
  number : number
  image : string
}

export interface Items3 {
  brand:  string
  openfrom : number
  closeto : number
  image : string
  isBuyActive: boolean;
}

export interface Country {
  name: string;
  provinces: string[];
}

export const COUNTRIES: Country[] = [
  { name: 'Egypt', provinces: ['Cairo', 'Giza', 'Alexandria', 'Aswan'] },
  { name: 'USA', provinces: ['California', 'New York', 'Texas', 'Florida'] },
  { name: 'Germany', provinces: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'] }
];
