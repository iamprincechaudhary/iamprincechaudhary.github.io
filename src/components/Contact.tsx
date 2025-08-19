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

    setIsLoading(true);

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
          setIsLoading(false);
          setTimeout(() => setSuccessMessage(''), 5000);
        },
        (error) => {
          console.error('Failed to send email:', error);
          setIsLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-gray-300">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              { icon: Mail, title: 'Email', info: 'prince1905tech@gmail.com' },
              { icon: Phone, title: 'Phone', info: '+977 9819621905' },
              { icon: MapPin, title: 'Location', info: 'Kathmandu, Nepal' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="p-3 bg-orange-50 dark:bg-orange-900 rounded-lg">
                  <item.icon className="w-6 h-6 text-orange-600 dark:text-orange-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-300">{item.info}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/20 dark:bg-dark-card/80 backdrop-blur-md p-8 rounded-xl shadow-lg"
          >
            <div>
              <label className="block text-sm font-medium text-white mb-1">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-200"
              />
              {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-200"
              />
              {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-200"
              ></textarea>
              {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full px-8 py-3 rounded-lg text-white font-semibold transition-colors ${
                isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700'
              }`}
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
