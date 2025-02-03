import axios from "axios";

export const UploadVoterImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const token = localStorage.getItem("token");
    
    const config = {
      headers: {
        'x-access-token': token,
        'Content-Type': 'multipart/form-data'
      }
    };

    const res = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/api/v1/postvoterimage`, formData, config);
    console.log("Response from upload voter image :: ",res)
    
    if (res.data.message.message === "successful") { 
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error in upload voter image jsx :: ",error);
    return false;
  }
};