import axios from "axios";

const [_document, set_document] = React.useState(null)

React.useEffect(() => {
    set_document(document)
}, [])


export default axios.create({
  baseURL: "https://house-backend-393e.onrender.com", // Prod 
  headers:{
    'Authorization':'Bearer '+ _document.cookie.replace(/(?:(?:^|.;\s)Authorization\s=\s([^;]).$)|^.*$/, '$1')
  }
});
