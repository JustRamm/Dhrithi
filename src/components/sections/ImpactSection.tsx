import { motion } from "framer-motion";
import { Users, Gamepad2, Heart, Award, Brain, Sparkles } from "lucide-react";

export function ImpactSection() {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#800020] mb-4">
                        Expected Impact
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Creating lasting change in our community's approach to mental wellness
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16">
                    {[
                        {
                            metric: "10,000+",
                            label: "Community Members Reached",
                            icon: Users
                        },
                        {
                            metric: "50+",
                            label: "Interactive Activities",
                            icon: Gamepad2
                        },
                        {
                            metric: "100%",
                            label: "Inclusive & Accessible",
                            icon: Heart
                        },
                        {
                            metric: "1st",
                            label: "Of Its Kind in Kerala",
                            icon: Award
                        }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-gradient-to-br from-[#800020] to-[#A0153E] rounded-full flex items-center justify-center">
                                <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-[#D4AF37]" />
                            </div>
                            <div className="text-3xl md:text-5xl font-bold text-[#800020] mb-2">
                                {stat.metric}
                            </div>
                            <p className="text-gray-700 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-r from-[#FFF8DC] to-[#F5DEB3] rounded-2xl p-8 md:p-12 text-[#3E2723]"
                >
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#800020]">
                            Community Empowerment Through Action
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <Heart className="w-5 h-5 text-[#800020]" />
                                    Improved Emotional Awareness
                                </h4>
                                <p className="text-[#3E2723]/80 hidden md:block">
                                    Participants gain practical tools to recognize, understand, and express their emotions healthily.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-[#800020]" />
                                    Strengthened Support Networks
                                </h4>
                                <p className="text-[#3E2723]/80 hidden md:block">
                                    Building lasting connections between individuals, families, schools, and organizations committed to mental wellness.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <Brain className="w-5 h-5 text-[#800020]" />
                                    Early Intervention Mindset
                                </h4>
                                <p className="text-[#3E2723]/80 hidden md:block">
                                    Shifting from crisis response to proactive mental health care through early help-seeking behaviors.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-[#800020]" />
                                    Cultural Transformation
                                </h4>
                                <p className="text-[#3E2723]/80 hidden md:block">
                                    Leading Kerala toward a future where mental health is discussed as openly as physical health.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
