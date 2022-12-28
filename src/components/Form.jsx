import { useState } from "react";

import {Box,Button,TextField,useMediaQuery,Typography,useTheme,} from "@mui/material";

import { Formik } from "formik";
import * as yup from "yup";

import { useNavigate } from "react-router-dom"; 

import { useDispatch } from "react-redux";
import { setLogin } from "state";
import { setuserlogged } from "state";

//const URL = process.env.SERVER_URL;

import { URL } from 'App.js'

//yup validation schemas, field required in form

const registerSchema = yup.object().shape({

  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  address: yup.string().required("required"),
  

});

const loginSchema = yup.object().shape({

  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),

});

// set the intial values for the form
const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  address: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};



const Form = () => {

  const [pageType, setPageType] = useState("login");

  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isdesktop = useMediaQuery("(min-width:1300px)");

  const isLogin = (pageType === "login");
  const isRegister = (pageType === "register");




  const register = async (values, onSubmitProps) => 
  {
    
     const formData = new FormData();

    for (let value in values) { // loop through all values and add it to formdata
      formData.append(value, values[value]);
    }


    const savedUserResponse = await fetch( // post the data to backend
      `${URL}/shop/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    );

    const savedUser = await savedUserResponse.json(); // if we get response from server

    onSubmitProps.resetForm(); // this will reset formik data , onSubmitProps is a prop passed from formik

    if (savedUserResponse.status == 201) {
      setPageType("login");
      
    }
    if(savedUserResponse.status == 400)
    {
      alert(`Register Failed-${savedUser.msg}`)
    }

    

  };




  const login = async (values, onSubmitProps) => 
  {

    const loggedInResponse = await fetch(`${URL}/shop/login`, { // post the data to backend
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });


    const loggedIn = await loggedInResponse.json(); // if we get response from server, save it

    onSubmitProps.resetForm();// this will reset formik data , onSubmitProps is a prop passed from formik

    if (loggedInResponse.status == 200) {
      dispatch( setLogin({user: loggedIn.user, token: loggedIn.token,}));
      dispatch(setuserlogged());
      navigate("/");
    }

    if (loggedInResponse.status == 400) {

       alert("uername/password invalid")
    }

  };



  const handleFormSubmit = async (values, onSubmitProps) =>  // if they submit form call back for getting login and register actions
  { 
    if (isLogin) await login(values, onSubmitProps); // calling submit from login

    if (isRegister) await register(values, onSubmitProps);// calling submit from register
    
  };



  return (

    <Box backgroundColor="rgb(255,255,255,0.8)" sx={{border:1, borderRadius:"0.5rem"}}>

    <Formik 
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}>
      {({values,errors,touched,handleBlur,handleChange,handleSubmit,setFieldValue,resetForm,}) => (

        <form onSubmit={handleSubmit} >

          <Box
            m="2rem"
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isdesktop ? undefined : "span 4" },
            }}
            
          >

            {isRegister && (
              <>
                <TextField
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={
                    Boolean(touched.firstName) && Boolean(errors.firstName)
                  }
                  helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 2" }}
                />

                <TextField
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  sx={{ gridColumn: "span 2" }}
                />

                <TextField
                  label="Address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address}
                  name="address"
                  error={Boolean(touched.address) && Boolean(errors.address)}
                  helperText={touched.address && errors.address}
                  sx={{ gridColumn: "span 4" }}
                />

               

                
              </>
            )}


            <TextField
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 4" }}
            />

            <TextField
              label="Password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: "span 4" }}
            />

          </Box>

          {/* BUTTONS */}
          <Box>

            <Button
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: "rgb(25,150,100,0.8)",
                color: "white",

                "&:hover": { color: "rgb(25,150,100,0.8)" },
              }}
            >
              {isLogin ? "LOGIN" : "REGISTER"} 

            </Button>

            <Typography
              onClick={() => {
                setPageType(isLogin ? "register" : "login");
                resetForm();
              }}
              sx={{
                textDecoration: "underline",
                color: "rgb(25,150,100,0.8)",
                "&:hover": {
                  cursor: "pointer",
                  color: "white",
                },
              }}
            >

              {isLogin
                ? "Don't have an account? Sign Up here."
                : "Already have an account? Login here."}
            </Typography>

          </Box>

        </form>
      
      
      
      
      )}

    </Formik>

    </Box>
  );
};

export default Form;
