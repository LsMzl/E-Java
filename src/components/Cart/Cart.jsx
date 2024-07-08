import React from "react";
import { CartItem } from "./CartItem";
import { Divider } from "@mui/material";

export const Cart = () => {
   return (
      <div>
         <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-5">
            Votre panier
         </h1>
         <div className="grid grid-cols-5 gap-10 relative">
            {/* Articles */}
            <div className="col-span-3 ">
               {[1, 1, 1, 1].map((item) => (
                  <CartItem />
               ))}
            </div>
            {/* Paiement */}
            <div className="sticky top-0 col-span-2 h-[50vh]">
               <div className="bg-gray-100 p-5 rounded-lg">
                  <h4 className="font-medium tracking-tight text-xl mb-5">
                     Résumé de votre commande
                  </h4>
                  <Divider />
                  <div>
                     <div className="flex justify-between pt-3">
                        <span>Prix</span>
                        <span>200€</span>
                     </div>
                     <div className="flex justify-between pt-3">
                        <span>Réduction</span>
                        <span>30€</span>
                     </div>
                     <div className="flex justify-between py-3">
                        <span>Livraison</span>
                        <span>Gratuit</span>
                     </div>
                  </div>
                  <Divider />
                  <div className="flex justify-between pt-3">
                     <span className="font-bold">Total</span>
                     <span>170€</span>
                  </div>
                  <button
                     type="submit"
                     className="mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                     Valider
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};
