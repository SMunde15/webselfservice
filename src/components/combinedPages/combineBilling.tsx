import React,{useState} from "react";
import BlockComponents from "../left_nav/BlockComponents";
import '../left_nav/BlockComponents.css';
import BalanceCard from "../billing_payment/billcard";
import BasicTabs from "../billing_payment/billing";
import SelectTextFields from '../account_picker/card_view';
import { Typography } from "@mui/material";

export default function CombineBilling () {
    const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedValue(event.target.value as string);
  };

    return(
        <><div>
            <Typography sx={{
                color: "var(--us-heading, #181818)",
                fontSize: "2rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                marginLeft: '22%',
                marginTop: '1.8%',
                position: 'absolute'
            }}> Billing & Payment History</Typography>
        <Typography sx={{
                color: "#7D7D7D",
                fontSize: "1rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                marginLeft: '22%',
                marginTop: '5.4%',
                position: 'absolute'
            }}> View past billing and payment records here.</Typography>
        </div>
        <div>
        <BlockComponents />
        <SelectTextFields selectedValue={selectedValue} handleSelectChange={handleSelectChange} />
        <BalanceCard />
        <BasicTabs />
            </div></>
    );
};
