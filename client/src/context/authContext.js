
import { useState,useEffect,createContext} from 'react';


import axios from 'axios'




export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user") || null));
    const [err,setError] = useState(false)
   

    const login = async (user) => {

        try {
             const res = await axios.post("http://localhost:8800/auth/login",user,{ withCredentials: true });
            setCurrentUser(res.data);
            
          } catch (err) {
            setError(err.response.data)
          }

    };

    const logout = async (user) => {
        const res = await axios.post("http://localhost:8800/auth/logout",{ withCredentials: true })
        setCurrentUser(null);
        };    

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    },[currentUser]);

    return<AuthContext.Provider value={{currentUser,login,logout}}>
        {children}
        </AuthContext.Provider>

}