import { MetalOptions } from "./MetalOptions.js";
import { SizeOptions } from "./SizeOptions.js";
import { StyleOptions } from "./StyleOptions.js";


const mainContainer = document.querySelector(".container")

const render = async () => {
    const metalHtml = await MetalOptions()
    const styleHtml = await StyleOptions()
    const sizeHtml = await SizeOptions()
    const mainHtml = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalHtml}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeHtml}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleHtml}
            </section>
        </article>

        <article class="order">

        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>

        </article>
    `
    mainContainer.innerHTML = mainHtml
}

render()
