import React from "react";

export default function Form() {
  const [name, setName] = React.useState({
    firstName: "",
    lastName: ""
  })

  console.log(name)

  function handleFirstNameChange(event) {
    setName(prevName => ({...prevName, firstName: event.target.value}))
  }

  function handleLastNameChange(event) {
    setName(prevName => ({...prevName, lastName: event.target.value}))
  }


  
  return (
      <form>
          <input
              type="text"
              placeholder="First Name"
              onChange={handleFirstNameChange}
          />
          <input
              type="text"
              placeholder="Last Name"
              onChange={handleLastNameChange}
          />
      </form>
  )
}