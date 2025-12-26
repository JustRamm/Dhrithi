export function Footer() {
    return (
        <footer className="bg-[#800020] text-white/90 py-12 border-t border-[#D4AF37]/30">
            <div className="container mx-auto px-6 flex flex-col items-center">
                {/* Minimal Logo */}
                <h3 className="font-serif text-3xl text-[#D4AF37] tracking-[0.2em] mb-2 uppercase drop-shadow-sm">Dhriti</h3>

                {/* Subtle Tagline */}
                <p className="text-sm font-light text-white/70 italic tracking-wide mb-8">
                    Elevate yourself by yourself
                </p>

                {/* Single Elegant Line */}
                <div className="w-16 h-px bg-[#D4AF37]/40 mb-8" />

                {/* Copyright info - Clean and Simple */}
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs text-white/50 font-medium tracking-widest uppercase">
                    <p>&copy; 2026 Mind Empowered</p>
                    <span className="hidden md:block w-1 h-1 bg-[#D4AF37]/50 rounded-full" />
                    <p>Kerala, India</p>
                </div>
            </div>
        </footer>
    );
}
