interface CardProps {
  title: string
  subtitle: string
}

const Card = ({ title, subtitle }: CardProps) => {
  return (
    <div className="card">
      {/* Title using body token */}
      <p className="card-content">
        {title}
      </p>

      {/* H4 token below */}
      <h4 className="card-title">
        {subtitle}
      </h4>
    </div>
  )
}

export default Card