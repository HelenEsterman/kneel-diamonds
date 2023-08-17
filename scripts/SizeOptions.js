import { setSizeId } from "./TransientState.js"

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizeOptions = await response.json()
    const sizeChoices = sizeOptions.map(
        (size) => {
            return `<div><input type="radio" name="sizes" value="${size.id}"/>${size.carets}</div>`
        }
    ) 
    const finalSizeHtml = sizeChoices.join(" ")

    return finalSizeHtml
}

export const changingSizeState = (changeEvent) =>{
    if(changeEvent.target.name === "sizes"){
        const sizeValueAsInt = JSON.parse(changeEvent.target.value)
        setSizeId(sizeValueAsInt)
    }
}

document.addEventListener("change", changingSizeState)