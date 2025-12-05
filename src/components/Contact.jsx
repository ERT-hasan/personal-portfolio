import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/mldqllga", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 text-transparent bg-clip-text">
          Get In Touch
        </h2>

        <div className="max-w-3xl mx-auto bg-gray-800/60 border border-gray-700 rounded-xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Enter your name..."
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email..."
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700"
            />

            <textarea
              name="message"
              placeholder="Enter your message..."
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700"
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 text-white py-3 rounded-lg"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {submitStatus === "success" && (
            <p className="mt-4 text-green-400 text-center">
              ✔ Message sent successfully!
            </p>
          )}

          {submitStatus === "error" && (
            <p className="mt-4 text-red-400 text-center">
              ❌ Error sending message. Try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
