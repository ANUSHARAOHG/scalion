import { Delete } from "@mui/icons-material";
import { Box, Button, Card, IconButton, TextField,Grid, Typography } from "@mui/material";
import { FlexBetween, FlexBox } from "components/flex-box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import { H3, H4, H5 } from "components/Typography";
import React, { useState } from "react";
const reasonList = [
  {
    id: 1,
    title: "Ordered the wrong product",
  },
  {
    id: 2,
    title: "The merchant shipped the wrong product",
  },
  {
    id: 3,
    title: "The product is damaged or defective",
  },
  {
    id: 4,
    title: "The product arrived too late",
  },
  {
    id: 5,
    title: "The product do not match the description",
  },
];

// =============================================================================
RefundSetting.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; 
// =============================================================================

export default function RefundSetting() {
  const [refundReq, setRefundReq] = useState("Confirm");
  const [refundTime, setRefundTime] = useState("120 Days");
  const [reasonTypeList, setReasonTypeList] = useState(reasonList);
  const handleDeleteReason = (id) => () => {
    setReasonTypeList((state) => state.filter((item) => item.id !== id));
  };
  return (  
    <Box py={4}>
      <H3 mb={2}>Orders</H3>

      <Card
        sx={{
          p: 3,
        }}
      >
         <Grid item sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Orders</InputLabel>
                  <Select
                    fullWidth
                    id="outlined-select-currency"
                    select
                    label="Tax"
                    
                  >
                    <MenuItem value={1}>Open</MenuItem>
                    <MenuItem value={2}>Cancelled</MenuItem>
                    <MenuItem value={3}>Closed</MenuItem>
                    <MenuItem value={4}>All</MenuItem>
                  </Select>
                </FormControl>
               
              </Grid>
        

        {/* <TextField
          fullWidth
          color="info"
          size="medium"
          value={refundTime}
          variant="outlined"
          label="Refund Request Generation Time"
          onChange={(e) => setRefundTime(e.target.value)}
          sx={{
            fontSize: 14,
            fontWeight: 600,
            mb: 2,
          }}
        /> */}

        {/* <Button color="info" variant="contained">
          Update
        </Button> */}

        {/* <H4 mb={3} mt={4}>
          Order Status
        </H4> */}

        {/* <TextField
          fullWidth
          color="info"
          size="medium"
          value={refundReq}
          variant="outlined"
          label="Enabling Refund Request"
          onChange={(e) => setRefundReq(e.target.value)}
          sx={{
            fontSize: 14,
            fontWeight: 600,
            mb: 2,
          }}
        /> */}

        {/* <Button color="info" variant="contained">
          Update
        </Button> */}

        {/* <H4 mb={3} mt={4}>
          Refund Reasons
        </H4>
        <H5 mb={2}>Reason Type</H5> */}

        {/* <Box
          width={{
            lg: "90%",
            xs: "100%",
          }}
        > */}
          {/* {reasonTypeList.map((reason) => (
            <FlexBox mb={2} gap={3} key={reason.id} alignItems="center">
              <Box
                sx={{
                  flexGrow: 1,
                  fontWeight: 600,
                  border: "1px solid",
                  borderRadius: "8px",
                  padding: "10px 16px",
                  borderColor: "grey.300",
                }}
              >
                {reason.title}
              </Box> */}

              {/* <IconButton
                onClick={handleDeleteReason(reason.id)}
                sx={{
                  backgroundColor: "grey.200",
                }}
              >
                <Delete
                  sx={{
                    fontSize: 19,
                    color: "grey.600",
                  }}
                />
              </IconButton>
            </FlexBox> */}
          

          {/* <FlexBetween mt={4}>
            <Button color="info" variant="contained">
              Update
            </Button>

            <Button color="info" variant="outlined">
              Add New
            </Button>
          </FlexBetween> */}
        {/* </Box> */}
      </Card>
    </Box>
  );
}
