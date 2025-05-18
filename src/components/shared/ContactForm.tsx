
import { useState } from "react";
import { toast } from "sonner";

// Local storage key for contact messages
const CONTACT_MESSAGES_KEY = "local_contact_messages";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      console.log('Sending contact form with data:', formData);

      // Create message object with timestamp and ID
      const newMessage = {
        id: Date.now(),
        ...formData,
        created_at: new Date().toISOString(),
      };

      // Get existing messages from localStorage
      const existingMessagesJSON = localStorage.getItem(CONTACT_MESSAGES_KEY);
      const existingMessages = existingMessagesJSON ? JSON.parse(existingMessagesJSON) : [];
      
      // Add new message to existing messages
      const updatedMessages = [...existingMessages, newMessage];
      
      // Save to localStorage
      localStorage.setItem(CONTACT_MESSAGES_KEY, JSON.stringify(updatedMessages));

      toast.success("Сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Имя
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Телефон
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Сообщение
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        Отправить сообщение
      </button>
    </form>
  );
};

export default ContactForm;
