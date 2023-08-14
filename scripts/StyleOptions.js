export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styleOptions = await response.json()
    let styleChoices = ""
    for (const style of styleOptions) {
        styleChoices += `<input type="radio" name="styles" value="${style.id}"/>${style.style}`
    }

    return styleChoices
}