import { useState } from "react";
import {
  Button,
  Box,
  Card,
  Grid,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  FormLabel,
  CardHeader,
  styled
} from "@mui/material";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Formik } from "formik";
import DropZone from "components/DropZone";
import { FlexBox } from "components/flex-box";
import BazaarImage from "components/BazaarImage";

import { UploadImageBox, StyledClear } from "../StyledComponents";
import { Label } from "@mui/icons-material";
import { margin } from "@mui/system";

// ================================================================

// ================================================================

const BootstrapButton = styled(Button)(({ theme }) => ({
  ':hover':{
    background:"#290148",
    color:"#fff"
  },
    background:"#290148",
  color:"#fff"
  }));

const ProductForm = (props) => {
  const { initialValues, validationSchema, handleFormSubmit } = props;
  const [files, setFiles] = useState([]);

  // HANDLE UPDATE NEW IMAGE VIA DROP ZONE
  const handleChangeDropZone = (files) => {
    files.forEach((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setFiles(files);
  };

  // HANDLE DELETE UPLOAD IMAGE
  const handleFileDelete = (file) => () => {
    setFiles((files) => files.filter((item) => item.name !== file.name));
  };
  return (
    <Card
      sx={{
        p: 6,
      }}
    >
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="name"
                  label="Product Name"
                  color="info"
                  size="medium"
                  placeholder="Product Name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  label="Alias"
                  color="info"
                  size="medium"
                  placeholder="Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  rows={6}
                  fullWidth
                  multiline
                  color="info"
                  size="medium"
                  onBlur={handleBlur}
                  name="description"
                  onChange={handleChange}
                  label="Product description"
                  value={values.description}
                  error={!!touched.description && !!errors.description}
                  helperText={touched.description && errors.description}
                />
              </Grid>
              <Grid item xs={12}>
                <DropZone onChange={(files) => handleChangeDropZone(files)} />

                <FlexBox flexDirection="row" mt={2} flexWrap="wrap" gap={1}>
                  {files.map((file, index) => {
                    return (
                      <UploadImageBox key={index}>
                        <BazaarImage src={file.preview} width="100%" />
                        <StyledClear onClick={handleFileDelete(file)} />
                      </UploadImageBox>
                    );
                  })}
                </FlexBox>
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="price"
                  color="info"
                  size="medium"
                  type="number"
                  label="Price"
                  placeholder="Price"
                  onBlur={handleBlur}
                  value={values.price}
                  onChange={handleChange}
                  error={!!touched.price && !!errors.price}
                  helperText={touched.price && errors.price}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  label="Maximum Retail Price(MRP)"
                  color="info"
                  size="medium"
                  placeholder="Maximum Retail Price(MRP)"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Inventory Management
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Don't track my inventory"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="Track my inventory"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  color="info"
                  size="medium"
                  onBlur={handleBlur}
                  value={values.hsn}
                  label="HSN/SAC"
                  onChange={handleChange}
                  placeholder=""
                />
                <Typography style={{ fontSize: "10px", marginLeft: "10px" }}>
                  HSN/SAC code is used for GST calculation and invoicing
                </Typography>
              </Grid>
              <Grid item sm={6} xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Tax</InputLabel>
                  <Select
                    fullWidth
                    id="outlined-select-currency"
                    select
                    label="Tax"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>No tax</MenuItem>
                    <MenuItem value={2}>Default</MenuItem>
                    <MenuItem value={3}>GST 18% (Exlcusive)</MenuItem>
                    <MenuItem value={4}>GST (Exlcusive)</MenuItem>
                  </Select>
                </FormControl>
                <Typography style={{ fontSize: "10px", marginLeft: "10px" }}>
                    Default Tax is GST (Inclusive)
                </Typography>
              </Grid>
              {/* <Grid item sm={6} xs={12}>
                <FormControl fullWidth>
                
                  <Select
                    fullWidth
                    id="outlined-select-currency"
                    select
                    label="Tax"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  >
                    
                  </Select>
                </FormControl>
                <Typography style={{ fontSize: "10px", marginLeft: "10px" }}>
                  Default Tax is GST (Inclusive)
                </Typography>
              </Grid> */}
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  color="info"
                  size="medium"
                  onBlur={handleBlur}
                  label="Package Weight"
                  onChange={handleChange}
                  placeholder="In KG"
                />
              </Grid>
              <Grid item sm={6}>
                <FormControlLabel
                  label="Publish"
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
              <Grid item sm={6}>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Location Availability Mode
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Cities"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="Pin codes"
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      label="All Over India"
                    />
                    <FormControlLabel
                      value="4"
                      control={<Radio />}
                      label="Seller Default"
                    />
                  </RadioGroup>
                </FormControl>
                <Typography style={{ fontSize: "10px", marginLeft: "3px" }}>
                  Specify where this product/service can be delivered
                </Typography>
              </Grid>

              <Grid item sm={12}>
                <Typography sx={{ marginBottom: "1%" }}>ONDC :</Typography>
                <Card>
                  <Grid item md={12} sx={{ display: "flex" }}>
                    <Typography sx={{ margin: "2%" }}>
                      Time to Deliver:
                    </Typography>

                    <FormControlLabel
                      label="Default"
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

                  <Grid item md={12} sx={{ display: "flex" }}>
                    <Typography sx={{ margin: "2%" }}>Returnable:</Typography>

                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        style={{ marginTop: "3%" }}
                      >
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="No"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label="Default"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item md={12} sx={{ display: "flex" }}>
                    <Typography sx={{ margin: "2%" }}>Returnable:</Typography>

                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        style={{ marginTop: "3%" }}
                      >
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="No"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label="Default"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  <Grid
                    item sm={6}
                    // xs={5}
                    // sx={{ marginLeft: "2%", marginBottom: "1%" }}
                  >
                    <TextField
                      fullWidth
                      label="Category ID"
                      color="info"
                      size="medium"
                      placeholder="Category ID"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </Grid>
                </Card>
              </Grid>

              <Grid item md={12} textAlign="end">
                <BootstrapButton
                  variant="contained"
                  type="submit"
                  
                >
                  Save product
                </BootstrapButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Card>
  );
};
export default ProductForm;
