
 export const getToken = () => {
    debugger;
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

export const saveToken = userToken => {
    debugger;
    localStorage.setItem('token', JSON.stringify(userToken.token));
    window.location.reload();
  };

  export const removeToken = ()=>{
    debugger;
    localStorage.removeItem('token');
    window.location.reload();
}