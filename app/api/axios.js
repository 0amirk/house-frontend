import axios from "axios";

export default axios.create({
  baseURL: "https://house-backend-393e.onrender.com", // Prod 
  headers:{
    'Authorization':'Bearer '+ document.cookie.replace(/(?:(?:^|.;\s)Authorization\s=\s([^;]).$)|^.*$/, '$1')
  }
});
