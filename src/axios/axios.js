import axios from 'axios';


  const  baseURL= 'http://13.48.25.89:8080/api'
  class UserService{
    addUser(user){
        console.log(user)
        return axios.post(baseURL+'/user',user);
    }
   
}

