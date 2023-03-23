import { useCallback, useState } from "react";
import { Button, Checkbox, Box, FormControlLabel, Grid,styled,TextField } from "@mui/material";
import Link from "next/link";
import * as yup from "yup";
import { useFormik } from "formik";
import { FlexBox, FlexRowCenter } from "components/flex-box";
import { H1, H6 } from "components/Typography";
import BazaarImage from "components/BazaarImage";
import BazaarTextField from "components/BazaarTextField";
import { Wrapper } from "./Login";
import SocialButtons from "./SocialButtons";
import EyeToggleButton from "./EyeToggleButton";

const BootstrapButton = styled(Button)(({ theme }) => ({
  ':hover':{
    background:"#290148"
  },
    background:"#290148"
  
  }));
const Signup = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);
  const handleFormSubmit = async (values) => {
    console.log(values);
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: handleFormSubmit,
      validationSchema: formSchema,
    });
  return (
    <Wrapper sx={{margintop:"5%"}} elevation={3} passwordVisibility={passwordVisibility}>
      <form onSubmit={handleSubmit}>
        <BazaarImage
          src="/assets/images/circle.png"
          sx={{
            m: "auto",
          }}
        />

        <H1 textAlign="center" mt={1} mb={4} fontSize={16}>
          Create Your Account
        </H1>

        <BazaarTextField
          mb={1.5}
          fullWidth
          name="name"
          size="small"
          label="Business Name"
          variant="outlined"
          onBlur={handleBlur}
          value={values.name}
          onChange={handleChange}
          placeholder="Business Name"
          error={!!touched.name && !!errors.name}
          helperText={touched.name && errors.name}
        />
        <BazaarTextField
          mb={1.5}
          fullWidth
          name="gstin"
          size="small"
          label="GSTIN"
          variant="outlined"
          onBlur={handleBlur}
          value={values.gstin}
          onChange={handleChange}
          placeholder="GSTIN"
        />

        <BazaarTextField
          mb={1.5}
          fullWidth
          name="email"
          size="small"
          type="email"
          variant="outlined"
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
          label="Email"
          placeholder="exmple@mail.com"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />

        <BazaarTextField
          mb={1.5}
          fullWidth
          size="small"
          name="password"
          label="Password"
          variant="outlined"
          autoComplete="on"
          placeholder="*********"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          type={passwordVisibility ? "text" : "password"}
          error={!!touched.password && !!errors.password}
          helperText={touched.password && errors.password}
          InputProps={{
            endAdornment: (
              <EyeToggleButton
                show={passwordVisibility}
                click={togglePasswordVisibility}
              />
            ),
          }}
        />
        <BazaarTextField
          mb={1.5}
          fullWidth
          name="phone"
          size="small"
          type="number"
          label="Phone No"
          variant="outlined"
          onBlur={handleBlur}
          value={values.phone}
          onChange={handleChange}
          placeholder="Phone No"
          error={!!touched.name && !!errors.name}
          helperText={touched.name && errors.name}
        />
         <Grid item md={12} sx={{display:"flex",marginBottom:"15px"}}> 
      
            <TextField sx={{marginRight:"3%"}}
              mb={2.5}
              name="otp"
              size="small"
              type="number"
              variant="outlined"
              onBlur={handleBlur}
              value={values.otp}
              onChange={handleChange}
              placeholder="OTP"
              fullWidth
              />
        
          
            <BootstrapButton
              color="primary"
              variant="contained"
              sx={{
                height: 37,
                width:150,
              }}
             
            >
              Send OTP
            </BootstrapButton>
        
          </Grid>
    
      
        <BootstrapButton
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          sx={{
            height: 44,
          }}
        >
          Create Account
        </BootstrapButton>
      </form>

      <SocialButtons />
      <FlexRowCenter mt="1.25rem">
        <Box>Already have an account?</Box>
        <Link href="/login" passHref legacyBehavior>
          <a>
            <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
              Login
            </H6>
          </a>
        </Link>
      </FlexRowCenter>
    </Wrapper>
  );
};
const initialValues = {
  name: "",
  email: "",
  password: "",
  re_password: "",
  agreement: false,
};
const formSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  re_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please re-type password"),
  agreement: yup
    .bool()
    .test(
      "agreement",
      "You have to agree with our Terms and Conditions!",
      (value) => value === true
    )
    .required("You have to agree with our Terms and Conditions!"),
});
export default Signup;
