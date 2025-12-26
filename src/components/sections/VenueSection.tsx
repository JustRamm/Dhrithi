import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Building2, Users } from "lucide-react";

export function VenueSection() {
    const [isMapLoaded, setIsMapLoaded] = useState(false);
    const venueRef = useRef(null);
    const { scrollYProgress: venueScrollProgress } = useScroll({
        target: venueRef,
        offset: ["start end", "center center"]
    });

    const mapRotateX = useTransform(venueScrollProgress, [0, 1], [60, 0]);
    const mapScale = useTransform(venueScrollProgress, [0, 1], [0.8, 1]);
    const mapOpacity = useTransform(venueScrollProgress, [0, 0.8], [0, 1]);

    useEffect(() => {
        // Fallback for map loading state
        const timer = setTimeout(() => setIsMapLoaded(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="venue" ref={venueRef} className="relative py-20 md:py-32 bg-[#F5F5DC] overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-[#800020]/10 text-[#800020] font-semibold text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Historic Location</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#800020] mb-6">
                        The Venue: Fort Kochi
                    </h2>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
                        Immerse yourself in history and healing at the cultural heart of Kerala.
                        <span className="block mt-2 font-semibold text-[#D4AF37]">
                            *Precise festival grounds to be disclosed soon
                        </span>
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto perspective-1000">
                    {/* Map Container - Unfolds on Scroll */}
                    <motion.div
                        style={{
                            rotateX: mapRotateX,
                            scale: mapScale,
                            opacity: mapOpacity,
                            perspective: 1000,
                            transformStyle: "preserve-3d"
                        }}
                        className="w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group origin-top"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.68886367746!2d76.24233305!3d9.9634996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b086d2c1c696e59%3A0xe5a20af1b6a2df84!2sFort%20Kochi%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700"
                            onLoad={() => setIsMapLoaded(true)}
                        />
                        {!isMapLoaded && (
                            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center z-10">
                                <MapPin className="w-12 h-12 text-gray-300 animate-bounce" />
                            </div>
                        )}
                        <div className="absolute inset-0 pointer-events-none border-[12px] border-[#800020]/10" />
                    </motion.div>

                    {/* Location Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="flex gap-6">
                            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
                                <Building2 className="w-8 h-8 text-[#800020]" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#800020] mb-2">Heritage Atmosphere</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Fort Kochi's colonial architecture and serene coastline provide the perfect backdrop for reflection and connection.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
                                <Users className="w-8 h-8 text-[#800020]" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#800020] mb-2">Easy Accessibility</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Well-connected by road and ferry services. Ample parking spaces will be identified near the venue.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
