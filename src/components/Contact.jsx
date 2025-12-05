import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-6 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 text-transparent bg-clip-text animate-gradient ">
          Get In Touch
        </h2>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 text-transparent bg-clip-text animate-gradient mb-1">
                Name
              </label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-all duration-200 placeholder:text-gray-400 dark:placeholder:text-gray-500" placeholder="Enter your name..." />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 text-transparent bg-clip-text animate-gradient mb-1">
                Email
              </label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-all duration-200 placeholder:text-gray-400 dark:placeholder:text-gray-500" placeholder="Enter your email..." />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 text-transparent bg-clip-text animate-gradient mb-1">
                Message
              </label>
              <textarea name="message" id="message" rows="5" value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-all duration-200 placeholder:text-gray-400 dark:placeholder:text-gray-500" placeholder="Enter your message..."></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 text-white px-6 py-3 rounded-lg hover:from-green-500 hover:via-orange-500 hover:to-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
          {submitStatus === 'success' && (
            <p className="mt-4 text-green-500 text-center">
              Your message has been sent successfully!
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="mt-4 text-red-500 text-center">
              Something went wrong. Please try again later.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
