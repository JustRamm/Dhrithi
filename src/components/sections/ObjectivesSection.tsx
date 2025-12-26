import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, TrendingUp, Gamepad2, Brain, Laugh } from "lucide-react";

export function ObjectivesSection() {
    return (
        <section id="objectives" className="py-20 md:py-32 bg-gradient-to-b from-[#FFF8DC] to-[#F4E5B8]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#800020] mb-4">
                        Our Core Objectives
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Five pillars guiding our mission to transform mental health awareness in Kerala
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
                    {[
                        {
                            icon: Shield,
                            title: "Breaking Stigma",
                            description: "Creating safe spaces where mental health conversations are normalized and celebrated, not hidden."
                        },
                        {
                            icon: TrendingUp,
                            title: "Increasing Awareness",
                            description: "Educating communities about mental health through engaging, culturally-relevant activities and dialogues."
                        },
                        {
                            icon: Gamepad2,
                            title: "Experiential Learning",
                            description: "Interactive stalls and hands-on experiences that make mental health education memorable and impactful."
                        },
                        {
                            icon: Brain,
                            title: "Empowering Youth",
                            description: "Equipping young minds with emotional intelligence tools and coping strategies for lifelong wellness."
                        },
                        {
                            icon: Laugh,
                            title: "Celebrating Wellness",
                            description: "Honoring community resilience and celebrating mental health as an integral part of overall well-being."
                        }
                    ].map((objective, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 active:scale-95 bg-white border-[#D4AF37]/20">
                                <CardHeader className="text-center p-4 pb-2 md:p-6">
                                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-[#800020] to-[#A0153E] rounded-full flex items-center justify-center mb-3 md:mb-4">
                                        <objective.icon className="w-6 h-6 md:w-8 md:h-8 text-[#D4AF37]" />
                                    </div>
                                    <CardTitle className="text-[#800020] text-sm md:text-xl leading-tight">{objective.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-4 pt-0 md:p-6 md:pt-0">
                                    <CardDescription className="text-center text-gray-600 hidden md:block">
                                        {objective.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
