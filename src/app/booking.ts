import { Movie } from "./movie";

export class Booking {
  // public bid:number = 0;
  // public Movie:any;
  // public totalprice:number = 0;
  // public bookingdate:string = '';

  constructor(public bid:number,
    public bookingdate:string,
    public tickets: number,
    public Movie:Movie,
    public Customer:any,
    public totalprice:number){ }
}
