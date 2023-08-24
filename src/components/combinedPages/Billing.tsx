/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import LeftNav from "../left_nav/left_nav";
import BalanceCard from "../billing_payment/billcard";
import BasicTabs from "../billing_payment/billing";
import SelectTextFields from "../account_picker/card_view";
import { Container, Grid, Typography, useMediaQuery } from "@mui/material";

export default function CombineBilling() {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelectChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedValue(event.target.value as string);
  };

  const isAboveAverageScreen = useMediaQuery("(min-width: 800px)");

  return (
    <> 
    
            <Typography
              sx={{
                color: "var(--us-heading, #181818)",
                fontSize: "2rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                marginLeft: "12%",
                marginTop: "1.8%",
                position: "absolute",
              }}
            >
              Billing & Payment History
            </Typography>
            {isAboveAverageScreen && (
              <Typography
                sx={{
                  color: "#7D7D7D",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  marginLeft: "12%",
                  marginTop: "5.4%",
                  position: "absolute",
                }}
              >
                View past billing and payment records here.
              </Typography>
            )}
           
      <LeftNav />

              <BalanceCard />

              <SelectTextFields selectedValue={selectedValue} handleSelectChange={handleSelectChange}/>
              <BasicTabs />
    </>
  );
}
