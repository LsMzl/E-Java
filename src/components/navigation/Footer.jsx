
import React from "react";

export const Footer = () => {
   return (
      <footer className="bg-gray-800 text-gray-100">
         <div className="flex flex-col  py-10  max-w-7xl mx-auto">
            {/* Top */}
            <div className="flex items-center gap-10 mb-10">
               {/* Left */}
               <div className="flex-2 flex flex-col gap-3">
                  <span className="h-10 w-10 rounded-full bg-indigo-600" />
                  <p className="text-sm font-medium">
                     Making the world a better place through constructing
                     elegant hierarchies.
                  </p>
                  {/* Socials */}
                  <div className="flex items-center gap-2">
                     <p>a</p>
                     <p>b</p>
                     <p>c</p>
                     <p>d</p>
                     <p>e</p>
                  </div>
               </div>
               {/* Right */}
               <div className="flex-1 flex items-start justify-between gap-5 ">
                  <div className="flex flex-col gap-5">
                     <h4 className="font-semibold">Entreprise</h4>
                     <div className="text-sm flex flex-col gap-2">
                        <a href="">Entreprise</a>
                        <a href="">A propos</a>
                        <a href="">Blog</a>
                        <a href="">Presse</a>
                     </div>
                  </div>

                  <div className="flex flex-col gap-5">
                     <h4 className="font-semibold">Informations</h4>
                     <div className="text-sm flex flex-col gap-2">
                        <a href="">Prix</a>
                        <a href="">Documentation</a>
                        <a href="">Guide des tailles</a>
                        <a href="">Paiement</a>
                        <a href="">Livraison</a>
                     </div>
                  </div>

                  <div className="flex flex-col gap-5">
                     <h4 className="font-semibold">Informations</h4>
                     <div className="text-sm flex flex-col gap-2">
                        <a href="">Gestion des données</a>
                        <a href="">Documentation</a>
                        <a href="">Guide des tailles</a>
                        <a href="">Paiement</a>
                     </div>
                  </div>
                  <div className="flex flex-col gap-5">
                     <h4 className="font-semibold">Informations</h4>
                     <div className="text-sm flex flex-col gap-2">
                        <a href="">Gestion des données</a>
                        <a href="">Documentation</a>
                        <a href="">Guide des tailles</a>
                        <a href="">Paiement</a>
                     </div>
                  </div>
               </div>
            </div>

            {/* Bottom */}
            <div className="flex flex-col gap-5 w-full">
               <span className="h-[1px] w-full bg-gray-400" />
               <p className="self-start text-xs">
                  © 2020 Your Company, Inc. All rights reserved.
               </p>
            </div>
         </div>
      </footer>
   );
};
