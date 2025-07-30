const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900 dark:text-white">
        Let's Talk
      </h2>

      <form
        action="https://formsubmit.co/jyotiprakashmaan@gmail.com"
        method="POST"
        className="space-y-6"
      >
        {/* Disable captcha (optional) */}
        <input type="hidden" name="_captcha" value="false" />

        {/* Redirect to custom thank-you page */}
        <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

        <div>
          <label htmlFor="name" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800 dark:text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
