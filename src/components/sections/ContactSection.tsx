import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Shield, MessageCircle, Sparkles, Lock, Send, User, Mail, Instagram, Linkedin } from "lucide-react";
import { Button } from "../ui/button";
import emailjs from "@emailjs/browser";
import { Input } from "../ui/input";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.message.trim()) return;

        setIsSubmitting(true);

        // EmailJS Configuration
        const serviceId = "YOUR_SERVICE_ID";
        const templateId = "YOUR_TEMPLATE_ID";
        const publicKey = "YOUR_PUBLIC_KEY";

        const templateParams = {
            from_name: formData.name || "Anonymous",
            from_email: formData.email || "No Email Provided",
            message: formData.message,
            to_email: "mindempowered.test@gmail.com",
            reply_to: formData.email || "Anonymous"
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setIsSubmitting(false);
                setIsSubmitted(true);
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setIsSubmitted(false), 5000);
            }, (error) => {
                console.log('FAILED...', error);
                setIsSubmitting(false);
                // Fallback for demo
                if (serviceId === "YOUR_SERVICE_ID") {
                    setIsSubmitted(true);
                    setFormData({ name: "", email: "", message: "" });
                    setTimeout(() => setIsSubmitted(false), 5000);
                } else {
                    alert("Failed to send message. Please try again later.");
                }
            });
    };

    return (
        <section id="contact" className="py-24 md:py-40 bg-[#fffaf0] border-y border-[#D4AF37]/10 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] left-[5%] text-[#800020]/5"
                >
                    <Heart className="w-64 h-64" fill="currentColor" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[10%] right-[5%] text-[#D4AF37]/5"
                >
                    <Shield className="w-80 h-80" fill="currentColor" />
                </motion.div>
                <div className="absolute top-[-10%] left-[-5%] w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_70%)]"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto bg-white rounded-3xl md:rounded-[2.5rem] shadow-2xl overflow-hidden border border-[#D4AF37]/20 flex flex-col md:flex-row min-h-0 md:min-h-[600px]">

                    {/* Left Side - Context */}
                    <div className="md:w-5/12 bg-gradient-to-br from-[#800020] to-[#5C0120] p-8 md:p-16 text-white flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/10 opacity-10 mix-blend-overlay"></div>

                        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                            <MessageCircle className="w-64 h-64 -mr-10 -mt-10" />
                        </div>
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute bottom-20 right-10"
                        >
                            <Sparkles className="w-12 h-12 text-[#FFD700]" />
                        </motion.div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFD700] text-sm font-bold uppercase tracking-wider mb-8 shadow-sm">
                                <Lock className="w-4 h-4" /> Secure & Voluntary
                            </div>

                            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFE4B5]">Touch</span>
                            </h3>

                            <p className="text-white/80 leading-relaxed text-lg mb-8">
                                Whether you have a question about the festival, want to collaborate, or simply need a safe space to voice your worries—we are here for you.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-white/70">
                                    <div className="w-1 h-1 rounded-full bg-[#FFD700]" />
                                    <p className="text-sm">For general inquiries, leave your details.</p>
                                </div>
                                <div className="flex items-center gap-3 text-white/70">
                                    <div className="w-1 h-1 rounded-full bg-[#FFD700]" />
                                    <p className="text-sm">To share anonymously, just skip the name fields.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-8">
                                <a
                                    href="https://instagram.com"
                                    target="https://www.instagram.com/mind.empowered?igsh=bGNmYXI1czlrcDhi"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-sm border border-white/10"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="https://www.linkedin.com/company/mind-empowered/posts/?feedView=all"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-sm border border-white/10"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="md:w-7/12 p-6 md:p-12 bg-white flex flex-col justify-center relative">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/5 rounded-bl-[100%] pointer-events-none"></div>

                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-10"
                            >
                                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                    >
                                        <Sparkles className="w-12 h-12 text-green-600" />
                                    </motion.div>
                                </div>
                                <h4 className="text-3xl font-bold text-[#800020] mb-4">Message Received</h4>
                                <p className="text-gray-600 text-lg max-w-md mx-auto">
                                    Thank you for reaching out to us. We hear you.
                                </p>
                                <Button
                                    variant="outline"
                                    className="mt-8 border-[#800020] text-[#800020] hover:bg-[#800020]/5"
                                    onClick={() => setIsSubmitted(false)}
                                >
                                    Send Another Message
                                </Button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <h4 className="text-2xl font-bold text-[#800020] mb-6">Send us a Message</h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                                                <User className="w-4 h-4 text-[#D4AF37]" /> Name <span className="text-xs font-normal text-gray-400">(Optional)</span>
                                            </label>
                                            <Input
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="John Doe"
                                                className="bg-gray-50 border-gray-200 focus:border-[#800020] h-12 rounded-xl"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                                                <Mail className="w-4 h-4 text-[#D4AF37]" /> Email <span className="text-xs font-normal text-gray-400">(Optional)</span>
                                            </label>
                                            <Input
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="john@example.com"
                                                className="bg-gray-50 border-gray-200 focus:border-[#800020] h-12 rounded-xl"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                                            <MessageCircle className="w-4 h-4 text-[#D4AF37]" /> Your Message
                                        </label>
                                        <div className="relative group">
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                placeholder="Type your question, concern, or thought here..."
                                                className="w-full h-40 p-4 rounded-xl bg-gray-50 border-2 border-gray-100 group-hover:border-gray-200 focus:border-[#800020] focus:ring-0 transition-all resize-none text-gray-700 placeholder:text-gray-400 text-base leading-relaxed"
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-2">
                                    <p className="text-xs text-gray-400 hidden md:block">
                                        * Leave name & email blank to stay anonymous
                                    </p>
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting || !formData.message.trim()}
                                        className="w-full md:w-auto bg-[#800020] hover:bg-[#600018] text-white px-8 py-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">Processing...</span>
                                        ) : (
                                            <span className="flex items-center gap-2">Send Message <Send className="w-4 h-4" /></span>
                                        )}
                                    </Button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
