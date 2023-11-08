import React from 'react'

const Step = React.createContext({
    step: 0,
    detailsList: [],
    increaseStep: () => {},
    decreaseStep: () => {},
    updateList: () => {},
});

export default Step 

