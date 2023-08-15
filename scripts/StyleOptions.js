export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styleOptions = await response.json()
    let styleChoices = styleOptions.map(
        (style) => {
            return `<div><input type="radio" name="styles" value="${style.id}"/>${style.style}</div>`
        }
    )
    const finalStyleHtml = styleChoices.join(" ")
    return finalStyleHtml
}