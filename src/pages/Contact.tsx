import { ButtonGradient } from '@/components/ui/button-gradient';
import { Instagram, Linkedin, Mail, Send } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import emailjs from 'emailjs-com'

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
     try {
      await emailjs.send(
        'service_woapccs',     // Replace with your actual EmailJS service ID
        'template_9o6eqxf',    // Replace with your actual EmailJS template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        '8W_vwN-Qn8BhRvPgs'      // Replace with your actual EmailJS public key
      );


      toast({
        title: 'Message Sent',
        description: 'Thanks for reaching out! I’ll get back to you soon.',
        variant: 'default',
      });

      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Error sending message:', err);
      toast({
        title: 'Error',
        description: 'Message failed to send. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-background to-black/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6">
            Let's Work Together
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Have a project in mind? I'd love to help bring your vision to life. Get in touch and let's create something amazing.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-black/30 p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-black/30 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-black/30 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Project Details</label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-black/30 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  ></textarea>
                </div>

                <ButtonGradient type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </ButtonGradient>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Social Media</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/astroanand_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/30 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/anand-chowdari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/30 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Email</h3>
                  <a
                    href="mailto:connect.anandchowdari@gmail.com"
                    className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    connect.anandchowdari@gmail.com
                  </a>
                </div>
                <div className="p-6 bg-black/30 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-4">Work Hours</h3>
                  <p className="text-gray-300">Monday - Friday</p>
                  <p className="text-gray-300">9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;