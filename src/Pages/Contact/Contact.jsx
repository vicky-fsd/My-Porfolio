import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Swal from "sweetalert2";
import { BiSolidPhoneCall, BiCurrentLocation,BiLogoGmail, BiLogoEdge } from "react-icons/bi";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //console.log(import.meta.env.VITE_PUBLIC_KEY);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
            console.log(result);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your Email has been send successfully',
                showConfirmButton: false,
                timer: 1500
              })
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact">
      <SectionHeading heading={"Contact"}></SectionHeading>
      <div className="question-box">
        <h4 className="tertiary-heading margin-bottom-md">
          Have you any question?
        </h4>
        <p>I am at your service</p>
      </div>
      <div className="grid grid-4-col">
        <div className="contact-box scale-animation">
          <div className="icon">
            <BiSolidPhoneCall></BiSolidPhoneCall>
          </div>
          <h4 className="tertiary-heading">Call me on</h4>
          <a href="tel:+918526893918">+918526893918</a>
        </div>
        <div className="contact-box scale-animation">
          <div className="icon">
            <BiCurrentLocation></BiCurrentLocation>
          </div>
          <h4 className="tertiary-heading">Address</h4>
          <p>6/11, New Panikkan Street, Woraiyur, Trichy-620003</p>
        </div>
        <div className="contact-box scale-animation">
          <div className="icon">
            <BiLogoGmail></BiLogoGmail>
          </div>
          <h4 className="tertiary-heading">Email Me</h4>
          <a href="mailto:vk1996vignesh@gmail.com">
          vk1996vignesh@gmail.com
          </a>
        </div>
        <div className="contact-box scale-animation">
          <div className="icon">
            <BiLogoEdge></BiLogoEdge>
          </div>
          <h4 className="tertiary-heading">Website</h4>
          <a href="">Click Here</a>
        </div>
      </div>
      <div className="question-box">
        <h4 className="tertiary-heading margin-bottom-md">Send me an Email</h4>
        <p>I am very responsive to message</p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid grid-2-col">
          <input type="text" name="user_name" placeholder="Name" className="input"  required />
          <input type="email" name="user_email" placeholder="Email" className="input"  required />
        </div>
        <input type="text" name="user_subject" placeholder="Subject" className="input" />
        <textarea name="message" placeholder="Message" className="input textarea" required />
        <input type="submit" value="Send" className="btn" />
      </form>
    </section>
  );
};

export default Contact;
