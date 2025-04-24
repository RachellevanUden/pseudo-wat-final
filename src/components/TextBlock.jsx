import '../styles/TextBlock.css'

function TextBlock({ title, children, icon, cta }) {
  return (
    <section className="text-block">
      <h3>{title}</h3>
      <div className="text-block-content">
        {children}
      </div>
      {icon && <div className="text-block-icon">{icon}</div>}
      {cta && <div className="text-block-cta">{cta}</div>}
    </section>
  );
}

export default TextBlock;
  