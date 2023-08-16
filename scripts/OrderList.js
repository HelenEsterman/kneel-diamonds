export const Orders = async () =>{
    const response = await fetch("http://localhost:8088/orders")
    const orders = await response.json()
    const orderList = orders.map(
        (order) =>{
            return `<div>Order #${order.id}</div>`
        }
    )
    const finalOrderList = orderList.join(" ")
    return finalOrderList
}