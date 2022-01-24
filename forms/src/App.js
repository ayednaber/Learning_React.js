import React from "react";

export default function Form() {
  const [formData, setformData] = React.useState({
    firstName: "",
    lastName: "",
    email: ""
  })

  console.log(formData)

  function handleChange(event) {
    setformData(prevFormData => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }))
  }


  
  return (
      <form>
          <input
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              name="firstName"
              value={formData.firstName}
          />
          <input
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              name="lastName"
              value={formData.lastName}
          />
          <input
              type="text"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formData.email}
          />
      </form>
  )
}