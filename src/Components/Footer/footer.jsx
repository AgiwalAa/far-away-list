import '../Footer/footer.css';
import React from 'react';
const Footer = ({ quantity, percentage }) => {
    return (
        <footer className='flex-center'>
            {/* {quantity && `You have ${quantity} item(s) in the list. ${percentage}% packed`} */}
            {!quantity && 'List is empty'}
            {quantity > 0 && `You have ${quantity} item(s) in the list. ${percentage}% packed`}
        </footer>
    )
}

export default Footer;