// import React, { useState, useRef, useEffect } from 'react'
// import Cart from 'Cart'

// const [paidFor, setPaidFor] = useState(false)
// const [loaded, setLoaded] = useState(false)

// let paypalRef = useRef()

// useEffect(() => {
//     const script = document.createElement('script')
//     script.src = 'https://www.paypal.com/sdk/js?client-id=Aat8DGkJm-8JrK-8SsvIvClaJpy2EohIlw8x5wDkK1DfuAKpJFHeTH0dNRg3xFywRkhn-375Fjlproca'
//     script.addEventListener('load', () => setLoaded(true))
//     document.body.appendChild(script)

//     if(loaded) {
//         setTimeout(() => {
//             window.paypal
//             .Buttons({
//                 createOrder: (data, actions) => {
//                     return actions.order.create({
//                         purchase_units: [
//                             {
//                                 description: product.description,

//                             }
//                         ]
//                     })
//                 }
//             })
//             .render(paypalRef)
//         })
//     }
// })

// return (
//     <div>
//         {paidFor ? (
//             <h1>Congrats!</h1>
//         ) : (
//             <div>
//             <h1>Não deu!</h1>
//             <div ref={v => (paypalRef = v)} />
//             </div>
//         )}
//     </div>
// )