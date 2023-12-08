import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Sell() {
  const initialValues = {
    title: "",
    brand: "",
    model: "",
    year: "",
    kilometer: "",
    price: "",
    saled: "",
    image: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    brand: Yup.string().required(),
    model: Yup.string().required(),
    year: Yup.string().min(3).max(5).required(),
    kilometer: Yup.string().required(),
    price: Yup.string().required(),
    saled: Yup.string().required(),
    image: Yup.string().required(),
  });

  let navigate = useNavigate();
  const onSubmit = (data) => {
    axios.post("http://localhost:3001/api/cars", data).then((response) => {
      navigate.push("/");
    });
  };

  return (
    <div className="m-12 border shadow-lg rounded-lg flex justify-center align-center">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="flex flex-col justify-center width-[500] height-auto p-[20px]">
          <label>Title: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            className="pl-2 py-1 border rounded-[6px] shadow-sm"
            id="inputCreatePost"
            name="title"
            placeholder="..."
          />
          <label>Brand: </label>
          <ErrorMessage name="brand" component="span" />
          <Field
            className="pl-2 py-1 border rounded-[6px] shadow-sm"
            id="inputCreatePost"
            name="brand"
            placeholder="..."
          />
          <label>Model: </label>
          <ErrorMessage name="model" component="span" />
          <Field
            className="pl-2 py-1 border rounded-[6px] shadow-sm"
            id="inputCreatePost"
            name="model"
            placeholder="..."
          />
          <label>Year: </label>
          <ErrorMessage name="year" component="span" />
          <Field
            className="pl-2 py-1 border rounded-[6px] shadow-sm"
            id="inputCreatePost"
            name="year"
            placeholder="..."
          />
          <label>Kilometer: </label>
          <ErrorMessage name="kilometer" component="span" />
          <Field
            className="pl-2 py-1 border rounded-[6px] shadow-sm"
            id="inputCreatePost"
            name="kilometer"
            placeholder="..."
          />
          <label>Price: </label>
          <ErrorMessage name="price" component="span" />
          <Field
            className="pl-2 py-1 border rounded-[6px] shadow-sm"
            id="inputCreatePost"
            name="price"
            placeholder="..."
          />
          <label>Saled: </label>
          <ErrorMessage name="saled" component="span" />
          <Field
            className="pl-2 py-1 border rounded-[6px] shadow-sm"
            id="inputCreatePost"
            name="saled"
            placeholder="..."
          />
          <label>Image: </label>
          <ErrorMessage name="image" component="span" />
          <Field
            className="pl-2 py-1 border rounded-[6px] shadow-sm"
            id="inputCreatePost"
            name="image"
            placeholder="..."
          />

          <button
            type="submit"
            className="border mt-2 shadow-sm rounded-lg hover:bg-gray-200 duration-500"
          >
            Create Post
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Sell;
