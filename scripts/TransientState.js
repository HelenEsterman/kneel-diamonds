//initial values of the transient state data structures
const transientState = {
    // "timeStamp" : "",
    "metalId": 0,
    "sizeId": 0,
    "styleId": 0
}

//setter functions
export const setMetalId = (metalChosen) =>{
    transientState.metalId = metalChosen
    console.log(transientState)
}

export const setSizeId = (sizeChosen) =>{
    transientState.sizeId = sizeChosen
    console.log(transientState)
}

export const setStyleId = (styleChosen) =>{
    transientState.styleId = styleChosen
    console.log(transientState)
}