import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Grid,
  TextField,
  styled,
  Checkbox,
  FormControlLabel,
  TextareaAutosize,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { FlexBetween } from "components/flex-box";
import GoldPackageIcon from "components/icons/GoldPackageIcon";
import PremiumPackageIcon from "components/icons/PremiumPackageIcon";
import SilverPackageIcon from "components/icons/SilverPackageIcon";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SellerPackageCard } from "pages-sections/admin";
import { FlexBox } from "components/flex-box";
import Verify from "components/icons/Verify";
import { H1, H3, H5 } from "components/Typography";
import { currency } from "lib";
const Wrapper = styled(Card)({
  display: "flex",
  padding: "3rem 2rem",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  margin: "30px",
});
const PackageHeading = styled(H1)(({ theme }) => ({
  ":after": {
    fontSize: 16,
    fontWeight: 600,
    content: "'/month'",
    verticalAlign: "baseline",
    color: theme.palette.grey[600],
  },
}));

const BootstrapCard = styled(Card)(({ theme }) => ({
  display: "flex",
  padding: "3rem 2rem",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  margin: "10px",
}));

// =============================================================================
SellerPackage.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

export default function SellerPackage() {
  return (
    <Wrapper>
      <Grid item xl={4} mb={4}>
        <H3>Pick Up Address</H3>
      </Grid>
      <Grid container spacing={3}>
        <Grid item sm={4} xs={12}>
          <TextField
            fullWidth
            type="text"
            label="Enter title"
            color="info"
            size="small"
            placeholder="Enter Title"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <TextField
            fullWidth
            type="text"
            label="Enter pickup address"
            color="info"
            size="small"
            placeholder="Pickup address"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <TextField
            fullWidth
            type="text"
            label="Enter country"
            color="info"
            size="small"
            placeholder="Country"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <TextField
            fullWidth
            type="text"
            label="Enter state"
            color="info"
            size="small"
            placeholder="State"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <TextField
            fullWidth
            type="text"
            label="Enter city"
            color="info"
            size="small"
            placeholder="City"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <TextField
            fullWidth
            type="number"
            label="Enter pincode"
            color="info"
            size="small"
            placeholder="Pincode"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <TextField
            fullWidth
            type="number"
            label="Enter phone no."
            color="info"
            size="small"
            placeholder="Phone no."
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <TextField
            fullWidth
            type="email"
            label="Enter email"
            color="info"
            size="small"
            placeholder="Email id"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <FormControlLabel
            label="Save adrress"
            control={<Checkbox color="info" name="featured" />}
          />
        </Grid>
      </Grid>
      <Grid item xl={4} mb={4} mt={4}>
        <H3>Delivery Address</H3>
      </Grid>
      <Grid container spacing={3}>
        <Grid item sm={4} xs={12}>
          <TextField
            fullWidth
            type="text"
            label="Enter full name"
            color="info"
            size="small"
            placeholder="Enter Title"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <TextField
            fullWidth
            type="text"
            label="Enter delivery address"
            color="info"
            size="small"
            placeholder="Pickup address"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <TextField
            fullWidth
            type="text"
            label="Enter country"
            color="info"
            size="small"
            placeholder="Country"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <TextField
            fullWidth
            type="text"
            label="Enter state"
            color="info"
            size="small"
            placeholder="State"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <TextField
            fullWidth
            type="text"
            label="Enter city"
            color="info"
            size="small"
            placeholder="City"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <TextField
            fullWidth
            type="number"
            label="Enter pincode"
            color="info"
            size="small"
            placeholder="Pincode"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <TextField
            fullWidth
            type="number"
            label="Enter phone no."
            color="info"
            size="small"
            placeholder="Phone no."
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <TextField
            fullWidth
            type="email"
            label="Enter email"
            color="info"
            size="small"
            placeholder="Email id"
          />
        </Grid>
      </Grid>
      <Grid item xl={4} mb={4} mt={4}>
        <H3>Package Details</H3>
      </Grid>
      <Grid container spacing={3}>
        <Grid item sm={4} xs={12}>
          <TextField
            fullWidth
            type="text"
            label="Enter oder id"
            color="info"
            size="small"
            placeholder="Enter Title"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Enter description"
            style={{ width: 250, height: 37 }}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <TextField
            fullWidth
            type="number"
            label="Enter item count"
            color="info"
            size="small"
            placeholder="Enter item count"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <TextField
            fullWidth
            type="number"
            label="Weight"
            color="info"
            size="small"
            placeholder="gm"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
        <FormControl>
                 
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Prepaid"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="COD"
                    />
                    
                  </RadioGroup>
                </FormControl>
                </Grid>
                <Grid item sm={4} xs={12}>
          <TextField
            fullWidth
            type="text"
            label="Enter order invoice value"
            color="info"
            size="small"
            
          />
        </Grid>
      </Grid>
    </Wrapper>
  );
}
