// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import Link from 'next/link';

// export default function NotFound() {
//   const [lines, setLines] = useState<string[]>([]);
//   const [currentLine, setCurrentLine] = useState(0);
//   const terminalRef = useRef<HTMLDivElement>(null);
//   const cursorRef = useRef<HTMLSpanElement>(null);

//   const terminalLines = [
//     '$ cd /pages/requested-url',
//     '> Searching directory...',
//     '> ERROR: Directory not found',
//     '> Status Code: 404',
//     '> Running diagnostic...',
//     '> Page does not exist in database',
//     '> Suggestion: Return to homepage',
//     '$ _'
//   ];

//   useEffect(() => {
//     // Typing effect
//     const typeLines = () => {
//       if (currentLine < terminalLines.length) {
//         const timer = setTimeout(() => {
//           setLines(prev => [...prev, terminalLines[currentLine]]);
//           setCurrentLine(prev => prev + 1);
//         }, 400);
//         return () => clearTimeout(timer);
//       }
//     };

//     typeLines();
//   }, [currentLine]);

//   useEffect(() => {
//     // Cursor blink
//     gsap.to(cursorRef.current, {
//       opacity: 0,
//       duration: 0.5,
//       repeat: -1,
//       yoyo: true,
//     });

//     // Terminal glow
//     gsap.to(terminalRef.current, {
//       boxShadow: '0 0 60px rgba(255, 50, 51, 0.3)',
//       duration: 2,
//       repeat: -1,
//       yoyo: true,
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4 relative overflow-hidden">
//       {/* Background Grid */}
//       <div className="absolute inset-0 opacity-10">
//         <div 
//           className="h-full w-full"
//           style={{
//             backgroundImage: `linear-gradient(#ff3233 1px, transparent 1px), linear-gradient(90deg, #ff3233 1px, transparent 1px)`,
//             backgroundSize: '50px 50px'
//           }}
//         />
//       </div>

//       {/* Scan Line Effect */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div 
//           className="absolute inset-0 opacity-5"
//           style={{
//             background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
//           }}
//         />
//       </div>

//       <div className="relative z-10 w-full max-w-3xl">
//         {/* Terminal Window */}
//         <div 
//           ref={terminalRef}
//           className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden shadow-2xl"
//         >
//           {/* Terminal Header */}
//           <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 rounded-full bg-[#ff3233]" />
//               <div className="w-3 h-3 rounded-full bg-yellow-500" />
//               <div className="w-3 h-3 rounded-full bg-green-500" />
//             </div>
//             <div className="text-gray-400 text-sm font-mono">
//               digitallyvibe@server: ~/404
//             </div>
//             <div className="text-gray-500 text-xs">bash</div>
//           </div>

//           {/* Terminal Content */}
//           <div className="p-6 font-mono text-sm sm:text-base min-h-[300px]">
//             {lines.map((line, index) => (
//               <div 
//                 key={index} 
//                 className={`mb-2 ${
//                   line.includes('ERROR') ? 'text-[#ff3233]' : 
//                   line.includes('$') ? 'text-green-400' : 
//                   line.includes('>') ? 'text-gray-400' : 
//                   'text-white'
//                 }`}
//               >
//                 {line}
//                 {index === lines.length - 1 && line === '$ _' && (
//                   <span ref={cursorRef} className="inline-block w-2 h-5 bg-[#ff3233] ml-1 -mb-1" />
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Terminal Footer */}
//           <div className="bg-gray-800 px-6 py-4 border-t border-gray-700">
//             <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
//               <div className="text-gray-500 text-sm font-mono">
//                 <span className="text-[#ff3233]">●</span> Error 404 | Page Not Found
//               </div>
//               <div className="flex gap-3">
//                 <Link
//                   href="/"
//                   className="bg-[#ff3233] hover:bg-[#e02d2e] text-white px-6 py-2 rounded-lg font-mono text-sm transition-all hover:scale-105 flex items-center gap-2"
//                 >
//                   <span>cd /home</span>
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                   </svg>
//                 </Link>
//                 <button
//                   onClick={() => window.history.back()}
//                   className="border border-gray-600 text-gray-300 hover:border-[#ff3233] hover:text-[#ff3233] px-6 py-2 rounded-lg font-mono text-sm transition-all"
//                 >
//                   cd ..
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Keyboard Shortcut Hint */}
//         <div className="mt-6 text-center">
//           <p className="text-gray-600 text-sm font-mono">
//             Press <kbd className="px-2 py-1 bg-gray-800 rounded text-[#ff3233] mx-1">ESC</kbd> or 
//             <kbd className="px-2 py-1 bg-gray-800 rounded text-[#ff3233] mx-1">CTRL + H</kbd> to go home
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// } 



