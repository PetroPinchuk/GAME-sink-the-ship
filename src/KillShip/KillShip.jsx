import React from 'react'
import { useState } from 'react'
import styles from '../KillShip/KillShip.module.css'
import Game from './Game/Game.jsx'


const TXT = 'Потрібно потопити корабель МОСКВА!'
const useMagic = () => {
  const [state, setText] = useState({
    n: 1,
    text: TXT,
  });

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      const dots = new Array(state.n).fill('🔥').join('')
      const n = state.n > 2 ? 1 : state.n + 1
      setText({n, text:`${TXT}${dots}`})
    }, 1000)
    return () => clearTimeout(timeoutId)
  }, [state])
  
  return state.text 
}

const KillShip = () => {
  const text = useMagic()
  return (
    <div className={styles.killShip}>
        {text}
        <Game />
    </div>
  )
}

export default KillShip