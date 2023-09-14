import axios from "./axiosInstance"

export const getAllAccount = async () => {
    return await axios.get('/server/getuser.php')
}