'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function NotFound() {
  const [activeTab, setActiveTab] = useState('error.tsx');
  const editorRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { name: 'error.tsx', icon: '⚛️' },
    { name: 'console', icon: '⚡' },
    { name: 'network', icon: '🌐' },
  ];

  const codeContent = {
    'error.tsx': [
      { num: 1, code: "import { useRouter } from 'next/navigation';", color: 'text-purple-400' },
      { num: 2, code: '', color: '' },
      { num: 3, code: 'export default function NotFoundPage() {', color: 'text-blue-400' },
      { num: 4, code: '  const router = useRouter();', color: 'text-white' },
      { num: 5, code: '', color: '' },
      { num: 6, code: '  // ❌ Error: Page not found', color: 'text-[#ff3233]' },
      { num: 7, code: '  throw new Error("404: Resource not found");', color: 'text-[#ff3233]' },
      { num: 8, code: '', color: '' },
      { num: 9, code: '  // ✅ Solution: Navigate home', color: 'text-green-400' },
      { num: 10, code: '  return router.push("/");', color: 'text-green-400' },
      { num: 11, code: '}', color: 'text-blue-400' },
    ],
    'console': [
      { num: 1, code: '[Error] GET /undefined-page 404 (Not Found)', color: 'text-[#ff3233]' },
      { num: 2, code: '[Warning] The requested URL was not found on this server', color: 'text-yellow-400' },
      { num: 3, code: '[Info] Redirecting to error handler...', color: 'text-blue-400' },
      { num: 4, code: '[Debug] Stack trace:', color: 'text-gray-500' },
      { num: 5, code: '  at NotFoundPage (app/not-found.tsx:7:9)', color: 'text-gray-500' },
      { num: 6, code: '  at renderWithHooks (react-dom.js:1234:22)', color: 'text-gray-500' },
    ],
    'network': [
      { num: 1, code: 'Request URL: https://digitallyvibe.com/unknown', color: 'text-white' },
      { num: 2, code: 'Request Method: GET', color: 'text-white' },
      { num: 3, code: 'Status Code: 404 Not Found', color: 'text-[#ff3233]' },
      { num: 4, code: 'Remote Address: 127.0.0.1:3000', color: 'text-gray-400' },
      { num: 5, code: 'Response Time: 23ms', color: 'text-green-400' },
    ],
  };

  useEffect(() => {
    gsap.fromTo(
      editorRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );

    // Typing cursor blink
    gsap.to('.cursor-blink', {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center p-4">
      {/* VS Code Style Editor */}
      <div 
        ref={editorRef}
        className="w-full max-w-4xl bg-[#252526] rounded-xl overflow-hidden shadow-2xl border border-gray-700"
      >
        {/* Title Bar */}
        <div className="bg-[#323233] px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="text-gray-400 text-sm font-mono">
            404-error — DigitallyVibe
          </div>
          <div className="w-16" />
        </div>

        {/* Tabs */}
        <div className="bg-[#2d2d2d] flex border-b border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`px-4 py-2 text-sm font-mono flex items-center gap-2 border-r border-gray-700 transition-colors ${
                activeTab === tab.name
                  ? 'bg-[#1e1e1e] text-white border-t-2 border-t-[#ff3233]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Editor Content */}
        <div className="flex">
          {/* Line Numbers */}
          <div className="bg-[#1e1e1e] p-4 text-right border-r border-gray-800 select-none">
            {codeContent[activeTab as keyof typeof codeContent].map((line) => (
              <div key={line.num} className="text-gray-600 text-sm font-mono leading-6">
                {line.num}
              </div>
            ))}
          </div>

          {/* Code */}
          <div className="flex-1 p-4 overflow-x-auto">
            <pre className="font-mono text-sm leading-6">
              {codeContent[activeTab as keyof typeof codeContent].map((line) => (
                <div key={line.num} className={line.color || 'text-gray-300'}>
                  {line.code || '\u00A0'}
                  {line.num === 7 && activeTab === 'error.tsx' && (
                    <span className="cursor-blink inline-block w-2 h-4 bg-white ml-1" />
                  )}
                </div>
              ))}
            </pre>
          </div>

          {/* Minimap (decorative) */}
          <div className="w-20 bg-[#1e1e1e] border-l border-gray-800 p-2 hidden lg:block">
            <div className="space-y-1">
              {codeContent[activeTab as keyof typeof codeContent].map((_, i) => (
                <div 
                  key={i} 
                  className="h-1 bg-gray-700 rounded"
                  style={{ width: `${Math.random() * 50 + 30}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="bg-[#007acc] px-4 py-1 flex items-center justify-between text-white text-xs">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="text-red-300">✕</span> 1 Error
            </span>
            <span className="flex items-center gap-1">
              <span className="text-yellow-300">⚠</span> 0 Warnings
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>TypeScript React</span>
            <span>UTF-8</span>
            <span>Ln 7, Col 42</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-[#252526] border-t border-gray-700 p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="text-gray-400 text-sm">
              <span className="text-[#ff3233]">Error 404:</span> The requested page doesn't exist in the codebase.
            </div>
            <div className="flex gap-3">
              <Link
                href="/"
                className="bg-[#ff3233] hover:bg-[#e02d2e] text-white px-6 py-2 rounded-lg font-mono text-sm transition-all hover:scale-105 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Go Home.
              </Link>
              <button
                onClick={() => window.history.back()}
                className="border border-gray-600 text-gray-300 hover:border-[#ff3233] hover:text-white px-6 py-2 rounded-lg font-mono text-sm transition-all"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}