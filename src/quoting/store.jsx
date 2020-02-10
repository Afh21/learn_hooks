import React from 'react';

const stepperContext = React.createContext({});

export const ProviderStepper = stepperContext.Provider;
export const ConsumerStepper = stepperContext.Consumer;

export default stepperContext;
