import React, { ChangeEvent } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { FormControl, Grid} from "@mui/material";

interface Entry {
  value: string;
  label: string;
  label2: string;
  label3: string;
}

interface SelectTextFieldsProps {
  selectedValue: string;
  handleSelectChange: (event: ChangeEvent<{ value: unknown }>) => void;
}

const Entries: Entry[] = [
  { value: "User1", label: "653273", label2: "509, Al Nahda 1, Dubai", label3: "Mohammed Hussain" },
  { value: "User2", label: "123456", label2: "Bibvewadi", label3: "Isha Pathak" },
  { value: "User3", label: "456789", label2: "Swargate", label3: "Nabil Patel" },
  { value: "User4", label: "789456", label2: "Market Yard", label3: "Sourabh Munde" },
];

export const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ selectedValue }) => {
  const selectedEntry: Entry | undefined = Entries.find((entry) => entry.value === selectedValue);

  return (
    <Grid item xs={12} sm={12} direction={"row"}>
      <Typography
          variant="body2"
          sx={{
              color: "var(--us-heading, #181818)",
              fontSize: "36px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
          }}
      >
    {selectedEntry ? `Welcome back, ${selectedEntry.label3}` : 'Welcome back'}
      </Typography>
    </Grid>
      
  );
};


const SelectTextFields: React.FC<SelectTextFieldsProps> = ({ selectedValue, handleSelectChange }) => {
    return (
      <Box
        sx={{
        display: 'flow-root',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        maxWidth: '650px', 
        }}
      > <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
          <TextField
            id="outlined-select-currency"
            select
            label="Selected Account"
            value={selectedValue}
            onChange={handleSelectChange}
          > 
            {Entries.map((option) => (
              <MenuItem key={option.value} value={option.value} sx={{ width: '100%', mb: 2 }}>
                <div style={{ display: 'flex', alignItems: 'end' , justifyContent:'space-between'}}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 10 }}>
                    {option.label}
                  </Typography>
                  <Typography variant="body2" sx={{ mr: 10, alignItems: 'flex-end' }}>
                    {option.label2}
                  </Typography>
                  <Typography variant="caption" sx={{ justifyContent: 'flex-end' }}>
                    {option.label3}
                  </Typography>
                </div>
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
        </Grid>
      </Box>
    );
  };
  
  export default SelectTextFields;


export interface WelcomeMessageProps {
    selectedValue: string;
}

