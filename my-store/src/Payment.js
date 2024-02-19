
import React, { useState } from 'react';

function Payment() {
    const [balance, setBalance] = useState(200);

    function handlePayment() {
        if (balance > 0) {
            setBalance(prevBalance => prevBalance - 5);
        } else {
            console.log('Insufficient amount');
        }
    }

    return (
        <div style={styles.container}>
            <p style={styles.balance}>Your current balance is: {balance}</p>
            <button style={styles.button} onClick={handlePayment}>Payment</button>
        </div>
    );
}
const styles = {
    container: {
        textAlign: 'center',
        marginTop: '20px',
    },
    balance: {
        fontSize: '18px',
        marginBottom: '10px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default Payment;
