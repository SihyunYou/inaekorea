import "./PrimaryButton.css";

export default function PrimaryButton({ 
  children, 
  inverse = false, 
  onClick, 
  disabled,
  href,
  target = "_self",
  rel,
  tag: Tag = "p" // New prop for custom tag, defaults to 'p'
}) {
  const ButtonContent = (
    <button
      className={inverse ? "primary-button inverse" : "primary-button default"}
      onClick={onClick}
      disabled={disabled}
    >
      <Tag>{children}</Tag>
    </button>
  );

  const Wrapper = ({ children }) => (
    <div className="d-flex flex-column align-items-center justify-content-end gap-2">
      {children}
    </div>
  );

  if (href) {
    return (
      <Wrapper>
        <a
          href={href}
          target={target}
          rel={rel}
        >
          {ButtonContent}
        </a>
      </Wrapper>
    );
  }

  return <Wrapper>{ButtonContent}</Wrapper>;
}