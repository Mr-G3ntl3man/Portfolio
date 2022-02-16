import style from '../../styles/Spinner.module.css'
import {ReactSVG} from "react-svg";

export const Spinner = () => {
   return (
      <div className={style.wrap}>
         <div className={style.spinner}>
            <ReactSVG src={'/images/spinner.svg'}/>
         </div>
      </div>
   )
}