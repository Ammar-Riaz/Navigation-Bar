import classNames from "classnames";
import useNavigation from "../hooks/use-Navigation";

function Link({ to, children, className, activeClassName }) {
  const { navigate, CurrentPath } = useNavigation();

  const classes = classNames(
    "text-blue-500",
    className,
    to === CurrentPath && activeClassName
  );

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
