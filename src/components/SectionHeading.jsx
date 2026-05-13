export function SectionHeading({ eyebrow, title, description, accent = 'cyan', className = '' }) {
  return (
    <div className={`section-heading ${className}`}>
      {eyebrow && <span className={`section-eyebrow ${accent !== 'cyan' ? accent : ''}`}>{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}
