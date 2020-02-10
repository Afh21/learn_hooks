import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'antd';
import stepperContext from '../store';

const ViewDelivery = () => {
   const { stepActual, handleNexStep, handlePrevStep } = useContext(
      stepperContext
   );

   return (
      <>
         <h4>** Delivery Form **</h4>

         <div>
            <Button disabled={stepActual <= 1} onClick={handlePrevStep}>
               <Icon type="left" />
               Prev
            </Button>
            <Button onClick={handleNexStep}>
               <Icon type="right" />
               Next
            </Button>
         </div>
      </>
   );
};

export default connect()(ViewDelivery);
