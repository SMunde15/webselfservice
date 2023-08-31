import React, { useState } from "react";
import SelectTextFields from "../account_picker/card_view"; 
import BillCard from "../main_card/card";
import { WelcomeMessage } from '../account_picker/card_view';
import LeftNav from "../left_nav/left_nav";
import { Grid } from "@mui/material";

export default function CombineDashboard() {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedValue(event.target.value as string);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
        <LeftNav />
      </Grid>
      <Grid item xs={12} sm={9}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={7.5} style={{ marginTop: 35 }}>
            <WelcomeMessage selectedValue={selectedValue} /> 
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} style={{ marginTop: 25 }}>
                <SelectTextFields selectedValue={selectedValue} handleSelectChange={handleSelectChange} />
              </Grid>
              <Grid item xs={12} sm={12} style={{ marginTop: 100 }}>
                <BillCard />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4.5}></Grid>
        </Grid>
      </Grid>
    </Grid>

  );
}
