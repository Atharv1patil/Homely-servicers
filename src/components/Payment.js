
// import React, { useState } from 'react';
// import '../styles/payment.css';
// import sweetalert from "sweetalert";
// import pay from '../images/payment.jpeg';
// import axios from "axios";
// import Designer from '../images/Designer.png';
// import { useHistory } from 'react-router-dom';

// function Payment({ cart }) {
//     const [selectedPaymentMode, setSelectedPaymentMode] = useState('');
//     const [paymentError, setPaymentError] = useState(null);
//     const [cardInfo, setCardInfo] = useState({});
//     const totalCost = sessionStorage.getItem("totalCost");
//     const history = useHistory();

//     const handlePaymentModeSelect = (mode) => {
//         setSelectedPaymentMode(mode);
//         setPaymentError(null); // Clear any previous payment errors
//         setCardInfo({}); // Clear card information when changing the payment mode
//     };

//     const handleCardInputChange = (event) => {
//         const { name, value } = event.target;
//         setCardInfo({ ...cardInfo, [name]: value });
//     };

//     const handlePayNow = () => {
//         if (selectedPaymentMode === '') {
//             setPaymentError('Please select a payment mode.');
//         } else if (
//             (selectedPaymentMode === 'creditCard' || selectedPaymentMode === 'debitCard') &&
//             (!cardInfo.cardNumber || cardInfo.cardNumber.length !== 16 || !/^\d+$/.test(cardInfo.cardNumber))
//         ) {
//             setPaymentError('Please enter a valid 16-digit card number.');
//         } else if (
//             (selectedPaymentMode === 'creditCard' || selectedPaymentMode === 'debitCard') &&
//             (!cardInfo.expiryDate || !cardInfo.cvv)
//         ) {
//             setPaymentError('Please enter card information.');
//         } else {
//             let paymentMessage = `Payment successful using ${selectedPaymentMode}!`;
//             if (selectedPaymentMode === 'phonePay') {
//                 paymentMessage = 'Payment successful via PhonePay.';
//             }
//             alert(paymentMessage);
//             cart = [];
//             // window.location.href = "/";
//         }
//     };
    
//     const handleRazorpayPayment = async () => {
//         const loadScript = (src) => {
//             return new Promise((resolve) => {
//                 const script = document.createElement("script");
//                 script.src = src;
    
//                 script.onload = () => {
//                     resolve(true);
//                 };
//                 script.onerror = () => {
//                     resolve(false);
//                 };
//                 document.head.appendChild(script);
//             });
//         };
    
//         const displayRazorpay = async () => {
//             const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
        
//             if (!res) {
//                 sweetalert("error", "You are offline...", "error");
//                 return;
//             }
//             try {
//                 const userResponse = await axios.get(`http://13.48.25.89:8080/api/email/${sessionStorage.getItem("name")}`);
//                 const userEmail = userResponse.data;
        
//                 const user = { email: userEmail };
//                 const res = await axios.post("http://13.48.25.89:8080/api/getUserByEmail", user);
//                 const { name, mobile, email } = res.data;
        
//                 const options = {
//                     "key": "rzp_test_tsrsoRU1sBXN1P",
//                     "amount": totalCost*100, // Replace with the actual total cost in paisa
//                     "currency": "INR",
//                     "name": "Homely services",
//                     "description": "Service payment",
//                     "image": `${Designer}`,
//                     "handler": function (response){
//                         alert(" payment id - "+response.razorpay_payment_id);
//                         sweetalert("success", "Payment is done successfully...", "success");
//                         history.push('/userhome'); // Redirect to UserHome
//                     },
//                     "prefill": {
//                         "name": name, // Use the retrieved name
//                         "email": email, // Use the retrieved email
//                         "contact": mobile // Use the retrieved mobile number
//                     },
//                     "theme": {
//                         "color": "#3399cc"
//                     }
                    
//                 };
        
//                 const paymentObject = new window.Razorpay(options);
//                 paymentObject.open();
//             } catch (error) {
//                 console.log(error);
//             }
//         };
    
//         displayRazorpay();
//     };

