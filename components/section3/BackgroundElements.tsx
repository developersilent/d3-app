export default function BackgroundElements() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Dynamic gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-blue-500/8 via-blue-600/4 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-indigo-500/6 via-purple-600/3 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-cyan-500/4 via-teal-600/2 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Sophisticated grid system */}
      <div className="absolute inset-0 opacity-[0.008]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0),
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px, 20px 20px, 20px 20px",
          }}
        ></div>
      </div>

      {/* Floating geometric elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/20 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-indigo-400/25 rounded-full animate-ping delay-1000"></div>
    </div>
  );
}
