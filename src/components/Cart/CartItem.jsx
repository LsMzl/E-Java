import { Add, Close, Remove } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

export const CartItem = () => {
   return (
      <div className="flex items-start justify-between border-t py-10 gap-5">
         <div className="flex items-start gap-5">
            <img
               src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg"
               alt=""
               className="h-40 w-40"
            />
            <div className="flex flex-col gap-8">
               <div>
                  <p className="font-medium">Article name</p>
                  <p className="opacity-60 text-sm">Couleur | Taille</p>
                  <p className="font-medium">32€</p>
               </div>
               <div className="text-sm">
                  <p className="">Vendu par: Nom du vendeur</p>
                  <p className="">V En stock</p>
               </div>
            </div>
         </div>
         <div className="flex items-center gap-2">
            <Add sx={{ height: 20 }} className="cursor-pointer" />
            <span className="text-sm border rounded px-2 py-1">3</span>
            <Remove sx={{ height: 20 }} className="cursor-pointer" />
         </div>

         <IconButton className="p-1" title="Supprimer">
            <Close />
         </IconButton>
      </div>
   );
};
