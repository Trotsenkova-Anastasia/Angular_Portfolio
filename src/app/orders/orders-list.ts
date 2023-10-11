export class OrdersList
{
   id:number;
   name:string;
   text:string;
   src:string;
   constructor(id: number, name: string, text: string, src:string) {
    this.id = id;
    this.name = name;
    this.text = text;
    this.src=src;
  }
}