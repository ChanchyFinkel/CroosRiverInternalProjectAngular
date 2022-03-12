import { Time } from "@angular/common";
export class OrderDTO{
    id:number;
    customerId:number;
    customerName:string;
    checkInDate:Date;
    checkOutDate:Date;
    bookingDate:Date;
    earlyCheckIn?:Time;
    lateCheckOut?:Time;
    separteBeds:boolean;
    multipleRooms:boolean;
    floorHeight:number;
   //  highFloor?:boolean;
   //  porch?:boolean;
    totalPrice:number;
    costPrice:number;
    bookingId?:number;
    numOfAdults:number;
    numOfKIds?:number;
    statusCode:number;
    newPrice?:number;
    change?:boolean;
    hotelId:number;
    hotelName:string;
    comments:string;
    isImportant?:boolean;
    hotelPrice:number;


    
    constructor( id:number,   customerId:number,customerName:string,checkInDate:Date,checkOutDate:Date,bookingDate:Date,  separteBeds:boolean,multipleRooms:boolean,hotelId:number,hotelName:string, comments:string,floorHeight:number
        ,hotelPrice:number, totalPrice:number,costPrice:number ,numOfAdults:number,statusCode:number ,earlyCheckIn?:Time,lateCheckOut?:Time,bookingId?:number,numOfKIds?:number,newPrice?:number, change?:boolean,isImportant?:boolean)
      //   ,highFloor?:boolean,porch?:boolean
   {
      this.id=id;
      this.customerId=customerId;
      this.customerName=customerName;
      this.checkInDate=checkInDate;
      this.checkOutDate=checkOutDate;
      this.bookingDate=bookingDate;
      this.separteBeds=separteBeds;
      this.multipleRooms=multipleRooms;
      this.hotelId=hotelId;
      this.hotelName=hotelName;
      this.comments=comments;
      this.totalPrice=totalPrice;
      this.costPrice=costPrice;
      this.numOfAdults=numOfAdults;
      this.statusCode=statusCode;
      this.hotelPrice=hotelPrice;
      this.earlyCheckIn=earlyCheckIn;
      this.lateCheckOut=lateCheckOut;
      this.floorHeight=floorHeight
      // this.highFloor=highFloor;
      // this.porch=porch;
      this.bookingId=bookingId;
      this.numOfKIds=numOfKIds;
      this.newPrice=newPrice;
      this.change=change;
      this.isImportant=isImportant;
 
   }
}