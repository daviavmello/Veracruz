import React from 'react'
import { PayPalButton } from 'react-paypal-button-v2'

export default class PayPal extends React.Component {
	render() {
		const { currency, name, total } = this.props
		return (
			<PayPalButton
				// shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
				createOrder={(data, actions) => {
					console.log('Actions: ' + actions)
					return actions.order.create({
						purchase_units: [
							{
								// reference_id: "PUHF",
								description: name,

								// custom_id: '',
								// soft_descriptor: '',
								amount: {
									currency_code: currency,
									value: total,
									breakdown: {
										item_total: {
											currency_code: currency,
											value: total,
										},
									},
								},
								// items: [
								//     {
								//         name: "Pecadores Feitos Santos",
								//         // description: "The best item ever",
								//         sku: sku,
								//         unit_amount: {
								//             currency_code: currency,
								//             value: "79.70"
								//         },
								//         quantity: units
								//     },
								//     {
								//         name: "Versiculo",
								//         // description: "Asafe",
								//         sku: sku,
								//         unit_amount: {
								//             currency_code: currency,
								//             value: "79.70"
								//         },
								//         quantity: units
								//     }
								// ],
							},
						],
						// application_context: {
						//   shipping_preference: "NO_SHIPPING" // default is "GET_FROM_FILE"
						// }
					})
				}}
				onSuccess={(details, data) => {
					// onSuccess(details, data)
					alert(details.payer.name.given_name + ', sua transação foi concluída com sucesso!')
					this.props.reset()
					return fetch('/api/paypal-transaction-complete', {
						method: 'post',
						headers: {
							'content-type': 'application/json',
						},
						body: JSON.stringify({
							orderID: data.orderID,
						}),
					})
					// OPTIONAL: Call your server to save the transaction
					// return fetch('/demo/checkout/api/paypal/order/' + data.orderID + '/capture/', {
					// 	method: 'post',
					// 	body: JSON.stringify({
					// 		orderID: data.orderID,
					// 	}).then((res) => {
					//         return res.json()
					//     })
					// })
				}}
				options={{
					clientId: 'ASllCCQ16tHyF6MKLa2UWC3SlrV-A6TLo-3wKm-L-g-rGemrxR_l1cRXnNMG01wkN-A7iyBlo5rKEjd6',
				}}
			/>
		)
	}
}
