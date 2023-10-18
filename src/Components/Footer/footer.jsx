import '../Footer/footer.css';
import React from 'react';
const Footer = ({quantity, percentage}) => {
    return (
        <footer className='flex-center'>You have {quantity} items in the list. {percentage}% packed</footer>
    )
}

export default Footer;