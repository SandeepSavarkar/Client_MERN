import React from "react";

import { makeStyles } from "@mui/styles";
import { Box, Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addData } from "../../redux/action";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "450px",
    // background: "red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 5,
    gap: 25,
  },
}));

const MyForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = React.useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = ({ email, firstName, lastName }) => {
    let params = {
      email: values.email,
      first_name: values.firstName,
      last_name: values.lastName,
    };
    dispatch(addData(params));
    navigate("/");
  };

  return (
    <Box
      sx={{
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "inherit",
      }}
    >
      <h2 data-testid="title">Add User</h2>
      <Formik
        initialValues={{ name: "", firstName: "", lastName: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={classes.form}>
          <TextField
            id="email"
            name="email"
            label="Email"
            required
            onChange={handleChange}
          />
          <TextField
            id="firstName"
            name="firstName"
            label="FirstName"
            type="text"
            required
            onChange={handleChange}
          />
          <TextField
            id="lastName"
            name="lastName"
            label="LastName"
            type="text"
            required
            onChange={handleChange}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default MyForm;
