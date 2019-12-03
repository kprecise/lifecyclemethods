import React from 'react'
import { Alert } from 'reactstrap'

const Loading = ({ message }) => {
  return (
    <Alert color="primary">{message}</Alert>
  )
}

export default Loading
