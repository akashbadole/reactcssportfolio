import React from 'react';

const Contact = () => {
    return (
        <div className="contact">
            <div className="" style={{textAlign:'center'}}>
                <label>Name</label>
                <input type="text" name="name" />
            </div>
            <div className="Phone" style={{textAlign:'center'}}>
                <label>Name</label>
                <input type="text" name="phone" />
            </div>
            <div className="" style={{textAlign:'center'}}>
                <label>Email</label>
                <input type="text" name="email" />
            </div>
            <div className="" style={{textAlign:'center'}}>
                <label>Message</label>
                <textarea name="message" />
            </div>
            <div className="" style={{textAlign:'center'}}>
                <input type="submit" />
            </div>
        </div>
    );
};

export default Contact;