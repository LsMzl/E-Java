import { Done, LocalShipping } from "@mui/icons-material";
import React from "react";

export const OrderCard = () => {
   return (
      <div className="flex items-start justify-between gap-5 border rounded hover:shadow cursor-pointer">
         <div className="flex items-start gap-5">
            <img
               src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg"
               alt=""
               className="h-28 w-28"
            />

            <div className="mt-5">
               <p className="font-medium">Article name</p>
               <p className="opacity-60 text-sm">Couleur | Taille</p>
               <p className="font-medium">32€</p>
            </div>
         </div>
         <div className="flex flex-col justify-center py-5 pr-5 lg:pr-10">
            {true && (
               <div className="flex items-center gap-2">
                  <Done sx={{ width: "15px", height: "15px" }}/>
                  <p className="font-medium">
                     Livraison effectuée le 15/08/2024
                  </p>
               </div>
            )}
            {false && (
               <div className="flex items-center gap-2">
                  <LocalShipping sx={{ width: "15px", height: "15px" }} />
                  <p className="font-medium">Livraison estimée le 15/08/2024</p>
               </div>
            )}

            {true && (
               <p className="text-xs">
                  Cet article vous a été livré le 14/08/2024
               </p>
            )}
         </div>
      </div>
   );
};
