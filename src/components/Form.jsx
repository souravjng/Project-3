import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";



const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  about: Yup.string().required('About is required'),
  subject: Yup.string().required('Subject is required'),
  description: Yup.string().required('Description is required'),
  suggestion: Yup.string().required('Suggestion is required'),
});

const Formcom = () => {
  const theme=useSelector((state)=>state.themes.Themecolor);
  const BtnTheme=useSelector((state)=>state.themes.Buttoncolor);
  return (
    <Div1>
      <Divtop style={{ backgroundColor: theme[0].color }}>
        <h1 >Inform Us</h1>
      </Divtop>
      <Divbottom>
      <Formik initialValues={{title: '',about: '',subject: '',description: '',suggestion: '',image1: null,image2: null,}}
             validationSchema={validationSchema}
             onSubmit={(values) => {

              console.log('Data submit'+values);}}
>
      <Form>
        <Fielddiv><Fieldd type="text" name="title" id="title" placeholder="Title"/></Fielddiv>
        <Fielddiv><Fieldd type="text" name="about" id="about" placeholder="About"/></Fielddiv>
        <Fielddiv><Fieldd type="text" name="subject" id="subject" placeholder="Subject"/></Fielddiv>
        <Fielddiv><Fieldd type="text" name="description" id="description" placeholder="Description"/></Fielddiv>
        <Fielddiv><Fieldd type="text" name="suggestion" id="suggestion" placeholder="Suggestion"/></Fielddiv>

        <Fielddiv2 style={{borderTop: '1px solid #80808061' }}><Fieldd type="file" name="image1" id="image1" placeholder="Suggestion" style={{ border: 'none',marginTop:'20px'  }}/></Fielddiv2>
        <Fielddiv2 style={{ borderBottom: '1px solid #80808061'}}><Fieldd type="file" name="image2" id="image2" placeholder="Suggestion" style={{ border: 'none' }}/></Fielddiv2>

        <Buttondiv type="submit" bg={BtnTheme[0].color}    >Submit</Buttondiv>
      </Form>
    </Formik>
      </Divbottom>
    </Div1>
  );
};

const Div1=styled.div`
width: 415px;
height: 650px;
display: flex;
flex-direction: column;
overflow: hidden;
`;

const Divtop=styled.div`
width:100%;
text-align: center;
flex: 1;

h1{margin:15px 0px 0px 0px ;font-size:30px;color: white;}
`;

const Divbottom=styled.div`
width: 100%;
flex:9;
`;

const Fielddiv = styled.div`
width: 100%;
margin: 5px 0px 0px 0px;
height: 67px;`;

const Fieldd = styled(Field)`
font-family: "Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight:100;
border-radius:3px;
font-size: 17px;
border: 1px solid gray;
outline: none;
padding: 0px 5px 0px 5px ;
justify-content: center;
margin:auto;
display: flex;
width: 90%;
height: 50px;`;


const Buttondiv = styled.button`
font-family: "Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight:100;
border-radius:3px;
font-size: 21px;
outline: none;
cursor: pointer;
color:white;
border:none;
width: 100%;
background-color:${(props)=>props.bg};
margin: 5px 0px 0px 0px;
height: 60px;
&:active{background-color:${(props)=>props.bg};
         opacity:80%;}
`;

const Fielddiv2 = styled.div`
margin: 10px 0px 16px 0px;
width: 100%;
`;









export default Formcom;
