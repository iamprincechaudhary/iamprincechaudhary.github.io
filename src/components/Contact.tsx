import emailjs from 'emailjs-com';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { EMAILJS_CONFIG } from '../config/emailConfig';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const errors: Partial<FormData> = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsLoading(true); // Start loading

    emailjs
      .send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formData,
        EMAILJS_CONFIG.USER_ID
      )
      .then(
        () => {
          setSuccessMessage('Your message was successfully sent!');
          setFormData({ name: '', email: '', message: '' });
          setFormErrors({});
          setIsLoading(false); // Stop loading
          setTimeout(() => setSuccessMessage(''), 5000); // Hide success message after 5 seconds
        },
        (error) => {
          console.error('Failed to send email:', error);
          setIsLoading(false); // Stop loading even if there is an error
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-dark-text">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-50 dark:bg-dark-card rounded-lg">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-dark-text mb-1">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">prince1905tech@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-50 dark:bg-dark-card rounded-lg">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-dark-text mb-1">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">+977 9819621905</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-50 dark:bg-dark-card rounded-lg">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-dark-text mb-1">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-dark-card p-8 rounded-lg shadow-md">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-200"
              />
              {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-200"
              />
              {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-200"
              ></textarea>
              {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
            </div>

            <button
              type="submit"
              className={`w-full px-8 py-3 rounded-lg text-white transition-colors ${
                isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        {successMessage && (
          <div className="mt-6 bg-green-100 text-green-800 p-4 rounded-lg text-center">
            {successMessage}
          </div>
        )}
      </div>
    </section>
  );
}
