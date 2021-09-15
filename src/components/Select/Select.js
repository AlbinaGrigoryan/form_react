import React, {useState} from 'react';
import style from './select.module.css';
import { FaChevronDown } from "react-icons/fa";
const Select = ({selectValue, selectItems, selectHandler}) => {
    const [isActive, setIsActive] = useState(false);
    document.addEventListener('click', () => setIsActive(false));

    const classes = [style.select_wrapper];
    if (isActive){classes.push(style.active_select)}

    return (
      <div className={classes.join(' ')}
         onClick={(e) => {setIsActive(!isActive); e.stopPropagation()}}>
        <p>
            {selectValue || 'Язык'}
        </p>
        <span>
           <FaChevronDown/>
        </span>
        {isActive ? <ul className={style.select_items_wrapper} >
                    {selectItems.map((item, index) => {
                        return <li key={index}
                                   onClick={(e) => selectHandler(e)}>
                                 {item}
                               </li>
                    }
                        )}
                     </ul>
                    : null}
      </div>
    );
};

export default Select;