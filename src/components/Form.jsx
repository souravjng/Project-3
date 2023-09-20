import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { motion } from "framer-motion";

const Formcom = () => {


  return (
    <Div1 animate={{
      x: 0,
      backgroundColor: "#000",
      boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
      position: "fixed",
      transitionEnd: {
        display: "none",
      },
    }}>
      <h1>sourav</h1>
    </Div1>
  );
};








const Div1=styled(motion.div)`
border:1px solid red;
width: 400px;
background-color:white;
height: 400px;
`;







export default Formcom;
