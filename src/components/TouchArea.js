import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { CustomField, CustomTextArea } from "./CustomFields"

const TouchArea = () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const FILE_SIZE = 20000000

  return (
    <>
      <div className="touch-area" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="touch-wrap">
                <div className="touch-title">
                  <h5>BE IN</h5>
                  <h2>TOUCH</h2>
                  <p>Please fill your contact details below:</p>
                </div>
                <div className="touch-contact-wrap">
                  <Formik
                    initialValues={{
                      name: "",
                      number: "",
                      email: "",
                      message: "",
                      file: "",
                    }}
                    validationSchema={Yup.object({
                      name: Yup.string()
                        .min(2, "name is too sort")
                        .max(30, "must be 15 character or less")
                        .required("enter you your full name"),
                      number: Yup.string()
                        .max(10, "mobile number should be 10 digit")
                        .matches(phoneRegExp, "Phone number is not valid")
                        .required("phone number is required"),
                      email: Yup.string()
                        .email("invalid email")
                        .required("email is required"),
                      message: Yup.string()
                        .min(10, "message need to be more than 10 characters")
                        .required("this field is required"),
                      file: Yup.mixed().optional(),
                    })}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                      axios
                        .post(
                          "https://mailthis.to/jay.basco@alternativehg.com",
                          values
                        )
                        .then(res => {
                          console.log(res)

                          setSubmitting(true)
                          alert("Your Message Submitted Successfully")
                          resetForm()
                        })
                        .catch(err => {
                          console.log(err, err.message)
                          alert("some error occured")
                          resetForm()
                          setSubmitting(false)
                        })
                    }}
                  >
                    {() => (
                      <Form>
                        <div className="single-input">
                          <CustomField
                            type="text"
                            placeholder="Your Name"
                            name="name"
                          />
                        </div>
                        <div className="single-input-fx">
                          <div className="single-input sing-wd">
                            <CustomField
                              type="text"
                              placeholder="Mobile number"
                              name="number"
                            />
                          </div>
                          <div className="single-input sing-wd">
                            <CustomField
                              type="email"
                              placeholder="Your Email"
                              name="email"
                            />
                          </div>
                        </div>
                        <div className="single-textarea">
                          <CustomTextArea
                            name="message"
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Enter Your Message"
                          />
                        </div>
                        <div className="single-input">
                          <CustomField
                            className="p-1"
                            type="file"
                            placeholder="Attachments"
                            name="file"
                          />
                        </div>
                        <div className="send-btn">
                          <button type="submit">Send</button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TouchArea
