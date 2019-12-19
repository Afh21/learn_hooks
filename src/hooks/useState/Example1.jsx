import React, { useState } from 'react';
import { Button } from 'antd';

function Example1() {
   const [counter, setCounter] = useState(0);

   return (
      <div>
         <h3>{`Increment in ...${counter}`}</h3>

         <Button type="primary" onClick={() => setCounter(counter + 1)}>
            Increment +1
         </Button>
         <Button onClick={() => setCounter(0)}>Reset</Button>
         <Button
            type="danger"
            onClick={() => setCounter(counter - 1 < 0 ? 0 : counter - 1)}
         >
            Decrement -1
         </Button>
      </div>
   );
}

export default Example1;
