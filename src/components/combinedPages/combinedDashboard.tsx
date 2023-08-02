import React,{useState} from "react";
import '../src/components/left_nav/BlockComponents.css';
import BlockComponents from "../left_nav/BlockComponents";
import SelectTextFields from "../account_picker/card_view"; 
import BillCard from "../main_card/card";
import StickyHeadTable from '../billing_payment/billing'
import {WelcomeMessage} from '../account_picker/card_view';

export default function CombineDashboard (){
    const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedValue(event.target.value as string);
  };
  return(
    <div>
        <BlockComponents />
        <SelectTextFields selectedValue={selectedValue} handleSelectChange={handleSelectChange} />
        <WelcomeMessage selectedValue={selectedValue} /> 
        <BillCard />
        <StickyHeadTable/>
    </div>
  )
}