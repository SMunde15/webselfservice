import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: "10px",
  position: "relative",
  overflow: "hidden",
  width: "400px", // Set the width to 400px
  height: "100px", // Set the height to 400px
  backgroundColor: "#FFF",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: "15px 63px 15px 20px",
    background: "rgba(128, 128, 128, 0.3)",
  },
}));

const Row = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const BillDateTypography = styled(Typography)(({ theme }) => ({
  color: "var(--body, #6C6C6C)",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "100%",
}));

export default function BillingCard() {
  return (
    <StyledCard className="billing_card">
      <Row>
        <Typography variant="body2">Account Balance</Typography>
      </Row>

      <Row>
        <Typography
          variant="h5"
          sx={{
            color: "var(--us-heading, #181818)",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
          }}
        >
          AED 457.38
        </Typography>
      </Row>
      <Row>
        <BillDateTypography variant="body2">
          as of Feb 15, 2020
        </BillDateTypography>
      </Row>
    </StyledCard>
  );
}
