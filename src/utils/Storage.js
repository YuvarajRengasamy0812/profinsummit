import CryptoJS from "crypto-js";


export const saveToken =  (data) => {
  localStorage.setItem("token", data?.token); 
  localStorage.setItem('userId', CryptoJS.AES.encrypt((data?._id),'pixalive').toString())
  localStorage.setItem('category', CryptoJS.AES.encrypt(JSON.stringify(data?.category),'pixalive').toString())
};


export const getToken = () => {
  return localStorage.getItem("token");
};

export const getUserId = () => {
  const userId =  localStorage.getItem('userId')
  return CryptoJS.AES.decrypt(userId,'pixalive').toString(CryptoJS.enc.Utf8)
};

export const saveCategory =  (data) => {
  localStorage.setItem('category', CryptoJS.AES.encrypt(JSON.stringify(data),'pixalive').toString())
};


export const getCategory = () => {
  const category =  localStorage.getItem('category')
  return JSON.parse(CryptoJS.AES.decrypt(category,'pixalive').toString(CryptoJS.enc.Utf8))
};


export const clearStorage = () => {
   localStorage.clear()
};
