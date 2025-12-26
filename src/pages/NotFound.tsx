import { motion } from "framer-motion";
import { ArrowLeft, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";

function NotFound() {
    return (
        <div className="min-h-screen bg-[#FFF8DC] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#800020]/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-2xl relative z-10"
            >
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [-5, 5, -5]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-48 h-48 mx-auto mb-8 relative"
                >
                    {/* Confused Mascot SVG/Image */}
                    <div className="relative w-full h-full">
                        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
                            {/* Butterfly Body */}
                            <path d="M100 60 L100 140" stroke="#8B4513" strokeWidth="8" strokeLinecap="round" />

                            {/* Left Wing */}
                            <path d="M100 100 C 60 40, 20 40, 40 100 C 20 160, 80 160, 100 100" fill="#FFC0CB" opacity="0.8" />
                            <path d="M100 100 C 80 20, 20 20, 60 100" fill="#FFF0F5" opacity="0.9" />

                            {/* Right Wing */}
                            <path d="M100 100 C 140 40, 180 40, 160 100 C 180 160, 120 160, 100 100" fill="#FFC0CB" opacity="0.8" />
                            <path d="M100 100 C 120 20, 180 20, 140 100" fill="#FFF0F5" opacity="0.9" />

                            {/* Confused Expression: Question Marks */}
                            <text x="140" y="60" fontSize="40" fill="#800020" fontWeight="bold" className="animate-bounce">?</text>
                            <text x="40" y="60" fontSize="30" fill="#800020" fontWeight="bold" className="animate-bounce" style={{ animationDelay: '0.2s' }}>?</text>
                        </svg>
                    </div>
                </motion.div>

                <h1 className="text-8xl font-black text-[#800020] mb-2 tracking-tighter opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none">
                    404
                </h1>

                <h2 className="text-4xl md:text-5xl font-bold text-[#800020] mb-6">
                    Fluttered Away?
                </h2>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    Looks like this page has migrated somewhere else. Don't worry, finding your way back is part of the journey.
                </p>

                <Button
                    onClick={() => window.location.href = '/'}
                    className="bg-[#D4AF37] hover:bg-[#C4A137] text-[#8B4513] font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 mx-auto"
                >
                    <ArrowLeft className="w-5 h-5" /> Return Home
                </Button>
            </motion.div>
        </div>
    );
}

export default NotFound;
