import React, { useState, useEffect } from 'react';
import { InputNumber, Icon } from 'antd';

function Example2() {
   const [age, setAge] = useState(0);

   const updateAge = value => {
      return setAge(value);
   };

   useEffect(() => {
      if (age !== 0 && age >= 21) {
         console.log('U can drink beer ...');
      } else {
         // throw Error("U can't drink beer ...");
         console.log('U cant drink beer ...');
      }
   }, [age]);

   return (
      <div>
         <p>Drinking age checker</p>
         <InputNumber
            type="number"
            defaultValue={age}
            min={0}
            max={100}
            value={age}
            onChange={updateAge}
         />
         <div>
            {age < 21 ? (
               <div>
                  <h2>
                     <Icon type="alert" />
                  </h2>
                  <p>You can't drink, beware!</p>
               </div>
            ) : (
               <div>
                  <h2>
                     <Icon type="check-circle" />
                  </h2>
                  <p>Congrats!, Now u cant drink beer ...</p>
               </div>
            )}
         </div>
      </div>
   );
}

export default Example2;
