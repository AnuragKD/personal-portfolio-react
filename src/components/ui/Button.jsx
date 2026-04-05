export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-normal text-sm rounded-full border-1 border-gray-300 transition-all duration-200 cursor-pointer";

  const variants = {
    primary: "bg-white text-gray-700 hover:text-white hover:bg-black ",
    secondary: "bg-primary-color text-white hover:bg-white hover:text-black",
    outline: "border border-gray-400 text-black hover:bg-gray-100",
    ghost: "bg-transparent hover:bg-gray-200",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-8 py-3",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
