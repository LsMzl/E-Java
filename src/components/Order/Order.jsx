import React from "react";
import { OrderCard } from "./OrderCard";

const orderStatus = [
   {
      label: "Livré",
      value: "delivered",
   },
   {
      label: "Expédié",
      value: "onTheWay",
   },
   {
      label: "Annulé",
      value: "canceled",
   },
   {
      label: "Retourné",
      value: "returned",
   },
   {
      label: "En cours de préparation",
      value: "preparation",
   },
   {
      label: "En attente de paiement",
      value: "paiementWait",
   },
   {
      label: "Paiement effectué",
      value: "paiementOk",
   },
];
export const Order = () => {
   return (
      <div className="grid grid-cols-6 gap-20 mb-10">
         <div className=" shadow p-5 sticky top-5 col-span-2">
            <h1 className="font-semibold text-xl tracking-tight">Filtre</h1>

            <div className="space-y-4 mt-5">
               <h2 className="font-medium">Statut de la commande</h2>
               {orderStatus.map((option) => (
                  <div className="flex items-center gap-2">
                     <input
                        defaultValue={option.value}
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                     />
                     <label
                        htmlFor={option.value}
                        className="text-sm text-gray-600"
                     >
                        {option.label}
                     </label>
                  </div>
               ))}
            </div>
         </div>
         <div className="col-span-4 space-y-5">
            {[1, 1, 1, 1, 1].map((item) => (
               <OrderCard />
            ))}
         </div>
      </div>
   );
};
