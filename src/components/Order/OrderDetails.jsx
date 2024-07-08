import React from "react";
import { AddressCard } from "../AddressCard/AddressCard";
import { OrderTracker } from "./OrderTracker";

export const OrderDetails = () => {
   return (
      <div className="">
         <div className="mb-5">
            <h1 className="text-lg font-semibold pb-2">
               Addresse de livraison
            </h1>
            <AddressCard />
         </div>
         <div className="pt-5 pb-10">
            <OrderTracker activeStep={3} />
         </div>

         <div>
            jbl
         </div>
      </div>
   );
};
