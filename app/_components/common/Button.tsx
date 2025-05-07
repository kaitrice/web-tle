import Link from "next/link"

interface ButtonProps {
  label: string
  end: string
}

const Button: React.FC<ButtonProps> = ({ label, end }) => {
  return (
    <Link href={end} className="p-4 hover:underline hover:underline-offset-6">
      {label}
    </Link>
  )
}

export default Button
