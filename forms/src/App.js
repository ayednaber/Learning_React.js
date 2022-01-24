import React from "react";

export default function Form() {
  const [formData, setformData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true
  })

  console.log(formData)

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setformData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value 
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
          <textarea 
            onChange={handleChange}
            value={formData.comments}
            name="comments"
          />
          <input 
            type="checkbox"
            name="isFriendly"
            onChange={handleChange}
            checked={formData.isFriendly}
          />
          <label htmlFor="isFriendly">Are you friendly?</label>
          <br />
      </form>
  )
}