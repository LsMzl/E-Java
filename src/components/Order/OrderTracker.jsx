import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

const steps = ["Payé", "En préparation", "Expédié", "Livré"];

export const OrderTracker = ({ activeStep }) => {
   return (
      <div className="w-full">
         <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
               <Step>
                  <StepLabel sx={{color:"#9155fd", fontSize:"44px"}}>{label}</StepLabel>
               </Step>
            ))}
         </Stepper>
      </div>
   );
};
