import useNavigation from "../hooks/use-Navigation";

function Route({ path, children }) {
  const { CurrentPath } = useNavigation();

  if (path === CurrentPath) {
    return children;
  }

  return null;
}

export default Route;
