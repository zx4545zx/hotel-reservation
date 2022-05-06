const findRouterAdmin = (route, role) => {
  if (route.search(role) < 0) {
    return false;
  }
  return true;
};

export default findRouterAdmin;
