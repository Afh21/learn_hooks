import React, { useState, useCallback } from 'react';

import { Provider } from 'react-redux';
import storeIndex from './redux/store';

import { Steps, Icon, Row, Col } from 'antd';

import ViewAdditional from './form/ViewAdditional';
import ViewItems from './form/ViewItems';
import ViewDelivery from './form/ViewDelivery';
import { ProviderStepper } from './store';

const { Step } = Steps;

const IndexQuoting = () => {
   const [stepActual, setStepActual] = useState(1);
   const [quotingObject, setQuotingObject] = useState({});

   const handleNexStep = useCallback(() => {
      setStepActual(stepActual + 1);
   }, [stepActual]);

   const handlePrevStep = useCallback(() => {
      setStepActual(stepActual - 1);
   }, [stepActual]);

   let view;
   switch (stepActual) {
      case 1:
         view = <ViewDelivery />;
         break;

      case 2:
         view = <ViewItems />;
         break;

      case 3:
         view = <ViewAdditional />;
         break;

      default:
         break;
   }

   return (
      <Provider store={storeIndex}>
         <Row>
            <Col lg={20}>
               <Steps current={stepActual} direction="horizontal">
                  <Step title="Delivery" icon={<Icon type="carry-out" />} />
                  <Step title="Items" icon={<Icon type="appstore" />} />
                  <Step
                     title="Additional"
                     icon={<Icon type="reconciliation" />}
                  />
               </Steps>
            </Col>
         </Row>

         <ProviderStepper
            value={{
               stepActual,
               quotingObject,
               handleNexStep,
               handlePrevStep,
               setQuotingObject
            }}
         >
            {view}
         </ProviderStepper>
      </Provider>
   );
};

export default IndexQuoting;
