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