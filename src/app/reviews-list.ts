export class ReviewsList
{
   id:number;
   name:string;
   rating:number;
   text:string;
   
   constructor(id: number, name: string,rating:number, text: string) {
    this.id = id;
    this.name = name;
    this.rating=rating;
    this.text = text;
  }
}