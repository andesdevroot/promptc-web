"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Terminal, Shield, Cpu, Zap, Github, ExternalLink, Copy, Check, BarChart3 } from 'lucide-react';

const ASCII_BANNER = `
    ____                            __  ______
   / __ \\_________  ____ ___  ____ / /_/ ____/
  / /_/ / ___/ __ \\/ __  __ \\/ __ / __/ /     
 / ____/ /  / /_/ / / / / / / /_/ / /_/ /___  
/_/   /_/   \\____/_/ /_/ /_/ .___/\\__/\\____/  
                          /_/                 
`;

function TerminalHero() {
  const [isCompiling, setIsCompiling] = useState(false);
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [outputLines]);

  const handleCompile = () => {
    if (isCompiling) return;
    setIsCompiling(true);
    setOutputLines([]);

    const simulationSteps = [
      { delay: 300, text: "> PROMPTC ENGINE v0.3.1 BOOT..." },
      { delay: 800, text: "> MODE: COMMUNITY_EDITION (Cloud-Optimized)" },
      { delay: 1400, text: "> CHECKING LOCAL NODE: mac-mini.local... [OFFLINE]" },
      { delay: 2000, text: "> FALLBACK: Activating Gemini Cloud Pipeline... [OK]" },
      { delay: 2600, text: "> ANALYZING PROMPT: Score=42/100 (Ambiguity Detected)" },
      { delay: 3200, text: "> COMPILING: Inyectando contexto industrial..." },
      { delay: 4000, text: "> OPTIMIZING: Latency=1.2s | Tokens=842" },
      { delay: 4600, text: "---------------------------------------------------" },
      { delay: 4800, text: "### ROLE\nSenior Backend Engineer / Cloud Architect" },
      { delay: 5200, text: "### TASK\nRefactorizar la capa de persistencia siguiendo principios SOLID y TDD..." },
      { delay: 5800, text: "### CONSTRAINTS\n- Zero-leak policy activa.\n- Output format: Deterministic Markdown." },
      { delay: 6200, text: "---------------------------------------------------" },
      { delay: 6500, text: "> DASHBOARD UPDATED: http://localhost:8080" },
      { delay: 6800, text: "> READY." }
    ];

    simulationSteps.forEach(({ delay, text }, index) => {
      setTimeout(() => {
        setOutputLines((prev) => [...prev, text]);
        if (index === simulationSteps.length - 1) setIsCompiling(false);
      }, delay);
    });
  };

  return (
    <div className="w-full mb-16 mt-8 relative flex flex-col items-center justify-center">
      <div className="z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <div className="border border-cyan-500/50 bg-black/60 p-5 shadow-[inset_0_0_15px_rgba(6,182,212,0.15)] flex flex-col backdrop-blur-sm">
          <h2 className="text-sm font-mono mb-4 border-b border-cyan-500/30 pb-2 text-cyan-400 uppercase tracking-widest font-bold">Input // Operator Context</h2>
          <div className="space-y-4 flex-grow text-sm">
            <div className="bg-zinc-900 border border-zinc-700 p-3 text-cyan-300 font-mono text-xs italic">
              "Oye, ayúdame a pasar a código limpio esta función de Go, que quede bien para un senior."
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono uppercase text-zinc-500">
              <div className="border border-zinc-800 p-2">Tier: Community</div>
              <div className="border border-zinc-800 p-2">Node: Gemini_Cloud</div>
            </div>
          </div>
          <button 
            onClick={handleCompile}
            disabled={isCompiling}
            className={`mt-6 py-4 font-bold uppercase tracking-[0.2em] text-xs transition-all ${
              isCompiling ? 'bg-cyan-900 text-cyan-500 cursor-not-allowed' : 'bg-cyan-500 text-black hover:bg-white cursor-pointer hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]'
            }`}
          >
            {isCompiling ? 'Processing...' : 'Compile Prompt'}
          </button>
        </div>

        <div className="border border-zinc-800 bg-black/80 p-5 font-mono relative flex flex-col h-[350px]">
          <div className="flex justify-between items-center mb-4 border-b border-zinc-800 pb-2">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Compiler_Output</span>
            <div className={`w-2 h-2 rounded-full ${isCompiling ? 'bg-yellow-500 animate-pulse' : 'bg-green-500 shadow-[0_0_8px_#22c55e]'}`}></div>
          </div>
          <div className="flex-grow overflow-y-auto text-xs space-y-1 text-green-400 custom-scrollbar">
            {outputLines.length === 0 && !isCompiling && <div className="text-zinc-700">_ SYSTEM_IDLE: Awaiting compilation...</div>}
            {outputLines.map((line, i) => <div key={i} className="leading-relaxed">{line}</div>)}
            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  
  // URL actualizada apuntando a "master"
  const installCmd = "curl -sSL https://raw.githubusercontent.com/andesdevroot/promptc/master/install.sh | bash";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-zinc-300 font-mono p-6 md:p-12 flex flex-col items-center selection:bg-cyan-500 selection:text-black">
      {/* Estilos Cyberpunk Globales */}
      <style jsx global>{`
        @keyframes neon-flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            text-shadow: 0 0 4px #22d3ee, 0 0 10px #22d3ee, 0 0 20px #22d3ee;
            opacity: 1;
          }
          20%, 24%, 55% {
            text-shadow: none;
            opacity: 0.5;
          }
        }
        .neon-text {
          animation: neon-flicker 3s infinite alternate;
          color: #22d3ee;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #09090b; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #22c55e; }
      `}</style>

      <div className="max-w-5xl w-full">
        <nav className="flex justify-between items-center mb-16 border-b border-zinc-900 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
            <span className="text-white font-black tracking-tighter text-xl">PROMPTC</span>
            <span className="bg-cyan-500/10 text-cyan-500 text-[9px] px-2 py-0.5 border border-cyan-500/20 rounded-full font-bold shadow-[0_0_10px_rgba(34,211,238,0.2)]">V0.3.1</span>
          </div>
          <div className="flex gap-8 items-center text-[11px] uppercase tracking-[0.2em]">
            <Link href="/docs" className="hover:text-cyan-400 transition-colors">Docs</Link>
            <Link href="/devlog" className="hover:text-cyan-400 transition-colors">DevLog</Link>
            <a href="https://github.com/andesdevroot/promptc" className="text-white bg-zinc-900 px-4 py-2 border border-zinc-800 hover:border-cyan-500 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">GitHub</a>
          </div>
        </nav>

        <section className="text-center mb-20">
          {/* ASCII Banner con efecto Cyberpunk */}
          <pre className="text-[8px] md:text-[10px] lg:text-xs mb-10 leading-tight inline-block text-left neon-text">
            {ASCII_BANNER}
          </pre>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
            Prompt Engineering is <br />
            <span className="text-cyan-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Software Engineering.</span>
          </h1>
          
          {/* --- COPY ACTUALIZADO Y VENDIBLE --- */}
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            PROMPTC es un compilador nativo en Go que garantiza soberanía de datos y determinismo industrial. <br className="hidden md:block" />
            <span className="inline-flex items-center gap-2 mt-4 mb-3 px-4 py-1.5 bg-cyan-950/30 border border-cyan-500/40 text-cyan-300 rounded-full font-semibold shadow-[0_0_15px_rgba(34,211,238,0.15)] text-xs md:text-sm">
              <Zap size={14} className="text-yellow-400" /> Plug & Play en Claude Desktop
            </span>
            <br className="hidden md:block" />
            <span className="inline-block mt-2">Instálalo en un solo comando para interceptar, validar y optimizar tus prompts directamente en tu IDE antes de la inferencia.</span>
          </p>
        </section>

        <div className="bg-zinc-900/40 border border-zinc-800 p-8 mb-20 rounded-lg backdrop-blur-sm relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
          <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-4 font-bold flex items-center gap-2">
            <Terminal size={12} className="text-cyan-500" /> Quick Installation (Mac / Linux)
          </p>
          <div className="flex items-center justify-between bg-black p-4 border border-zinc-700 rounded select-all font-mono text-sm shadow-inner">
            <code className="text-cyan-400 overflow-x-auto whitespace-nowrap mr-4 drop-shadow-[0_0_5px_rgba(34,211,238,0.4)]">
              {installCmd}
            </code>
            <button onClick={copyToClipboard} className="text-zinc-500 hover:text-white transition-colors p-2">
              {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
            </button>
          </div>
        </div>

        <TerminalHero />

        <div className="grid md:grid-cols-3 gap-1px bg-zinc-800 border border-zinc-800 mb-20">
          <Feature icon={<Shield size={20} />} title="Dual-Tier Privacy" desc="Community Mode vía Gemini Cloud o Enterprise Mode soberano vía Tailscale + Ollama." />
          <Feature icon={<BarChart3 size={20} />} title="Core Dashboard" desc="Observabilidad en tiempo real de tokens, latencia y logs de auditoría en el puerto 8080." />
          <Feature icon={<Zap size={20} />} title="Go Engine" desc="Binario estático sin dependencias. Integración nativa MCP para Claude Desktop y Cursor." />
        </div>

        <footer className="py-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-[10px] uppercase tracking-widest text-zinc-500">
            © 2026 Cesar Rivas • Elqui Valley, Chile 🇨🇱
          </div>
          <div className="flex gap-6 text-zinc-400">
            <Github size={18} className="hover:text-cyan-500 transition-colors cursor-pointer" />
            <Zap size={18} className="hover:text-yellow-500 transition-colors cursor-pointer" />
          </div>
        </footer>
      </div>
    </main>
  );
}

function Feature({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-[#050505] p-8 hover:bg-zinc-900/50 transition-all group">
      <div className="text-cyan-500 mb-4 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-all">{icon}</div>
      <h3 className="text-white font-bold text-sm mb-2 uppercase tracking-tighter">{title}</h3>
      <p className="text-xs text-zinc-500 leading-relaxed">{desc}</p>
    </div>
  );
}