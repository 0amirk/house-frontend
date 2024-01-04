import axios from "axios";
import React, { useEffect } from "react";

const [_document, set_document] = React.useState(undefined)

React.useEffect(() => {
    set_document(document)
}, [])


export default axios.create({
  baseURL: "https://house-backend-393e.onrender.com", // Prod 
  headers:{
    'Authorization':'Bearer '+ _document.cookie.replace(/(?:(?:^|.;\s)Authorization\s=\s([^;]).$)|^.*$/, '$1')
  }
});
