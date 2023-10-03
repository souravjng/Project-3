import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setSubmissionNotification } from '../store/NotificationSlice';
import Bttn from './Bttn';
import { useAuth0 } from "@auth0/auth0-react";

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  about: Yup.string().required('About is required'),
  subject: Yup.string().required('Subject is required'),
  description: Yup.string().required('Description is required'),
});

const Formcom = () => {
  const [imageURL1, setImageURL1] = useState(null);
  const [imageURL2, setImageURL2] = useState(null);
  const { isAuthenticated,loginWithRedirect,user } = useAuth0();
  const dispatch = useDispatch();
  const [newvalue, updatevalue] = useState('');
  const { longitude, latitude } = useSelector((state) => state.Location.Markers);
  const coordinates = `${longitude} ${latitude}`;
  useEffect(() => {updatevalue(coordinates === " " ? 'Click to choose Location' : coordinates);}, [coordinates]);
  
  const theme = useSelector((state) => state.themes.Themecolor);

  const handleImageUpload = (e, setFieldValue, setImageURL) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageURL(event.target.result);
        setFieldValue('image', event.target.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const postman = (values) => {
    // event.preventDefault();
    if(isAuthenticated){
    const currentDate = new Date().toLocaleDateString();
    const updatevalue={...values,date:currentDate,email:user.email,username:user.name,coordinates:newvalue,image1: imageURL1, image2: imageURL2,};
    dispatch(setSubmissionNotification(updatevalue));
    alert('submited');
  } else{loginWithRedirect();}
  };


 

  return (
    <Div1>
      <Divtop style={{ backgroundColor: theme[0].color }}>
        <h1>Inform Us</h1>
      </Divtop>
      <Divbottom>
        <Formik
          initialValues={{ title: '', about: '', subject: '', description: '', coordinates: '', image1: null, image2: null,}}
          validationSchema={validationSchema}
          onSubmit={(values) => {postman(values);}}>

          {({ setFieldValue }) => (
          <Form>
            <Fielddiv>
              <Fieldd autoComplete="off" type="text" name="title" id="title" placeholder="Title" />
              <ErrrorMessage name="title" component="div" className="error" />
            </Fielddiv>
            <Fielddiv>
              <Fieldd autoComplete="off" type="text" name="subject" id="subject" placeholder="Subject" />
              <ErrrorMessage name="subject" component="div" className="error" />
            </Fielddiv>
            <Fielddiv>
              <Fieldd autoComplete="off" type="text" name="about" id="about" placeholder="About" />
              <ErrrorMessage name="about" component="div" className="error" />
            </Fielddiv>
            <Fielddiv>
              <Fieldd autoComplete="off" type="text" name="description" id="description" placeholder="Description" />
              <ErrrorMessage name="description" component="div" className="error" />
            </Fielddiv>
            <Fielddiv>
              <Fieldd autoComplete="off" type="text" name="coordinates" id="coordinates" value={newvalue}   />
            </Fielddiv>

            <Fielddiv2>
            <input type="file" id='image1' accept="image/*" onChange={(e) =>{handleImageUpload(e, setFieldValue, setImageURL1);document.getElementById('labelimg1').textContent = 'Selected image 1'}}/>
            <label  id='labelimg1' for='image1'>Upload image 1</label>

            <input type="file" id='image2' accept="image/*" onChange={(e) => {handleImageUpload(e, setFieldValue, setImageURL2);document.getElementById('labelimg2').textContent = 'Selected image 2'}}/>
            <label  id='labelimg2' for='image2'>Upload image 2</label>
            </Fielddiv2>
            {isAuthenticated?<Bttn text={'Submit'} type="submit" width={'100%'} height={'60px'} font={'21px'} />:<div onClick={()=>loginWithRedirect()}><Bttn text={'Login'} type='button'  width={'100%'} height={'60px'} font={'21px'} /></div>}
              
          </Form>)}
        </Formik>
      </Divbottom>
    </Div1>
  );
};

const Div1 = styled.div`
  position: absolute;
  right: 0;
  border-left: 1px solid #80808061;
  width: 415px;
  height: 650px;
  display: flex;
  flex-direction: column;
  background: white;
  overflow: hidden;
  @media only screen and (max-width: 768px) { display: none; }
`;

const Divtop = styled.div`
  width: 100%;
  text-align: center;
  flex: 1;
  font-size: 28px;
  h1 { margin: 17px 0px 0px 0px; font-size: 28px; color: white; }
`;

const Divbottom = styled.div`
  width: 100%;
  flex: 9;
`;

const Fielddiv = styled.div`
  width: 100%;
  margin: 5px 0px 0px 0px;
  height: 67px;
`;

const Fieldd = styled(Field)`
  font-family: "Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 100;
  border-radius: 3px;
  font-size: 17px;
  border: 1px solid gray;
  outline: none;
  padding: 0px 5px 0px 5px;
  justify-content: center;
  margin: auto;
  display: flex;
  width: 90%;
  height: 50px;
`;

const Fielddiv2 = styled.div`
  margin: 6px 0px 16px 0px;
  height: 140px;
  width: 100%;
  overflow: hidden;
  color:white;
  position: relative;
  text-align: center;
  font-family: "Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 100;
input{display:none;}
#labelimg1{
position: absolute;
padding: 15px 10px 5px 10px;
width:40%;
border-radius:4px;
left:17px;
cursor:pointer;
top: 16px;
background:#1e88e5;
height:30px;}

#labelimg2{
position: absolute;
padding: 15px 10px 5px 10px;
width:40%;
border-radius:4px;
left:17px;
cursor:pointer;
bottom: 7px;
background:#1e88e5;
height:30px;}
`;

const ErrrorMessage = styled(ErrorMessage)`
  margin: 0px 0px 0px 18px;
  font-family: "Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 100;
  color: red;
  font-size: 12px;
`;

export default Formcom;