//     const renderPaymentContent = () => {
//         switch (selectedPaymentMode) {
//             case 'creditCard':
//             case 'debitCard':
//                 return (
//                     <div className="card-info">
//                         <label>Card Number:</label>
//                         <input
//                             type="text"
//                             name="cardNumber"
//                             value={cardInfo.cardNumber || ''}
//                             onChange={handleCardInputChange}
//                         />
//                         <label>Expiry Date:</label>
//                         <input
//                             type="text"
//                             name="expiryDate"
//                             value={cardInfo.expiryDate || ''}
//                             onChange={handleCardInputChange}
//                         />
//                         <label>CVV:</label>
//                         <input
//                             type="text"
//                             name="cvv"
//                             value={cardInfo.cvv || ''}
//                             onChange={handleCardInputChange}
//                         />
//                     </div>
//                 );
//             case 'phonePay':
//                 return (
//                     <div className="phonepay-qr">
//                         <p>Scan the QR code below to complete the payment with PhonePay.</p>
//                         <img
//                             src={pay} // Provide the correct path to your QR code image
//                             alt="PhonePay QR Code"
//                             width="300" // Set the width as needed
//                             height="200" // Set the height as needed
//                         />
//                     </div>
//                 );
//             case 'razorpay':
//                 return (
//                     <div className="razorpay-payment">
//                         <p>Click the button below to proceed with Razorpay payment.</p>
//                         <button onClick={handleRazorpayPayment}>Pay with Razorpay</button>
//                     </div>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="payment">
//             <h2>Payment</h2>
//             <p>Total Cost: Rs.{totalCost}</p>
//             <div className="payment-modes">
//                 <label>
//                     <input
//                         type="radio"
//                         name="paymentMode"
//                         value="creditCard"
//                         checked={selectedPaymentMode === 'creditCard'}
//                         onChange={() => handlePaymentModeSelect('creditCard')}
//                     />
//                     Credit Card
//                 </label>
//                 <label>
//                     <input
//                         type="radio"
//                         name="paymentMode"
//                         value="debitCard"
//                         checked={selectedPaymentMode === 'debitCard'}
//                         onChange={() => handlePaymentModeSelect('debitCard')}
//                     />
//                     Debit Card
//                 </label>
//                 <label>
//                     <input
//                         type="radio"
//                         name="paymentMode"
//                         value="phonePay"
//                         checked={selectedPaymentMode === 'phonePay'}
//                         onChange={() => handlePaymentModeSelect('phonePay')}
//                     />
//                     PhonePay
//                 </label>
//                 <label>
//                     <input
//                         type="radio"
//                         name="paymentMode"
//                         value="razorpay"
//                         checked={selectedPaymentMode === 'razorpay'}
//                         onChange={() => handlePaymentModeSelect('razorpay')}
//                     />
//                     Razorpay
//                 </label>
//             </div>
//             {renderPaymentContent()}
//             {paymentError && <p className="payment-error">{paymentError}</p>}
//             <button onClick={handlePayNow}>Pay Now</button>
//         </div>
//     );
// }

// export default Payment;

import React, { useState } from 'react';
import '../styles/payment.css';
import sweetalert from "sweetalert";
import pay from '../images/payment.jpeg';
import axios from "axios";
import Designer from '../images/Designer.png';
import { useHistory } from 'react-router-dom';

