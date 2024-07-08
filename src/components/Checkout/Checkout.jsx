import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import { DeliveryAddressForm } from "./DeliveryAddressForm";
import { OrderSummary } from "./OrderSummary";

const steps = [
   "Connexion",
   "Adresse de livraison",
   "Résumé de la commande",
   "Paiement",
];

export default function Checkout() {
   const [activeStep, setActiveStep] = React.useState(0);
   const [skipped, setSkipped] = React.useState(new Set());
   const location = useLocation();
   const querySearch = new URLSearchParams(location.search);

   const etape = querySearch.get("etape");
   const handleNext = () => {
      let newSkipped = skipped;

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
   };

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
   };

   const handleReset = () => {
      setActiveStep(0);
   };

   return (
      <div className="">
         <Box sx={{ width: "100%" }}>
            <Stepper activeStep={etape}>
               {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  return (
                     <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                     </Step>
                  );
               })}
            </Stepper>
            {activeStep === steps.length ? (
               <>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                     Etapes completées - vous avez terminé.
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                     <Box sx={{ flex: "1 1 auto" }} />
                     <Button onClick={handleReset}>Reinitialiser</Button>
                  </Box>
               </>
            ) : (
               <>
                  <div className="pt-5">
                     {etape == 2 ? <DeliveryAddressForm /> : <OrderSummary />}
                  </div>
                  <Box
                     sx={{
                        display: "flex",
                        flexDirection: "row",
                        pt: 2,
                        pb: 5,
                     }}
                  >
                     <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                     >
                        Retour
                     </Button>
                     <Box sx={{ flex: "1 1 auto" }} />

                     {/* <Button onClick={handleNext}>
                        {activeStep === steps.length - 1
                           ? "Terminer"
                           : "Suivant"}
                     </Button> */}
                  </Box>
               </>
            )}
         </Box>
      </div>
   );
}
