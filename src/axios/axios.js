import axios from 'axios';


  const  baseURL= 'http://localhost:8080/api'
  class UserService{
    addUser(user){
        console.log(user)
        return axios.post(baseURL+'/user',user);
    }
   
}

