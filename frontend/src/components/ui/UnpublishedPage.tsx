import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface UnpublishedPageProps {
  pageTitle?: string
}

export default function UnpublishedPage({ pageTitle }: UnpublishedPageProps) {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 relative overflow-hidden bg-brand-dark">
      {/* Background radial gradients for dynamic aesthetic look */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-teal/10 rounded-full blur-[140px] pointer-events-none animate-pulse duration-1000" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center relative z-10 max-w-xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono tracking-widest uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>Currently Unpublished</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-display font-700 tracking-tight text-white mb-4">
          {pageTitle ? `${pageTitle} is Offline` : 'Page Temporarily Unavailable'}
        </h1>

        <p className="text-white/60 font-sans text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">
          This section is currently unpublished or undergoing maintenance. Please check back shortly or explore our other works and capabilities.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/" className="btn-primary group inline-flex items-center gap-2">
            <svg 
              className="w-4 h-4 transition-transform group-hover:-translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Home</span>
          </Link>

          <Link to="/contact" className="btn-outline text-sm">
            <span>Contact Us</span>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
