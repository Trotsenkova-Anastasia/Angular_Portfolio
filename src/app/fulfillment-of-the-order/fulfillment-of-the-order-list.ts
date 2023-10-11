export class FulfillmentOfTheOrder
{
   id:number;
   name:string;
   name_client:string;
   text:string;
   
   constructor(id: number, name: string,name_client:string, text: string) {
    this.id = id;
    this.name = name;
    this.name_client=name_client;
    this.text = text;
  }
}