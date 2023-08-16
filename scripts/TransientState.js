//initial values of the transient state data structures
const transientState = {
    // "timeStamp" : "",
    metalId : 0,
    sizeId : 0,
    styleId : 0
}

//setter functions
export const setMetalId = (metalChosen) =>{
    transientState.metalId = metalChosen
    // console.log(transientState)
}

export const setSizeId = (sizeChosen) =>{
    transientState.sizeId = sizeChosen
    // console.log(transientState)
}

export const setStyleId = (styleChosen) =>{
    transientState.styleId = styleChosen
    // console.log(transientState)
}

//"post" transient state to API to make it permanent state

export const placeOrder = async () => {
    /*
        Add the required keys to the object below that are
        needed for a POST operation.
    */
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState),
    }

    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/orders", postOptions)

}