import React, {useState} from 'react';
import styles from './DeliveryStage.module.css'

function DeliveryStage (props) {

    //const [active, setActive] = useState(false);

    return (
        <div className={`${styles.box} ${props.active?styles.active:''}`} onClick={props.onClick}>
            {props.number}
        </div>
    )
}

export default DeliveryStage;