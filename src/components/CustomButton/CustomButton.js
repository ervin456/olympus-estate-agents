export function CustomButton({ children, ...props }) {
  return (
    <button className="customButton" {...props}>
      {children}
    </button>
  );
}
