import React from "react";
import { AddressCard } from "../AddressCard/AddressCard";
import { Button, TextField } from "@mui/material";

export const DeliveryAddressForm = () => {
   const handleSubmit = (e) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);

      const address = {
         firstName: data.get("firstName"),
         lastName: data.get("lastName"),
         email: data.get("email"),
         phone: data.get("phone"),
         streetAddress: data.get("address"),
         city: data.get("city"),
         state: data.get("state"),
         zipCode: data.get("zip"),
      };

      console.log("data", address);
   };

   return (
      <div className="grid grid-cols-5 items-start my-10 gap-10">
         <div className="space-y-5 col-span-2">
            <div>
               <p className="font-semibold">Adresse de livraison</p>
               <p className="text-sm">
                  Choisissez parmis vos adresses enregistrées ou ajoutez-en une
                  nouvelle
               </p>
            </div>
            <div className="overflow-y-auto h-72 space-y-2">
               <AddressCard />
               <AddressCard />
               <Button
                  sx={{ mt: 2, bgcolor: "RGB(145 85 240)" }}
                  variant="contained"
               >
                  Livrer ici
               </Button>
            </div>
         </div>
         <div className="border rounded-lg p-5 col-span-3">
            <form action="" className="space-y-8" onSubmit={handleSubmit}>
               <div className="flex items-center gap-5">
                  <TextField
                     required
                     id="firstName"
                     name="firstName"
                     label="Nom"
                     fullWidth
                     autoComplete="given-name"
                     size="small"
                  />
                  <TextField
                     required
                     id="lastName"
                     name="lastName"
                     label="Prénom"
                     fullWidth
                     autoComplete="given-name"
                     size="small"
                  />
               </div>
               <div className="flex items-center gap-5">
                  <TextField
                     required
                     id="email"
                     name="email"
                     label="Email"
                     fullWidth
                     autoComplete="given-name"
                     size="small"
                     type="email"
                  />
                  <TextField
                     required
                     id="phone"
                     name="phone"
                     label="Téléphone"
                     fullWidth
                     autoComplete="given-name"
                     size="small"
                     type="tel"
                  />
               </div>
               <TextField
                  required
                  id="address"
                  name="address"
                  label="Adresse"
                  fullWidth
                  autoComplete="given-address"
                  size="small"
               />
               <div className="flex items-center gap-5">
                  <TextField
                     required
                     id="city"
                     name="city"
                     label="Ville"
                     fullWidth
                     autoComplete="given-city"
                     size="small"
                  />
                  <TextField
                     required
                     id="state"
                     name="state"
                     label="Région / Département"
                     fullWidth
                     autoComplete="given-state"
                     size="small"
                  />
                  <TextField
                     required
                     id="zip"
                     name="zip"
                     label="Code postal"
                     fullWidth
                     autoComplete="given-zip"
                     size="small"
                  />
               </div>
               <div className="flex justify-end">
                  <Button
                     sx={{ bgcolor: "RGB(145 85 240)" }}
                     variant="contained"
                     type="submit"
                  >
                     Livrer ici
                  </Button>
               </div>
            </form>
         </div>
      </div>
   );
};
