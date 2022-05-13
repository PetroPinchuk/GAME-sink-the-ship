import React from 'react';
import Battlefield from '../Battlefield/Battlefield';
import HeaderWithCounter from '../HeaderWithCounter';
import ResetButton from '../ResetButton';
import { useGameState } from '../state/useGameState';


const Game = () => {
  const {turn, reset, matrix, fire, won} = useGameState()

  const onFire = (y, x) => console.log(y, x);
  return (
    <div>
        {won && <h1> Вітаю! Ви втопили москву 😎💪</h1>}
        <HeaderWithCounter turn={turn} />
        <Battlefield matrix={matrix} onFire={fire}/>
        <ResetButton reset={reset}/>
    </div>
  )
}

export default Game