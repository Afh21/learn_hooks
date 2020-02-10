import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'antd';
import stepperContext from '../store';

const ViewAdditional = () => {
   const { stepActual, handleNexStep, handlePrevStep } = useContext(
      stepperContext
   );

   return (
      <>
         <h4>** Additional Form **</h4>

         <div>
            <Button disabled={stepActual <= 1} onClick={handlePrevStep}>
               <Icon type="left" />
               Prev
            </Button>
            <Button disabled={stepActual >= 3} onClick={handleNexStep}>
               <Icon type="right" />
               Next
            </Button>
         </div>
      </>
   );
};

export default connect()(ViewAdditional);
