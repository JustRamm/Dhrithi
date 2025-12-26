import { motion } from "framer-motion";
import { Heart, Users, Sparkles } from "lucide-react";

export function WhySection() {
    return (
        <section id="why" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <Heart className="w-8 h-8 text-[#800020]" />
                        <h2 className="text-4xl md:text-5xl font-bold text-[#800020]">Why a Festival?</h2>
                    </div>

                    <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                        <p className="hidden md:block">
                            Festivals have always been at the heart of Kerala's culture - they bring people together, create joy, and foster deep connections. But what if we could harness this power to address one of our most pressing challenges?
                        </p>
                        <p className="text-[#8B4513] font-medium">
                            Dhriti reimagines the festival experience as a safe, engaging space where mental health conversations happen naturally. Through interactive activities, creative expression, and community celebration, we're making it easier for people to open up, seek help early, and support one another.
                        </p>
                        <p className="hidden md:block">
                            When mental health support feels like celebration rather than treatment, stigma dissolves. When communities gather with purpose and joy, transformation happens. This is the Dhriti way.
                        </p>
                    </div>

                    <div className="flex justify-center gap-8 mt-12">
                        <div className="text-center">
                            <Users className="w-12 h-12 text-[#D4AF37] mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Community-Led</p>
                        </div>
                        <div className="text-center">
                            <Sparkles className="w-12 h-12 text-[#D4AF37] mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Celebration-Based</p>
                        </div>
                        <div className="text-center">
                            <Heart className="w-12 h-12 text-[#D4AF37] mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Stigma-Free</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
