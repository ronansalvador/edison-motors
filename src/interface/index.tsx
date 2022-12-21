export default interface Icar {
  model: Icar
  car:{
    id: number,
    model: string,
    name: string
    price: number
    year: number,
    fuel?: string,
    door?: number,
    km?: number,
    power?: string,
    gearshift?: string,
    maximum_speed?: string,
    air_conditioning?: boolean,
    alarm?: boolean,
    airbag?: boolean,
    img: string}
  }

  // export default interface IcarCatalog {
  //   id: number;
  //   img: string | undefined;
  //   name: string | number | boolean ;
  //   model: string;
  //   year: string;
  //   price: number
  // }