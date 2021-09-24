export function loggedIn() {
  return localStorage.getItem("isLoggedIn") == "true";
}

export function logIn() {
  localStorage.setItem("isLoggedIn", true);
}

export function logOut() {
  localStorage.removeItem("isLoggedIn")
  localStorage.removeItem("sserpxe_cigam")
}