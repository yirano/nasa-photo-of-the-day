import React from 'react'

//  ! THIS IS IMPORTANT
// ? What is this? 
// * This is what this does

/* -------------------------------------------------------------------------- */
/*                           This part renders this                           */
/* -------------------------------------------------------------------------- */

export default function Date(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="date">Date: </label>
      <input type="date" id="date" name="date" />
      <input type="submit" />
    </form>
  )
}