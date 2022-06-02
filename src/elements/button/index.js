import cn from 'classnames'
import Style from './style.module.css'
const Button = ({children}) => {
  return <button className={cn(Style.button)}>
    {children}
  </button>
}

export default Button