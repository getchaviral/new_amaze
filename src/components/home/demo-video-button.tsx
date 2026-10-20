"use client";

import { useEffect, useRef, useState } from "react";

export function DemoVideoButton() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="btn btn-outlineGold"
        onClick={() => setIsOpen(true)}
      >
        See demo video
      </button>
      <dialog
        ref={dialogRef}
        aria-label="AMAZE demo video"
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setIsOpen(false);
        }}
        className="m-auto w-[min(92vw,64rem)] max-w-none overflow-visible border-0 bg-transparent p-0 text-white backdrop:bg-black/80"
      >
        <div className="relative rounded-2xl bg-black p-2 shadow-2xl sm:p-3">
          <button
            type="button"
            autoFocus
            aria-label="Close demo video"
            onClick={() => setIsOpen(false)}
            className="absolute -top-3 -right-3 z-10 flex size-10 items-center justify-center rounded-full bg-white text-2xl leading-none text-ink shadow-lg hover:bg-cream"
          >
            &times;
          </button>
          {isOpen && (
            <video
              className="aspect-video max-h-[82vh] w-full rounded-xl bg-black"
              src="/demo-video.mp4"
              controls
              autoPlay
              playsInline
              aria-label="AMAZE AI booth design process demo"
            />
          )}
        </div>
      </dialog>
    </>
  );
}
