import axios from 'axios';

export const getAllProfiles = async () => {

    try {
        let res = await axios.get("http://localhost:3300/api/profiles")
        return res.data;
    } catch ( err ) {
        throw err;
    }
    
};

export const getProfile = async ({id}: {id: string}) => {
    try {
        let res = await axios.get(`http://localhost:3300/api/profiles/${id}`);
        return res.data;
    } catch ( err ) {
        throw err;
    }
}

export const renewProfiles = async () => {
    try {
        let res = await axios.get("http://localhost:3300/api/profiles/renew")
        return res.data;
    } catch ( err ) {
        throw err;
    } 
}

export const deleteProfile = async (id: string) => {

    try {
        let res = await axios.delete(`http://localhost:3300/api/profiles/${id}`)
        return res.data;
    } catch ( err ) {
        throw err;
    }

}