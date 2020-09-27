import React from 'react';
import styles from './OrderMessage.module.css';
import {Link} from 'react-router-dom'

function OrderMessage (){
    return(
        <div  style={{ backgroundImage: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)` }}
        className={styles.orderMessagePage}>
            <h1 className={styles.textMessage}>Thank you for the order</h1>
            <p className={styles.textInformation}>Information about your order was sent on your email</p>
            <Link to="/products">
            <div className={styles.myButton}>Go to product page</div>
            </Link>
        </div>
    )
}

export default OrderMessage;