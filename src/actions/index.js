import axios from 'axios'
import cookies from 'universal-cookie'

const cookie = new cookies()

export const onLoginClick = (username,password) => {
    return (iniDispatch)=>{ 
        
        axios.get("http://localhost:1985/user", { 
            params: { 
                username:username,
                password:password
            }
        }).then(res => { 
            if (res.data.length > 0){ 
                const {id,username,password}=res.data[0]
                iniDispatch({
                    type: "BERHASIL_LOGIN",
                    payload: {id,username,password} 
                })
               
                cookie.set('masihLogin', username, {path:'/'})
                
            } else {
                iniDispatch({ 
                    type: "ERROR_LOGIN",
                    payload: 'Username & password salah'
                }) 
            
                setTimeout(() => {
                    iniDispatch({
                        type: 'NO_MESSAGE'
                    })
                }, 3000);  
            }
        }).catch(err => { 
            console.log("LogError: ", err.message);
        })
    }    
}



export const onRegClick = (user,pass) => {
    return iniDispatch =>{ 
        axios.get("http://localhost:1985/user", {
            params: { 
                username: user
            }
        }).then(res => {
            
            if (res.data.length === 0){
                axios.post("http://localhost:1985/user", { 
                    username: user, 
                    password: pass            
                }).then(res => { 
                    iniDispatch ({
                        type: 'AUTH_SUCCESS',
                        payload: 'Register Berhasil'
                    })
                })  
            } else {
                iniDispatch ({
                    type: 'AUTH_ERROR',
                    payload: 'Username ' + user + ' telah terisi. Silahkan pilih username yang berbeda'
                })
            }
            setTimeout(() => {
                iniDispatch({
                    type: 'NO_MESSAGE'
                })
            }, 3000);
        }).catch(err => { 
            console.log("RegError: ", err.message);
        })
    }    
}

export const onLogoutUser = () => {
    cookie.remove('masihLogin')
    return { 
        type: 'LOGOUT_USER'
    }
}

export const keepLogin = (user) => {
    return iniDispatch => {
        axios.get('http://localhost:1985/user', {
            params: {
                username: user
            }
        }) .then(res => {
            if(res.data.length > 0){
                iniDispatch({
                    type: 'BERHASIL_LOGIN',
                    payload: {username: user}
                })
            }
        }) .catch(err => { 
            console.log("Cookie Error: ", err.message);
        })
    }
}