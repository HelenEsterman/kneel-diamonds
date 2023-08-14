export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizeOptions = await response.json()
    let sizeChoices = ""
    for (const size of sizeOptions) {
        sizeChoices += `<input type="radio" name="sizes" value="${size.id}"/>${size.carets}`
    }
    return sizeChoices
}