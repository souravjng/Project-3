import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setSubmissionNotification } from '../store/NotificationSlice';
import Bttn from './Bttn';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  about: Yup.string().required('About is required'),
  subject: Yup.string().required('Subject is required'),
  description: Yup.string().required('Description is required'),
  image1: Yup.mixed().required('Images are required'),
  image2: Yup.mixed().required('Image 2 is required'),
});

const Formcom = () => {
  const dispatch = useDispatch();
  const [newvalue, updatevalue] = useState('');
  const { longitude, latitude } = useSelector((state) => state.Location.Markers);
  const coordinates = `${longitude} ${latitude}`;
  useEffect(() => {
    updatevalue(coordinates === "" ? 'Click to choose Location' : coordinates);
  }, [coordinates]);
  const theme = useSelector((state) => state.themes.Themecolor);

  const postman = (values, { resetForm }) => {
    dispatch(setSubmissionNotification(values));
    resetForm();
  };

  return (
    <Div1>
      <Divtop style={{ backgroundColor: theme[0].color }}>
        <h1>Inform Us</h1>
      </Divtop>
      <Divbottom>
        <Formik
          initialValues={{ title: '', about: '', subject: '', description: '', suggestion: '', image1: null, image2: null,}}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {postman(values, { resetForm });}}>
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
              <Fieldd autoComplete="off" type="text" name="coordinates" id="coordinates" value={newvalue} />
            </Fielddiv>

            <Fielddiv2 style={{ borderTop: '1px solid #80808061' }}>
              <Fieldd type="file" name="image1" id="image1" placeholder="Image 1" style={{ border: 'none', marginTop: '20px' }} />
              <ErrrorMessage name="image1" component="div" className="error" />
            </Fielddiv2>
            <Fielddiv2 style={{ borderBottom: '1px solid #80808061' }}>
              <Fieldd type="file" name="image2" id="image2" placeholder="Image 2" style={{ border: 'none' }} />
            </Fielddiv2>

            <div>
              <Bttn text={'Submit'} type="submit" width={'100%'} height={'60px'} font={'21px'} />
            </div>
          </Form>
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
  width: 100%;
`;

const ErrrorMessage = styled(ErrorMessage)`
  margin: 0px 0px 0px 18px;
  font-family: "Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 100;
  color: red;
  font-size: 12px;
`;

export default Formcom;
