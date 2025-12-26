import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LazyImage } from "@/components/ui/LazyImage";
import { Home, ArrowRight } from "lucide-react";

export function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FFF8DC] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#800020]/5 rounded-full blur-3xl opacity-60" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center"
                >
                    {/* Floating Mascot */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="mb-8 relative w-48 h-48 sm:w-64 sm:h-64"
                    >
                        <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-xl animate-pulse" />
                        <LazyImage
                            src="/images/brand/mascot.svg"
                            alt="Lost Mascot"
                            className="w-full h-full object-contain"
                            wrapperClassName="w-full h-full"
                        />
                    </motion.div>

                    <h1 className="text-8xl md:text-9xl font-bold text-[#800020] opacity-90 mb-2 font-serif">
                        404
                    </h1>

                    <div className="w-24 h-1 bg-[#D4AF37] rounded-full mb-6 mx-auto" />

                    <h2 className="text-2xl md:text-4xl font-bold text-[#800020] mb-4">
                        Wandered Off The Path?
                    </h2>

                    <p className="text-lg text-gray-600 max-w-lg mx-auto mb-10 leading-relaxed">
                        It looks like this page hasn't blossomed yet. Let's guide you back to where the journey begins.
                    </p>

                    <a href="/">
                        <Button
                            size="lg"
                            className="bg-[#800020] hover:bg-[#5C0120] text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <Home className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                            Return Home
                            <ArrowRight className="w-5 h-5 ml-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </Button>
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
