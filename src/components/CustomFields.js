import { useField } from "formik"
import React from "react"

export const CustomField = ({ ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <p style={{ color: "white", fontWeight: "lighter", fontSize: "12px" }}>
          {meta.error.toUpperCase()}
        </p>
      ) : null}
    </>
  )
}

export const CustomTextArea = ({ ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <textarea {...field} {...props} />
      {meta.touched && meta.error ? (
        <p style={{ color: "white", fontWeight: "lighter", fontSize: "12px" }}>
          {meta.error.toUpperCase()}
        </p>
      ) : null}
    </>
  )
}
