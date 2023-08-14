export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metalOptions = await response.json()
    let metalChoices = ""
    for (const metal of metalOptions) {
        metalChoices += `<input type="radio" name="metals" value="${metal.id}"/>${metal.metal}`
    }
    return metalChoices
}