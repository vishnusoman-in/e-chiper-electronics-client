import { useState, useEffect } from "react";

import {Box,Button,TextField,useMediaQuery,Typography,} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import {Formik} from "formik";
import * as yup from "yup";



import { useDispatch, useSelector } from "react-redux";

import { setLogin } from "state";
import { setProducts } from "state";
import {setadminlogged} from "state";
import Dropzone from "react-dropzone";

import { URL } from 'App.js'

//const URL = process.env.SERVER_URL;

//yup validation schemas, field required in form

const registerSchema = yup.object().shape({

  name: yup.string().required("required"),
  price: yup.string().required("required"),
  description: yup.string().required("required"),
  categoryname: yup.string().required("required"),
  picture: yup.string().required("required"),

});

const loginSchema = yup.object().shape({

  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),

});

// set the intial values for the form
const initialValuesRegister = {
  name: "",
  price: "",
  description: "",
  categoryname: "",
  picture:"",
  
};

const initialValuesLogin = {
  email: "",
  password: "",
};



const Adminform = () => {

  const [pageType, setPageType] = useState("login");

  
  const dispatch = useDispatch();
  const loggedasuser = useSelector((state) => state.userlogged);
  const loggedasadmin = useSelector((state) => state.adminlogged);
  
  const token = useSelector((state) => state.token);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const is500up = useMediaQuery("(min-width: 450px)");
  

  useEffect(() => {
    
    if(loggedasadmin){setPageType("upload")}

  },[]);

  const isLogin = (pageType === "login");
  const isUpload = (pageType === "upload");

  


  const uploader = async (values, onSubmitProps) => 
  {
    
    const formData = new FormData();// this allows us to send form info with image (js function )

    for (let value in values) { // loop through all values and add it to formdata
      formData.append(value, values[value]);
    }

    formData.append("picturePath", values.picture.name); // we need to add picture path in the end.
    
    console.log("uploader called")

    const uploaderResponse = await fetch( // post the data to backend
      `${URL}/products/uploads`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      }
    );

    const productdata = await uploaderResponse.json(); // if we get response from server

    onSubmitProps.resetForm(); // this will reset formik data , onSubmitProps is a prop passed from formik

    if (uploaderResponse.status == 200) {
      setPageType("upload");
      dispatch(setProducts({ products: productdata }));
    }
    if (uploaderResponse.status == 409) {
      
      //console.log("error getting response from product upload")
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

    if (loggedInResponse.status == 200 ) {

      if( loggedIn.user._id == "63a0628c3642ada32929de1d"){ // This id is reserved for admin only

      
      if(loggedasuser){alert("Please logout from user account first")} 
      else {
        dispatch( setLogin({user: loggedIn.user, token: loggedIn.token,}));
        dispatch(setadminlogged());
        setPageType("upload")
      }

      }else {alert("You are not an admin")}

    }
    if (loggedInResponse.status == 400){
        alert("login failed: invalid email/password")
    }
    if (loggedInResponse.status == 500){
        alert("server error, please try again later")
    }
  

  };



  const handleFormSubmit = async (values, onSubmitProps) =>  // if they submit form call back for getting login and register actions
  {
   
    if (isLogin) await login(values, onSubmitProps); // calling login

    if (isUpload) await uploader(values, onSubmitProps);// calling register
   

  };


  return (
    <Box sx={{backgroundColor:"rgb(255,255,255)", }}>
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}
    >
      
      { ({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
        isSubmitting,
        
      }) => 
         
        ( 
         
        <form onSubmit={handleSubmit}>
         
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              
            }}
          >

            {isUpload && (
              <Box sx={{ backgroundColor:"rgb(255,255,255,0.7)",width:"auto", border:1,borderColor:"green",borderRadius:"0.5rem",  width:(is500up ? 600: "auto"),}}>
                <TextField
                  label="Name of Product"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  name="name"
                  error={
                    Boolean(touched.name) && Boolean(errors.name)
                  }
                  helperText={touched.name && errors.name}
                  sx={{ gridColumn: "span 2",marginTop:"1rem", width:(is500up ? 600: "auto")  }}
                />

                <TextField
                  label="Price of Product"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.price}
                  name="price"
                  error={Boolean(touched.price) && Boolean(errors.price)}
                  helperText={touched.price && errors.price}
                  sx={{ gridColumn: "span 2",marginTop:"1rem", width:(is500up ? 600: "auto") }}
                />

                <TextField
                  label="Description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.description}
                  name="description"
                  error={Boolean(touched.description) && Boolean(errors.description)}
                  helperText={touched.description && errors.description}
                  sx={{ gridColumn: "span 4",marginTop:"1rem", width:(is500up ? 600: "auto") }}
                />

                <TextField
                  label="Category name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.categoryname}
                  name="categoryname"
                  error={
                    Boolean(touched.categoryname) && Boolean(errors.categoryname)
                  }
                  helperText={touched.categoryname && errors.categoryname}
                  sx={{ gridColumn: "span 4",marginTop:"1rem", width:(is500up ? 600: "auto") }}
                />

                <Box
                  gridColumn="span 4"
                  border={`1px solid `}
                  borderRadius="5px"
                  p="1rem"
                  sx={{ marginTop:"1rem", width:(is500up ? 566: "auto") }}
                >
                  <Dropzone
                    acceptedFiles=".jpg,.jpeg,.png"
                    multiple={false}
                    onDrop={(acceptedFiles) =>
                      setFieldValue("picture", acceptedFiles[0])
                    }
                  >
                    
                    {({ getRootProps, getInputProps }) => ( // getRootProps, getInputProps are buildin for dropzone

                      <Box
                        {...getRootProps()}
                        //border={`2px dashed ${palette.primary.main}`}
                        p="1rem"
                        sx={{ "&:hover": { cursor: "pointer" } }}
                      >
                        <input {...getInputProps()} />

                        {!values.picture ? (
                          <p>Upload product picture here</p>
                        ) : (
                          <Box style={{display: "flex",justifyContent: "space-between",alignItems: "center",}}> 
                            <Typography>{values.picture.name}</Typography>
                            <EditOutlinedIcon />
                          </Box>
                        )}

                      </Box>
                      
                    )}

                  </Dropzone>

                </Box>
              </Box>
            )}

          {isLogin && (

            <Box sx={{ backgroundColor:"rgb(255,255,255,0.7)",width:(is500up ? 320: "auto"), border:1,borderColor:"green",borderRadius:"0.5rem",marginLeft:"4rem",}} m="5rem" >

            <TextField
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 4", marginTop:"1rem", marginBottom:"1rem",marginRight:"1rem", width:(is500up ? 300: "auto") ,marginLeft:"0.5rem" }}
             
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
              sx={{ gridColumn: "span 4", marginTop:"1rem", marginBottom:"1rem",marginRight:"1rem", width:(is500up ? 300: "auto"),marginLeft:"0.5rem" }}
              
            />
            </Box>

            )}


          </Box>

          {/* BUTTONS */}
          <Box >

            <Button
              fullWidth
              
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: "rgb(25,150,100,0.8)",
                color: "white",

                "&:hover": { color: "red" },
                
              }}
              disabled={isSubmitting}
              
             
            >
              {isLogin ? "ADMIN LOGIN" : (isSubmitting ? "Please wait...uploading.." : "UPLOAD")}
              

             

            </Button>

          </Box>

        </form>
      
      
      
      
      )}

    </Formik>

    </Box>
  );
};

export default Adminform;


