import Api from'./api'


const UserService = {
    register: (params) => Api.post('user/register', params),
    login: async (params) => {
        const response = await Api.post('user/login', params);
        localStorage.setItem('user', JSON.stringify(response.data));
    },
    delete: (params) => Api.delete('user/delete', params),
    findOne: (username) => Api.post(`user/finder/${username}`),
    update: (id,params) => Api.put(`user/update/${id}`, params),
    deleteBio: (id) => Api.delete(`user/deletebio/${id}`),
    addFollower: (id) => Api.post(`user/follow/${id}`),
}

export default UserService; 