"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 dark:bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="rounded-2xl overflow-hidden shadow-2xl border border-violet-400/20 dark:border-violet-500/20 w-full h-[90vh] max-w-4xl flex flex-col"
            style={{ background: "var(--card-bg)" }}
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-black/8 dark:border-white/10" style={{ background: "var(--card-bg)" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-500/20 border border-violet-300 dark:border-violet-500/25 flex items-center justify-center">
                  <FileText size={18} className="text-violet-600 dark:text-violet-300" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Resume</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-500">Jordan Bishop</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors p-1"
              >
                <X size={18} />
              </button>
            </div>

            {/* PDF Preview */}
            <div className="flex-1 overflow-hidden bg-slate-100 dark:bg-slate-900/30">
              <iframe
                src="/resume.pdf#toolbar=0"
                className="w-full h-full border-0"
                title="Resume Preview"
              />
            </div>

            {/* Download Button */}
            <div className="p-4 border-t border-black/8 dark:border-white/10 flex gap-3" style={{ background: "var(--card-bg)" }}>
              <a
                href="/resume.pdf"
                download="Resume.pdf"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 text-white px-5 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/20 dark:shadow-violet-900/40"
              >
                <Download size={16} />
                Download PDF
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}