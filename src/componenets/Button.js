import propTypes from "prop-types";
import ClassName from "classnames";
function Button({
  children,
  primary,
  secondry,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  const classes = ClassName("py-1.5 border px-3", {
    "bg-blue-400 border-blue-500 text-white": primary,
    "bg-gray-900 border-gray-900 text-white": secondry,
    "bg-green-500 border-green-500 text-white": success,
    "bg-yellow-400 border-yellow-400 text-white": warning,
    "bg-red-500 border-red-500 text-white": danger,
    "rounded-full": rounded,
    "bg-white": outline,
    "text-blue-400": outline && primary,
    "text-gray-900": outline && secondry,
    "text-green-500": outline && success,
    "text-yellow-400": outline && warning,
    "text-red-600": outline && danger,
  });

  return <button className={classes}>{children}</button>;
}

Button.propTypes = {
  checkVariationValue: (primary, secondry, success, warning, danger) => {
    const count =
      Number(!!primary) +
      Number(!!secondry) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "only primary ,secondry,success,warningand danger can be true"
      );
    }
  },
};

export default Button;
