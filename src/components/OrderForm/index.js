import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import styles from './OrderForm.module.css';
import { Redirect } from "react-router-dom";
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';




function OrderForm(props) {
    const [delivery, setDelivery] = useState("FedEx");
    const [payment, setPayment] = useState("Pay by cash");
    const [isSubmit, setIsSubmit] = useState(false)
    // const for "react-hook-form"
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        setIsSubmit(true)
    };
    // function for tracking choosed delivery
    const handleDeliveryChange = (event) => {
        setDelivery(event.target.value)
    };
    // function for tracking choosed payment method
    const handlePaymentChange = (event) => {
        setPayment(event.target.value)
    };
    //const for "react-payment-input"
    const {
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps
    } = usePaymentInputs();


    if (isSubmit === true) return <Redirect to={"/cart/complitingOrder/orderMessage"} />;

    return (
        <div className={styles.box}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <span className={styles.textCenter}>Order</span>
                <div className={styles.inputContainer}>
                    <input name="name" type="text" ref={register({ required: true })} />
                    {errors.name && (
                        <p className={styles.validationError}>Full name is required</p>
                    )}
                    <label>Full Name</label>
                </div>
                <div className={styles.inputContainer}>
                    <input
                        name="email"
                        type="mail"
                        ref={register({ required: true })}
                    />
                    {errors.email && (
                        <p className={styles.validationError}>Email is required</p>
                    )}
                    <label>Email</label>
                </div>
                <div className={styles.inputContainer}>
                    <input name="tel" type="tel" ref={register({ required: true })} />
                    {errors.tel && (
                        <p className={styles.validationError}>Telephone is required</p>
                    )}
                    <label>Telephone</label>
                </div>
                <div className={styles.inputContainer}>
                    <select className={styles.deliverySelect} name="delivery" onChange={handleDeliveryChange} >
                        <option value="FedEx">FedEx</option>
                        <option value="DHL">DHL</option>
                        <option value="Pick up from the store">Pick up from the store</option>
                    </select>
                    <label>Delivery</label>
                </div>
                <div className={`${styles.inputContainer} ${delivery === 'Pick up from the store' ? styles.hide : ''}`}>
                    <input name="adress" type="text" />
                    <label>Your adress</label>
                </div>
                <div className={styles.inputContainer}>
                    <select className={styles.deliverySelect} name="payment" onChange={handlePaymentChange} >
                        <option value="Pay by cash">Pay by cash</option>
                        <option value="Mastercard/Visa">Mastercard/Visa</option>
                    </select>
                    <label>Payment</label>
                </div>
                <PaymentInputsWrapper className={` ${payment === 'Pay by cash' ? styles.hide : ''}`} {...wrapperProps}>
                    <svg {...getCardImageProps({ images })} />
                    <input {...getCardNumberProps()} />
                    <input {...getExpiryDateProps()} />
                    <input {...getCVCProps()} />
                </PaymentInputsWrapper>
                <input type="submit" value="Ok" className={styles.btn} />
            </form>
        </div>
    )

}

export default OrderForm;