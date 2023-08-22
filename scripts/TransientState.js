//initial values of the transient state data structures
const transientState = {
  // "timeStamp" : "",
  metalId: 0,
  sizeId: 0,
  styleId: 0,
  typeId: 0,
};

//setter functions
export const setMetalId = (metalChosen) => {
  transientState.metalId = metalChosen;
  // console.log(transientState)
};

export const setSizeId = (sizeChosen) => {
  transientState.sizeId = sizeChosen;
  // console.log(transientState)
};

export const setStyleId = (styleChosen) => {
  transientState.styleId = styleChosen;
  // console.log(transientState)
};

export const setTypeId = (typeChosen) => {
  transientState.typeId = typeChosen;
  console.log(transientState);
};

//"post" transient state to API to make it permanent state

export const placeOrder = async () => {
  /*
        Add the required keys to the object below that are
        needed for a POST operation.
    */
  if (
    transientState.metalId > 0 &&
    transientState.sizeId > 0 &&
    transientState.styleId > 0 &&
    transientState.typeId > 0
  ) {
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transientState),
    };

    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/orders", postOptions);
    transientState.metalId = 0;
    transientState.sizeId = 0;
    transientState.styleId = 0;
    transientState.typeId = 0;

    //creates a custom "noise" for computer to listen for, instead of "click" or "change" computer hears "postingOrder" which you created
    //which tells the computer to RErender in main the HTML
    // this one DOES need to be inside the function because the computer needs to listen and "hear" this custom event when the data gets posted to the api
    const customEvent = new CustomEvent("postingOrder");
    document.dispatchEvent(customEvent);
  }
};
