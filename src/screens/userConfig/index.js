const UserConfigScreen = () => {
    let name = JSON.parse(localStorage.getItem('user')).name;
    return (
        <h1>{name}</h1>
    );
}

export default UserConfigScreen;