export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metalOptions = await response.json()
    const metalChoices = metalOptions.map(
        (metal) => {
            return `<div><input type="radio" name="metals" value="${metal.id}"/>${metal.metal}</div>`
        }
    )
        const finalMetalHtml = metalChoices.join(" ")

    return finalMetalHtml
}