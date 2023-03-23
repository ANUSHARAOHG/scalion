import { Fragment } from "react";
import { CameraAlt } from "@mui/icons-material";
import { Avatar, Badge, Box, Button, Card, Grid, Typography,styled ,FormControlLabel,Checkbox} from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import * as yup from "yup";
import { Formik } from "formik";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import { H3 } from "components/Typography";
import countryList from "data/countryList";

const BootstrapButton = styled(Button)(({ theme }) => ({
  ':hover':{
    background:"#290148"
  },
    background:"#290148"
  
  }));

// upload button

const UploadButton = ({ id, style = {} }) => {
  return (
    <Fragment>
      <label htmlFor={id}>
        <Button
          size="small"
          component="span"
          color="secondary"
          sx={{
            p: "6px",
            height: "auto",
            borderRadius: "50%",
            bgcolor: "info.100",
            ...style,
            ":hover": {
              backgroundColor: "grey.300",
            },
          }}
        >
          <CameraAlt fontSize="small" color="info" />
        </Button>
      </label>

      <input
        id={id}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => console.log(e.target.files)}
        style={{
          display: "none",
        }}
      />
    </Fragment>
  );
};
const accountSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  city: yup.string().required("City is required"),
  country: yup.mixed().required("Country is required"),
  contact: yup.string().required("Contact is required"),
  email: yup.string().email("Invalid Email").required("Email is required")
});

// =============================================================================
AccountSetting.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

export default function AccountSetting() {
  const INITIAL_VALUES = {
    title: "",
    city: "",
    email: "",
    contact: "",
    country: null
  };
  const handleFormSubmit = async (values) => {
    console.log(values.city);
  };
  return (
    <Box py={4}>
      <H3 mb={2}>Store Locations</H3>

      <Card
        sx={{
          p: 4,
        }}
      >
        
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={INITIAL_VALUES}
          validationSchema={accountSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box mb={4}>
                <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      color="info"
                      size="medium"
                     
                      label="Geo Location"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      
                      // error={!!touched.location && !!errors.location}
                      // helperText={touched.location && errors.location}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      color="info"
                      size="medium"
                     
                      label="Title"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      
                      error={!!touched.title && !!errors.title}
                      helperText={touched.title && errors.title}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField fullWidth color="info" name="email" type="email" label="Email" size="medium" 
                    onBlur={handleBlur} value={values.email} onChange={handleChange} error={!!touched.email && !!errors.email} helperText={touched.email && errors.email} />
                  </Grid>
                

                  <Grid item md={6} xs={12}>
                    <TextField fullWidth type="tel" color="info" size="medium" name="contact" label="Phone" 
                    onBlur={handleBlur} value={values.contact} onChange={handleChange} error={!!touched.contact && !!errors.contact} helperText={touched.contact && errors.contact} />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      type="tel"
                      color="info"
                      size="medium"
                      
                      label="Address"
                      onBlur={handleBlur}
                      
                      onChange={handleChange}
                      // error={!!touched.address && !!errors.address}
                      // helperText={touched.address && errors.address}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <Autocomplete
                      fullWidth
                      disablePortal
                      options={countryList}
                      value={values.country}
                      getOptionLabel={(option) => option.label}
                      onChange={(_, value) => setFieldValue("country", value)}
                      renderInput={(params) => (
                        <TextField
                          color="info"
                          label="Country"
                          variant="outlined"
                          placeholder="Select Country"
                          error={!!touched.country && !!errors.country}
                          helperText={touched.country && errors.country}
                          {...params}
                          size="medium"
                        />
                      )}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      
                      label="State"
                      color="info"
                      size="medium"
                      onBlur={handleBlur}
                     
                      onChange={handleChange}
                      error={!!touched.state && !!errors.state}
                      helperText={touched.state && errors.state}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                  <TextField fullWidth name="city" label="City" color="info" size="medium" onBlur={handleBlur} 
                  value={values.city} onChange={handleChange} error={!!touched.city && !!errors.city} 
                  helperText={touched.city && errors.city} />
                
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      
                      label="Pincode"
                      color="info"
                      size="medium"
                      onBlur={handleBlur}
                     
                      onChange={handleChange}
                      // error={!!touched.pincode && !!errors.pincode}
                      // helperText={touched.pincode && errors.pincode}
                    />
                  </Grid>

                  <Grid item md={6}>
                <FormControlLabel
                  label="Show on website"
                  control={
                    <Checkbox
                      color="info"
                      name="featured"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.featured}
                    />
                  }
                />
              </Grid>

                  <Grid item md={6} xs={12}>
                    
                    <TextField
                      fullWidth
                     
                      label="Seller Address Id"
                      color="info"
                      size="medium"
                      onBlur={handleBlur}
                     
                      onChange={handleChange}
                      // error={!!touched.meta && !!errors.meta}
                      // helperText={touched.meta && errors.meta}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    
                    <TextField
                      fullWidth
                      
                      label="Sort Order"
                      color="info"
                      size="medium"
                      onBlur={handleBlur}
                     
                      onChange={handleChange}
                      
                      // error={!!touched.sort_order && !!errors.sort_order}
                      // helperText={touched.sort_order && errors.sort_order}
                    />
                  </Grid>
                </Grid>
              </Box>

              <Grid item md={12} textAlign="end">
                <BootstrapButton variant="contained" color="info" type="submit">
                  Save product
                </BootstrapButton>
              </Grid>
            </form>
          )}
        </Formik>
      </Card>
    </Box>
  );
}
