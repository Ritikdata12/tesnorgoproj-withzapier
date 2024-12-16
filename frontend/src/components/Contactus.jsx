import "./Contactus.css";
import { MdEmail } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";

const ContactFrom = () => {
  return (
    <>
    <div className="contact"  id = "contact">
  
  <h4 className="heading"><i className="fas fa-headset"></i> Get in <span>Touch</span></h4>

  <div className="container">
    <div className="content1">
      <div className="image-box">
        <img  draggable="false" src="https://forms.io/images/blog/technical-businesses.png?v=1691124479409199525" alt=""/>
      </div>
    <form id="contact-form">
      
      <div className="form-group">
        <div className="field">
          <input type="text" name="name" placeholder="Name" required/>
          <i className='fas fa-envelope'><FaPerson /></i>
        </div>
        <div className="field">
          <input type="text" name="email" placeholder="Email" required/>
          <i className='fas fa-envelope'><MdEmail /></i>
        </div>
        <div className="field">
          <input type="text" name="phone" placeholder="Phone"/>
          <i className='fas fa-phone-alt'><IoIosContact /></i>
        </div>
        <div className="message">
        <textarea placeholder="Message" name="message" required></textarea>
        <i className="fas fa-comment-dots"><FaMessage /></i>
        </div>
        </div>
      <div className="button-area">
        <button type="submit">
          Submit <i className="fa fa-paper-plane"></i></button>
      </div>
    </form>
  </div>
  </div>
</div>

    </>
  )
}

export default ContactFrom