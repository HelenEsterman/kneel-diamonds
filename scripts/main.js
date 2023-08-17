import { MetalOptions } from "./MetalOptions.js";
import { Orders } from "./OrderList.js";
import { SaveButton } from "./SaveOrder.js";
import { SizeOptions } from "./SizeOptions.js";
import { StyleOptions } from "./StyleOptions.js";

const mainContainer = document.querySelector(".container")

export const render = async () => {
    const metalHtml = await MetalOptions()
    const styleHtml = await StyleOptions()
    const sizeHtml = await SizeOptions()
    const buttonHtml = SaveButton()
    const ordersHtml = await Orders()
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
                ${buttonHtml}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
                ${ordersHtml}
        </article>
    `
    mainContainer.innerHTML = mainHtml
}

document.addEventListener("postingOrder", render)
//you do need both of these "render"s because the one in the click event REgenerates the HTML after an order is made as well as posts the order 
// (does the refresh of page for you lowkey)
render()
//this second "render" is what generates the html for the page initially, without this one, the page won't load
