// components/FloatingButtons.tsx
"use client";

import Image from "next/image";

export default function FloatingButtons() {
  const phoneNumber = "+919133196080";

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      {/* Call Button - Above */}
      <a
        href={`tel:${phoneNumber}`}
        title="Call JaiMax Support - Get Instant Help"
      >
        <div className="w-12 h-12 md:w-14 md:h-14 bg-teal-500 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 md:h-7 md:w-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
      </a>

      {/* WhatsApp Button - Below */}
      <a
        href="https://api.whatsapp.com/send?phone=9133196080&text=Hi caregiver!!! can you help for me....."
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with Jaimax Support on WhatsApp - Get Instant Help"
      >
        <Image
          src="/whatsup copy.svg"
          width={60}
          height={60}
          alt="WhatsApp"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        />
      </a>
    </div>
  );
}