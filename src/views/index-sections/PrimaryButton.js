import "./PrimaryButton.css";

export default function Button({ children, inverse=false, onClick, disabled }) {
  return (
    <button
      className= {inverse ? "primary-button inverse" : "primary-button default"}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
