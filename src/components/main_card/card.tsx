import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import image from "../../Image/flower.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Paper, Box } from "@mui/material";

const date = 'Feb 15, 2020'
const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: "10px",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${image})`,
    backgroundPosition: "50%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "inherit",
    backgroundColor: "rgba(187, 221, 240, 0.90)",
    zIndex: -1,
  },
}));

const Row = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: theme.spacing(1),
}));

const ChildRow = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
const ChildRowThree = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#181818",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "22.4px",
}));
const BillDateTypography = styled(Typography)(({ theme }) => ({
  color: "var(--body, #6C6C6C)",
  // justifyContent: "start",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "100%",
}));

export default function BillCard() {
  return (
    <StyledCard
      className="main-card"
      sx={{ maxWidth: 675, backgroundColor: "transparent", marginLeft:'312px', marginTop: '198px', position: 'absolute' }}
    >
      {/* First Row */}
      <Row>
        <Typography
          variant="h6"
          sx={{
            color: "var(--us-heading, #181818)",

            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "22.4px",
          }}
        >
          Current Bill
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "var(--red, #982737)",
            textAlign: "center",

            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "22.4px" /* 160% */,
            textDecorationLine: "underline",
          }}
        >
          Bill Details
        </Typography>
      </Row>
      {/* Second Row */}
      <Row>
        <Typography
          variant="body2"
          sx={{
            color: "#6C6C6C",

            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "22.4px",
          }}
        >
          Account ID : 653273
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "var(--red, #982737)",
            textAlign: "center",

            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "22.4px" /* 160% */,
            textDecorationLine: "underline",
          }}
        >
          Download Bill (PDF)
        </Typography>
      </Row>
      {/* Third Row */}
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          zIndex: -10,
          display: "flex",
          width: "100%",
          height: "20px",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "615px",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        ></Box>
      </Paper>
      <ChildRowThree>
        <Typography variant="body2">Amount Due</Typography>
      </ChildRowThree>
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          zIndex: -10,
          display: "flex",
          width: "15%",
          height: "8px",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "615px",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        ></Box>
      </Paper>
      <ChildRow>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h5"
            sx={{
              color: "var(--us-heading, #181818)",

              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal" /* 160% */,
            }}
          >
            AED 457.38
          </Typography>

          <BillDateTypography variant="body2">
            Bill Date: {date}
          </BillDateTypography>
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: "var(--us-heading, #181818)",

            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "100%" /* 160% */,
          }}
        >
          July 18, 2023
        </Typography>
      </ChildRow>

      <Paper
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          zIndex: -10,
          display: "flex",
          width: "100%",
          height: "30px",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "615px",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        ></Box>
      </Paper>
      {/* Button */}
      <Button
        variant="contained"
        fullWidth
        sx={{
          display: "flex",
          padding: "8px 22px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          borderRadius: "4px",
          background: "#982737",
          boxShadow:
            "0px 3px 1px -2px rgba(0, 0, 0, 0.20), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
        }}
      >
        Pay Bill
      </Button>
    </StyledCard>
  );
}