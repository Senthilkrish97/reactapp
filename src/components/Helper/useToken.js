export const getToken = () => {
  const tokenString = localStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken;
};

export const saveToken = (userToken) => {
  localStorage.setItem("token", JSON.stringify(userToken.token));
  window.location.reload();
};

export const removeToken = () => {
  localStorage.removeItem("token");
  window.location.reload();
};
