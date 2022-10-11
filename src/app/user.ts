export interface Details {
    firstName:string;
    middleName:string;
    lastName:string;
    email:string;
    gender:{kind:string};
    dob:Date;
    city:{name:string};
    phone:number
  }

 export interface City {
    name: string
   
  }
  
 export interface Gender {
    kind: string
   
  }
  
