import cn from 'classnames'
import Style from './style.module.css'
const Checkbox = () => {
  return <div className={cn(Style.container)}>
    <input className={Style.checkbox} type="checkbox"/>
    <div className={Style.customCheckbox}></div>
  </div>
}
export default Checkbox