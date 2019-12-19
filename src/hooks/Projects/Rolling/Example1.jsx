import React, { useState } from 'react';
import { Button } from 'antd';

const style = {
   width: '50px',
   height: '50px',
   margin: '10px'
};

function Example1() {
   const [firstValue, setFirstDiceResult] = useState(1);
   const [secondValue, setSecondDiceResult] = useState(1);

   const rollDice = () => {
      setFirstDiceResult(Math.floor(Math.random() * 6) + 1);
      setSecondDiceResult(Math.floor(Math.random() * 6) + 1);
   };

   return (
      <>
         <div style={{ display: 'flex', justifyContent: 'center', margin: 20 }}>
            <img
               src={`./assets/${firstValue}.png`}
               style={style}
               alt="Die one"
            />
            <img
               src={`./assets/${secondValue}.png`}
               style={style}
               alt="Die two"
            />
         </div>
         <h2>{firstValue + secondValue}</h2>
         <Button type="primary" onClick={rollDice}>
            Rolling{' '}
         </Button>
      </>
   );
}

export default Example1;
