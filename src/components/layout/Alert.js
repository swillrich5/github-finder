import React from 'react'

const Alert = ({ alert }) => {
  console.log("alert = " + alert);
  return (
    alert != null) && (
        <div className={`alert alert-${alert.type}`}>
            {console.log('alert = ' + alert.message)}
            {alert.message}
        </div>
    )
}

export default Alert;