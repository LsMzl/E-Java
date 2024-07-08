import { Avatar, Box, Rating } from "@mui/material";
import React from "react";

export const ProductReviewCard = () => {
   return (
      <div className="flex items-start gap-5 rounded-lg bg-gray-50">
         <div className="flex gap-2">
            <Box>
               <Avatar
                  className="text-white"
                  sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
               >
                  r
               </Avatar>
            </Box>
         </div>
         <div className="flex flex-col p-2">
            <p className="text-sm">nom</p>
            <p className="text-xs">15 sept. 2023</p>

            <Rating value={4.5} name="half-rating" readOnly precision={.5}/>
            <p className="text-sm">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Deleniti libero molestias ad dolorum cum minus sed explicabo?
            </p>
         </div>
      </div>
   );
};
