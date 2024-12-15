import { cn } from '@/utils/helpers/h-styles'

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'outline'
  | 'destructive'
  | 'link'
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

/**
 * Button component that renders a styled button element.
 * @default variant: primary, size: md
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'px-4 py-2 font-semibold rounded'
  const variantStyles = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive:
      'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline:
      'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline'
  }
  const sizeStyles = {
    sm: 'h-9 rounded-md px-3 text-sm',
    md: 'h-10 rounded-md px-4',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10'
  }

  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
