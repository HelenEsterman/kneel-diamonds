import { placeOrder } from "./TransientState.js"

export const SaveButton = () => {
    return `<button id="placeOrder">Place Order</button>`
}

const sendSavedOrderToApi = (clickEvent) =>{
    if(clickEvent.target.id === "placeOrder"){
        placeOrder()
    }
}

document.addEventListener("click", sendSavedOrderToApi)