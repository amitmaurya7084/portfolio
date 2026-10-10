import { HiX } from "react-icons/hi";

export default function Modal({ open, onClose, title, meta, description, extra }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-4"
      onClick={onClose}
    >
      <div
        className="glass-card max-w-lg w-full max-h-[85vh] overflow-y-auto relative hover:translate-y-0 hover:shadow-none"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-muted hover:text-brand-primary text-2xl"
          aria-label="Close"
        >
          <HiX />
        </button>
        <h2 className="text-xl sm:text-2xl font-display font-bold mb-2 bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent pr-8">
          {title}
        </h2>
        {meta && <p className="text-brand-muted text-sm italic mb-4">{meta}</p>}
        <div className="text-brand-text/90 text-sm leading-relaxed">{description}</div>
        {extra && <div className="mt-5">{extra}</div>}
      </div>
    </div>
  );
}
