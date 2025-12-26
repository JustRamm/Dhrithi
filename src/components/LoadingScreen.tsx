import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const INSPIRING_WORDS = ["Hope", "Resilience", "Community", "Growth", "Joy", "Peace", "Strength"];

export function LoadingScreen() {
    const [isVisible, setIsVisible] = useState(true);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const wordInterval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % INSPIRING_WORDS.length);
        }, 1200);

        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 6000);

        return () => {
            clearTimeout(timer);
            clearInterval(wordInterval);
        };
    }, []);

    // NOTE: AnimatePresence is effectively active because we return the motion.div conditionally.
    // However, to ensure the exit animation plays fully before the component is unmounted by React state in parent (if any),
    // we should ideally control it here. But since we return null below, we need to wrap content in AnimatePresence.

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="loading-screen"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-[#FFF8DC] flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Background Pattern: Mandala / Kolam representing Harmony */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none">
                        <motion.svg
                            viewBox="0 0 100 100"
                            className="w-[150vmax] h-[150vmax]"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                        >
                            {/* Simplified Mandala Paths - Darker stroke for light bg */}
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#800020" strokeWidth="0.5" />
                            <circle cx="50" cy="50" r="30" fill="none" stroke="#800020" strokeWidth="0.5" />
                            <circle cx="50" cy="50" r="20" fill="none" stroke="#800020" strokeWidth="0.5" />
                            {[...Array(12)].map((_, i) => (
                                <path
                                    key={i}
                                    d={`M50 50 L${50 + 45 * Math.cos(i * Math.PI / 6)} ${50 + 45 * Math.sin(i * Math.PI / 6)}`}
                                    stroke="#800020"
                                    strokeWidth="0.2"
                                />
                            ))}
                            {[...Array(8)].map((_, i) => (
                                <circle
                                    key={`petal-${i}`}
                                    cx={50 + 25 * Math.cos(i * Math.PI / 4)}
                                    cy={50 + 25 * Math.sin(i * Math.PI / 4)}
                                    r="10"
                                    fill="none"
                                    stroke="#800020"
                                    strokeWidth="0.3"
                                />
                            ))}
                        </motion.svg>
                    </div>

                    {/* "Breathing" Animation Layer for Calmness */}
                    <motion.div
                        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-radial from-[#D4AF37]/10 to-transparent pointer-events-none"
                    />

                    {/* Golden Particles moving upwards (Hope rising) */}
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: "100vh", x: Math.random() * 100 + "vw", opacity: 0 }}
                            animate={{ y: "-10vh", opacity: [0, 1, 0] }}
                            transition={{
                                duration: 4 + Math.random() * 6,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                                ease: "linear"
                            }}
                            className="absolute w-1.5 h-1.5 bg-[#D4AF37] rounded-full blur-[1px]"
                        />
                    ))}

                    <div className="relative z-10 flex flex-col items-center justify-center">

                        {/* Central Brain/Heart/Growth Symbolism */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-12">
                            {/* Ring representing "Community Circle" */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border border-[#800020]/10 rounded-full"
                            />

                            {/* Inner Ring representing "Inner Self" */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-8 border border-[#D4AF37]/20 rounded-full"
                            />

                            {/* Progress with Leaf/Growth Cap */}
                            <svg className="absolute inset-0 -rotate-90 w-full h-full">
                                <circle
                                    cx="50%" cy="50%" r="48%"
                                    fill="none"
                                    stroke="#E6DFc8"
                                    strokeWidth="2"
                                />
                                <motion.circle
                                    cx="50%" cy="50%" r="48%"
                                    fill="none"
                                    stroke="#800020"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 5.5, ease: "easeInOut" }}
                                />
                            </svg>

                            {/* Mascot Breathing - "Life" */}
                            <motion.div
                                className="relative w-32 h-32 md:w-40 md:h-40 z-20"
                                animate={{ y: [-5, 5, -5], scale: [0.95, 1.05, 0.95] }}
                                transition={{
                                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" } // Breathing rhythm
                                }}
                            >
                                <motion.img
                                    src="/images/brand/mascot.svg"
                                    alt="Dhriti Mascot"
                                    className="w-full h-full object-contain drop-shadow-xl"
                                />
                            </motion.div>
                        </div>

                        {/* Typography with Malayalam/Indian touch (font style handling) */}
                        <div className="text-center space-y-6">
                            <motion.h1
                                initial={{ opacity: 0, letterSpacing: "1em", y: 20 }}
                                animate={{ opacity: 1, letterSpacing: "0.2em", y: 0 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="text-5xl md:text-7xl font-bold text-[#800020] font-serif tracking-widest relative"
                            >
                                DHRITI
                            </motion.h1>

                            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#800020]/30 to-transparent mx-auto relative">
                                <motion.div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#800020] rotate-45"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                />
                            </div>

                            <div className="h-8 overflow-hidden relative w-full flex justify-center items-center">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={wordIndex}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -20, opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="text-[#800020]/70 text-lg uppercase tracking-[0.3em] font-light"
                                    >
                                        {INSPIRING_WORDS[wordIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
