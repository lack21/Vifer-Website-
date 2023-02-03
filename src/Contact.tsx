// Contact

function Contact() {
  return (
    <section id="contact">
      <h2 className="sub-heading">Contact Us</h2>
      <p className="desc-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <form className="form">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea
          name="textarea"
          rows={8}
          placeholder="Message"
          required
        ></textarea>
        <button type="button" className="btn-2">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
