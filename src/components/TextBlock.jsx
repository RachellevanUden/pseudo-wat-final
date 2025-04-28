import '../styles/TextBlock.css'

function TextBlock({ title, subtitle, children, icon, cta, sideBySide = false, className = "" }) {
  return (
    <section className={`text-block${sideBySide ? ' side-by-side' : ''}${className ? ' ' + className : ''}`}>
      {sideBySide && icon && (
        <div className="text-block-icon side">{icon}</div>
      )}
      <div className="text-block-content">
        <h3>{title}</h3>
        {subtitle && <h4>{subtitle}</h4>}
        {children}
        {!sideBySide && icon && <div className="text-block-icon">{icon}</div>}
        {cta && <div className="text-block-cta">{cta}</div>}
      </div>
    </section>
  )
}

export default TextBlock
