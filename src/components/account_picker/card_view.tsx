import React, { ChangeEvent } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

interface Entry {
    value: string;
    label: string;
    label2: string;
    label3: string;
}

interface SelectTextFieldsProps { // Add the SelectTextFieldsProps interface
    selectedValue: string;
    handleSelectChange: (event: ChangeEvent<{ value: unknown }>) => void;
}

const Entries: Entry[] = [
    { value: 'User1', label: '653273', label2: '509, Al Nahda 1, Dubai', label3: 'Mohammed Hussain' },
    { value: 'User2', label: '123456', label2: 'Bibvewadi', label3: 'Isha Pathak' },
    { value: 'User3', label: '456789', label2: 'Swargate', label3: 'Nabil Patel' },
    { value: 'User4', label: '789456', label2: 'Market Yard', label3: 'Sourabh Munde' },
];

const SelectTextFields: React.FC<SelectTextFieldsProps> = ({ selectedValue, handleSelectChange }) => {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { width: '54ch', height: '5ch' },
                top: '13.5%',
                left: '22%', 
                right: '30%',
                position: 'absolute',
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Selected Account"
                    value={selectedValue}
                    onChange={handleSelectChange}
                >
                    {Entries.map((option) => (
                        <MenuItem key={option.value} value={option.value} sx={{ width: '100%', mb: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'end' }}>
                                <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 10 }}>
                                    {option.label}
                                </Typography>
                                <Typography variant="body2" sx={{ mr: 10, alignItems:'flex-end' }}>
                                    {option.label2}
                                </Typography>
                                <Typography variant="caption" sx={{justifyContent:'flex-end'}} >
                                    {option.label3}
                                </Typography>
                            </div>
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        </Box>
    );
};
export default SelectTextFields;

export interface WelcomeMessageProps {
    selectedValue: string;
}

export const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ selectedValue }) => {
    const selectedEntry: Entry | undefined = Entries.find((entry) => entry.value === selectedValue);

    return (
        <Typography
            variant="body2"
            sx={{
                mt: 2,
                color: "var(--us-heading, #181818)",
                fontSize: "36px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                position: "absolute",
                top: "2%",
                left: "22%"
            }}
        >
      {selectedEntry ? `Welcome back, ${selectedEntry.label3}` : 'Welcome back'}
        </Typography>
    );
};