function Payment({ cart }) {
    const [selectedPaymentMode, setSelectedPaymentMode] = useState('');
    const [paymentError, setPaymentError] = useState(null);
    const [cardInfo, setCardInfo] = useState({});
    const totalCost = sessionStorage.getItem("totalCost");
    const history = useHistory();

    const handlePaymentModeSelect = (mode) => {
        setSelectedPaymentMode(mode);
        setPaymentError(null); // Clear any previous payment errors
        setCardInfo({}); // Clear card information when changing the payment mode
    };

    const handleCardInputChange = (event) => {
        const { name, value } = event.target;
        setCardInfo({ ...cardInfo, [name]: value });
    };

    const handlePayNow = () => {
        if (selectedPaymentMode === '') {
            setPaymentError('Please select a payment mode.');
        } else if (
            (selectedPaymentMode === 'creditCard' || selectedPaymentMode === 'debitCard') &&
            (!cardInfo.cardNumber || cardInfo.cardNumber.length !== 16 || !/^\d+$/.test(cardInfo.cardNumber))
        ) {
            setPaymentError('Please enter a valid 16-digit card number.');
        } else if (
            (selectedPaymentMode === 'creditCard' || selectedPaymentMode === 'debitCard') &&
            (!cardInfo.expiryDate || !cardInfo.cvv)
        ) {
            setPaymentError('Please enter card information.');
        } else {
            let paymentMessage = `Payment successful using ${selectedPaymentMode}!`;
            if (selectedPaymentMode === 'phonePay') {
                paymentMessage = 'Payment successful via PhonePay.';
            }
            sweetalert("success", paymentMessage, "success");
            cart = [];
            history.push('/userhome'); // Redirect to UserHome
        }
    };
    
    const handleRazorpayPayment = async () => {
        const loadScript = (src) => {
                        return new Promise((resolve) => {
                            const script = document.createElement("script");
                            script.src = src;
                
                            script.onload = () => {
                                resolve(true);
                            };
                            script.onerror = () => {
                                resolve(false);
                            };
                            document.head.appendChild(script);
                        });
                    };
                
                    const displayRazorpay = async () => {
                        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
                    
                        if (!res) {
                            sweetalert("error", "You are offline...", "error");
                            return;
                        }
                        try {
                            const userResponse = await axios.get(`http://13.48.25.89:8080/api/email/${sessionStorage.getItem("name")}`);
                            const userEmail = userResponse.data;
                    
                            const user = { email: userEmail };
                            const res = await axios.post("http://13.48.25.89:8080/api/getUserByEmail", user);
                            const { name, mobile, email } = res.data;
                    
                            const options = {
                                "key": "rzp_test_tsrsoRU1sBXN1P",
                                "amount": totalCost*100, // Replace with the actual total cost in paisa
                                "currency": "INR",
                                "name": "Homely services",
                                "description": "Service payment",
                                "image": `${Designer}`,
                                "handler": function (response){
                                    alert(" payment id - "+response.razorpay_payment_id);
                                    sweetalert("success", "Payment is done successfully...", "success");
                                    history.push('/userhome'); // Redirect to UserHome
                                },
                                "prefill": {
                                    "name": name, // Use the retrieved name
                                    "email": email, // Use the retrieved email
                                    "contact": mobile // Use the retrieved mobile number
                                },
                                "theme": {
                                    "color": "#3399cc"
                                }
                                
                            };
                    
                            const paymentObject = new window.Razorpay(options);
                            paymentObject.open();
                        } catch (error) {
                            console.log(error);
                        }
                    };
                
                    displayRazorpay();
    };

    const renderPaymentContent = () => {
        switch (selectedPaymentMode) {
                        case 'creditCard':
                        case 'debitCard':
                            return (
                                <div className="card-info">
                                    <label>Card Number:</label>
                                    <input
                                        type="text"
                                        name="cardNumber"
                                        value={cardInfo.cardNumber || ''}
                                        onChange={handleCardInputChange}
                                    />
                                    <label>Expiry Date:</label>
                                    <input
                                        type="text"
                                        name="expiryDate"
                                        value={cardInfo.expiryDate || ''}
                                        onChange={handleCardInputChange}
                                    />
                                    <label>CVV:</label>
                                    <input
                                        type="text"
                                        name="cvv"
                                        value={cardInfo.cvv || ''}
                                        onChange={handleCardInputChange}
                                    />
                                </div>
                            );
                        case 'phonePay':
                            return (
                                <div className="phonepay-qr">
                                    <p>Scan the QR code below to complete the payment with PhonePay.</p>
                                    <img
                                        src={pay} // Provide the correct path to your QR code image
                                        alt="PhonePay QR Code"
                                        width="300" // Set the width as needed
                                        height="200" // Set the height as needed
                                    />
                                </div>
                            );
                        case 'razorpay':
                            return (
                                <div className="razorpay-payment">
                                    <p>Click the button below to proceed with Razorpay payment.</p>
                                    <button onClick={handleRazorpayPayment}>Pay with Razorpay</button>
                                </div>
                            );
                        default:
                            return null;
                    }
    };

    return (
        <div className="payment">
            <h2>Payment</h2>
            <p>Total Cost: Rs.{totalCost}</p>
            <div className="payment-modes">
            <label>
                    <input
                        type="radio"
                        name="paymentMode"
                        value="creditCard"
                        checked={selectedPaymentMode === 'creditCard'}
                        onChange={() => handlePaymentModeSelect('creditCard')}
                    />
                    Credit Card
                </label>
                <label>
                    <input
                        type="radio"
                        name="paymentMode"
                        value="debitCard"
                        checked={selectedPaymentMode === 'debitCard'}
                        onChange={() => handlePaymentModeSelect('debitCard')}
                    />
                    Debit Card
                </label>
                <label>
                    <input
                        type="radio"
                        name="paymentMode"
                        value="phonePay"
                        checked={selectedPaymentMode === 'phonePay'}
                        onChange={() => handlePaymentModeSelect('phonePay')}
                    />
                    PhonePay
                </label>
                <label>
                    <input
                        type="radio"
                        name="paymentMode"
                        value="razorpay"
                        checked={selectedPaymentMode === 'razorpay'}
                        onChange={() => handlePaymentModeSelect('razorpay')}
                    />
                    Razorpay
                </label>
            
            </div>
            {renderPaymentContent()}
            {paymentError && <p className="payment-error">{paymentError}</p>}
            {selectedPaymentMode !== 'razorpay' && <button onClick={handlePayNow}>Pay Now</button>}
        </div>
    );
}

export default Payment;
