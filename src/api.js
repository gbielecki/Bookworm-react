/* eslint linebreak-style: ["error", "windows"] */
import axios from 'axios';

export default {
    user: {
        login: credentials => axios.post('/api/auth', {credentials}).then(res => {
            console.log('response');
            console.log(res);
            return res.data.user
        }).catch(()=>{
            console.log('you') 
        })
        
    }
};