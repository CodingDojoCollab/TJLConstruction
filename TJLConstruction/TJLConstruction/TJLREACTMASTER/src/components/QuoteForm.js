import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import "./QuoteForm.css";
import {Link} from "react-router-dom";

const QuoteForm = (props) => {
    return (
        <div className="body">
            <Formik
                values = {{name: "", email: "", phoneNumber: "", town: "", description: ""}}
                onSubmit = {({ setSubmitting }) => {
                    alert("Submitting the form");
                    setSubmitting(false);
                }}>
                {() => (
                    <Form className="formBody">
                        <div className ="formName">
                            <label htmlFor="name" className ="formLabelName">Name:</label>
                            <Field type="name" name = "name" className = "formInput"/>
                        </div>
                        <div className ="formEmail">
                            <label htmlFor="email" className ="formLabelEmail">Email:</label>
                            <Field type = "email" name ="email" className="formInput"/>
                        </div>
                        <div className ="formPhone">
                            <label htmlFor="phoneNumber" className="formLabelPhone">Phone Number:</label>
                            <Field type = "phoneNumber" name ="phoneNumber" className="formInput"/>
                        </div>
                        <div className ="formTown">
                            <label htmlFor="town" className="formLabelTown">Your Town:</label>
                            <Field type = "town" name ="town" className="formInput"/>
                        </div>
                        <div className ="formDescription">
                            <label htmlFor="description" className="formLabelDescription">Short description</label>
                            <Field type = "description" name ="description" className="formInput"/>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>

    );
}

export default QuoteForm;