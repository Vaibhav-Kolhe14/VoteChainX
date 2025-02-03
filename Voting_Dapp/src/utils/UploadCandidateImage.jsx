import axios from 'axios'

export const UploadCandidateImage = async(file) => {
    try {
      const formData = new FormData()
      formData.append('file', file)
  
      const token = localStorage.getItem("token")
      const config = {
        headers: {
          "x-access-token":token,
          'Content-Type': 'multipart/form-data'
        }
      }
  
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/api/v1/postcandidateimage`, formData, config);

      console.log("Response upload candidate image :: ",res)
      if (res.data) {
        console.log("res.data :: ", res.data);
        console.log("res.data.data :: ", res.data.data);
        console.log("res.data.message :: ", res.data.message);
      } else {
        console.error("No data returned from the server");
      }
      
      
      if (res.data.message.message === "successful") { 
        return true;
      }
      console.log("Res from UploadCandidateImage.jsx :: ", res)
    } catch (error) {
      console.error("Error in upload candidate image :: ",error);
      return false;
    }
};

