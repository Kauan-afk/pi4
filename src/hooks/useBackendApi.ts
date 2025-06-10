import axios from "axios";
const storageData = localStorage.getItem("authToken");
export const useBackendApi = () => ({
  register: async(username: string, email: string, password: string) =>{
    const response = await axios.post("http://localhost:3333/register", {username, email, password});
    return {
      register: response.data,
    };
  },

  login: async(username: string, password: string) =>{
    const response = await axios.post("http://localhost:3333/login", {username, password});
    console.log(response.data.username)
    return {
      username: response.data.username,
      token: response.data.token
    };
  },

  logout: async () => {
    return {
      status: true,
    };
  },

  getUserByToken: async() =>{
    const response = await axios.get("http://localhost:3333/userInfo",{
      headers: {
        Authorization: `${storageData}`,
      },
    })
    return {
      username: response.data,
      
    };
  },

  getAuctionBradesco: async () => {
    const response = await axios.get("http://localhost:3333/listPropertys",{
      headers: {
        Authorization: `${storageData}`,
      },
    })
    console.log(response.data)
    return {
      auction: response.data,
    };
  },

  listFolders: async () => {
    const response = await axios.get("http://localhost:3333/list_folders", {
      headers: {
        Authorization: `${storageData}`,
      },
    })
    console.log(response.data)
    return {
      folders: response.data,
    };
  },

  filter: async(min_value: number, max_value: number, city: null, area: null, date: null) =>{
    const response = await axios.post("http://localhost:3333/filter_bradesco", {min_value, max_value, city, area, date},{
      headers: {
        Authorization: `${storageData}`,
      },
    })
    console.log(response.data.username)
    return {
      auctions: response.data,
    };
  },

  create_folder: async(name: string) =>{
    const response = await axios.post("http://localhost:3333/create_folder", {name},{
      headers: {
        Authorization: `${storageData}`,
      },
    })
    return {
      folder: response.data,
    };
  },

  read_folder: async(folder_id: string) =>{
    const response = await axios.post("http://localhost:3333/read_folder", {folder_id},{
      headers: {
        Authorization: `${storageData}`,
      },
    })
    console.log(response.data)
    return {
      auctions: response.data,
    };
  },
  getAuction: async (property_id: string) => {
    const response = await axios.post("http://localhost:3333/pickProperty",{property_id}, {
      headers: {
        Authorization: `${storageData}`,
      },
    })
    return {
      auction: response.data,
    };
  },

  addAuction: async (folder_id: string, property_id: string) => {

    const response = await axios.post("http://localhost:3333/add_property_to_folder", {folder_id, property_id}, {
      headers: {
        Authorization: `${storageData}`,
      },
    })
    
    return {
      auction: response.data,
    };
  },

});