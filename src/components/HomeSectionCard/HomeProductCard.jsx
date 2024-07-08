import React from "react";

export const HomeProductCard = () => {
   return (
      <div className="cursor-pointer flex flex-col bg-red-500 items-center rounded-lg shadow overflow-hidden w-[13rem]">
         <div className="h-[10rem] w-full">
            <img
               className="object-cover object-top w-full h-full"
               src=""
               alt=""
            />
         </div>
         <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900">Product title</h3>
            <p className="mt-2 text-sm text-gray-500">Product description</p>
         </div>
      </div>
   );
};
