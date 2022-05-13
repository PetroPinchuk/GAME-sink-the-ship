import React from 'react'
import { CHECKED_SHIP, CHECKED_WATER, SHIP, WATER } from '../state/cellstate'
import styles from './Battlefield.module.css'

const cellStateMap = {
    [WATER]: '',
    [SHIP]: '',
    [CHECKED_WATER]: '🌊',
    [CHECKED_SHIP]: '🔥'
}

const Cell = ({handleClick, value, y, x}) => {
    // console.log('render');
    return (
        <button className={styles.cell} onClick={() => handleClick(y, x)}>
            {cellStateMap[value]}
        </button>
    )
}


const Battlefield = ({matrix, onFire}) => {
    return (
        <div className={styles.battlefield}>
            {matrix.map((line, lineNumber) => (
                <div className={styles.field} key={lineNumber}>
                    {line.map((v, i) => (
                        <Cell 
                          key={`${lineNumber}${i}`} 
                          value={v} 
                          y={lineNumber} 
                          x={i}
                          handleClick={onFire}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Battlefield