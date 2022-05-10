import Api from'./api'


const UserService = {
    register: (params) => Api.post('user/register', params),
    login: async (params) => {
        const response = await Api.post('user/login', params);
        localStorage.setItem('user', JSON.stringify(response.data));
    },
    delete: (params) => Api.delete('user/delete', params),
    findOne: (params) => Api.post(`user/finder/${params}`),
    update: (id,params) => Api.put(`user/update/${id}`, params),
}

export default UserService; 