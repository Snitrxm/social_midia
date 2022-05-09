import Api from'./api'


const UserService = {
    register: (params) => Api.post('user/register', params),
    login: async (params) => {
        const response = await Api.post('user/login', params);
        localStorage.setItem('user', JSON.stringify(response.data));
    }
}

export default UserService; 