import React from "react";
import "./ProductCard.css";

export const ProductCard = ({product}) => {
   return (
      <div className="productCard w-[15rem] m-3 transition-all cursor-pointer ">
         <div className="h-[20rem]">
            <img
               src={product.imageUrl}
               alt=""
               className="h-full w-full object-cover"
            />
         </div>

         <div className="textPart bg-white p-3 hover:shadow-sm transition-all">
            <div>
               <p className="font-semibold opacity-80">{product.brand}</p>
               <p className="text-sm">
                  {product.title}
               </p>
            </div>
            <div className="flex items-center gap-2">
               <p className="font-semibold">{product.discountPrice}€</p>
               <p className="line-through opacity-50">{product.price}</p>
               <p className="text-emerald-600">-{product.discountPercent}% </p>
            </div>
         </div>
      </div>
   );
};
