"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const ASCII_BANNER = `
    ____                            __  ______
   / __ \\_________  ____ ___  ____ / /_/ ____/
  / /_/ / ___/ __ \\/ __  __ \\/ __ / __/ /     
 / ____/ /  / /_/ / / / / / / /_/ / /_/ /___  
/_/   /_/   \\____/_/ /_/ /_/ .___/\\__/\\____/  
                          /_/                 
`;

// Componente TerminalHero integrado
function TerminalHero() {
  const [isCompiling, setIsCompiling] = useState(false);
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const [step, setStep] = useState(0);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [outputLines]);

  const handleCompile = () => {
    if (isCompiling) return;
    setIsCompiling(true);
    setOutputLines([]);
    setStep(1);

    const simulationSteps = [
      { delay: 400, text: "> INICIANDO COMPILADOR PROMPTC v0.1.0-alpha..." },
      { delay: 1000, text: "> INTERCEPTANDO REQUEST: Local-First Mode Activado" },
      { delay: 1800, text: "> RUTEO SEGURO: Conectando a nodo MacMini vía Tailscale (100.90.6.101)... [OK]" },
      { delay: 2400, text: "> INYECTANDO PLANTILLA: PROMPTC_BANCA_RIESGO" },
      { delay: 3000, text: "> RESOLVIENDO VARIABLES: {entidad: 'Banco Nacional Chile', tipo_fraude: 'Account Takeover'}" },
      { delay: 3800, text: "> APLICANDO CONSTRAINTS: CMF Circular 3.459 + PCI-DSS v4.0" },
      { delay: 4500, text: "> COMPILACIÓN COMPLETADA. OUTPUT DETERMINISTA GENERADO:" },
      { delay: 5000, text: "---------------------------------------------------" },
      { delay: 5200, text: "### ROL\nOficial de Cumplimiento AML certificado CAMS" },
      { delay: 5600, text: "### CONTEXTO REGULATORIO\nEntidad: Banco Nacional Chile\nRegulación: CMF Chile Circular 3.459 + Ley 19.913 AML" },
      { delay: 6200, text: "### TAREA COMPILADA\nAnalizar riesgo crítico de Account Takeover en transferencias Swift sobre USD 50.000, clasificando vectores de riesgo y brechas PCI-DSS." },
      { delay: 6800, text: "### RESTRICCIONES ACTIVAS\n- No inventar cifras regulatorias.\n- Referenciar artículos específicos de la CMF.\n- Procesamiento 100% local (Soberanía de Datos garantizada)." },
      { delay: 7200, text: "---------------------------------------------------" },
      { delay: 7500, text: "> SESIÓN SEGURA CERRADA. READY." }
    ];

    let accumulatedDelay = 0;
    simulationSteps.forEach(({ delay, text }, index) => {
      accumulatedDelay = delay;
      setTimeout(() => {
        setOutputLines((prev) => [...prev, text]);
        if (index === simulationSteps.length - 1) {
          setIsCompiling(false);
          setStep(2);
        }
      }, accumulatedDelay);
    });
  };

  return (
    <div className="w-full mb-16 mt-8 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Efecto CRT local al componente */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-40"></div>
      
      <div className="z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* PANEL IZQUIERDO: Input */}
        <div className="border border-cyan-500/50 bg-black/60 p-5 shadow-[inset_0_0_15px_rgba(6,182,212,0.15)] flex flex-col">
          <h2 className="text-lg font-bold mb-4 border-b border-cyan-500/30 pb-2 text-cyan-400">INPUT // SPANGLISH AMBIGUO</h2>
          
          <div className="space-y-4 flex-grow text-sm">
            <div>
              <label className="block text-xs text-zinc-500 mb-1">PLANTILLA INDUSTRIAL</label>
              <select className="w-full bg-zinc-900 border border-zinc-700 text-cyan-300 p-2 outline-none cursor-not-allowed" disabled>
                <option>PROMPTC_BANCA_RIESGO</option>
              </select>
            </div>
            
            <div>
              <label className="block text-xs text-zinc-500 mb-1">PROMPT INICIAL (OPERADOR)</label>
              <textarea 
                readOnly
                className="w-full h-24 bg-zinc-900 border border-zinc-700 text-cyan-300 p-3 outline-none resize-none"
                defaultValue={"Oye, analízame un riesgo de fraude Swift porfa, la cuenta es del Banco Nacional Chile y el tipo es Account Takeover. Que quede bien legal."}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-zinc-500 mb-1">TARGET NODE</label>
                <div className="bg-zinc-900 border border-zinc-700 p-2 text-xs text-cyan-300">Local (100.90.6.101)</div>
              </div>
              <div>
                <label className="block text-xs text-zinc-500 mb-1">COMPLIANCE</label>
                <div className="bg-zinc-900 border border-zinc-700 p-2 text-xs text-cyan-300">CMF / PCI-DSS</div>
              </div>
            </div>
          </div>

          <button 
            onClick={handleCompile}
            disabled={isCompiling}
            className={`mt-6 w-full py-3 text-black font-bold uppercase tracking-widest transition-all duration-300 ${
              isCompiling 
                ? 'bg-cyan-800 cursor-not-allowed opacity-70' 
                : 'bg-cyan-500 hover:bg-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] cursor-pointer'
            }`}
          >
            {isCompiling ? 'COMPILANDO...' : 'EJECUTAR COMPILADOR [ENTER]'}
          </button>
        </div>

        {/* PANEL DERECHO: Output */}
        <div className="border border-cyan-500/50 bg-black/80 p-5 shadow-[inset_0_0_15px_rgba(6,182,212,0.15)] relative flex flex-col h-[400px]">
          <h2 className="text-lg font-bold mb-4 border-b border-cyan-500/30 pb-2 flex justify-between text-cyan-400">
            <span>OUTPUT // DETERMINISTIC PROMPT</span>
            <span className={isCompiling ? "animate-pulse text-yellow-500" : "text-zinc-500"}>
              {isCompiling ? 'RUNNING' : 'IDLE'}
            </span>
          </h2>
          
          <div className="flex-grow overflow-y-auto text-xs md:text-sm space-y-2 pr-2 custom-scrollbar text-green-400">
            {outputLines.length === 0 && !isCompiling && (
              <div className="text-zinc-600 italic">Esperando ejecución del compilador...</div>
            )}
            
            {outputLines.map((line, i) => (
              <div key={i} className="whitespace-pre-wrap leading-relaxed">
                {line}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #09090b; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #06b6d4; }
      `}</style>
    </div>
  );
}

// Layout Principal Integrado
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-green-500 font-mono p-4 flex flex-col items-center selection:bg-cyan-500 selection:text-black">
      {/* Navegación Superior Estática (GitHub) */}
      <nav className="w-full max-w-5xl flex justify-end mb-4">
        <a 
          href="https://github.com/andesdevroot/promptc" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-300 hover:text-white hover:border-cyan-500 transition-all group"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current group-hover:fill-cyan-500 transition-colors" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          [ GitHub / Código Fuente ]
        </a>
      </nav>

      {/* Centelleo del Banner */}
      <pre className="text-[10px] md:text-xs lg:text-sm mb-8 animate-pulse text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] leading-tight text-center">
        {ASCII_BANNER}
      </pre>

      <div className="max-w-5xl w-full">
        
        {/* Navbar Global PROMPTC */}
        <nav className="w-full flex items-center justify-between border-b border-zinc-900 pb-4 mb-10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-500 animate-pulse"></div>
            <span className="text-white font-bold tracking-tighter uppercase">PROMPTC_</span>
            <span className="text-[10px] text-zinc-500 border border-zinc-800 px-1 ml-2">v0.1.0</span>
          </div>
          
          <div className="flex gap-6">
            <Link 
              href="/docs" 
              className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors uppercase tracking-widest border-b-2 border-transparent hover:border-cyan-500 pb-1"
            >
              Docs
            </Link>
            <Link 
              href="/devlog" 
              className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors uppercase tracking-widest border-b-2 border-transparent hover:border-cyan-500 pb-1"
            >
              DevLog
            </Link>
          </div>
        </nav>

        {/* 1. ANCLA: Header con Propuesta de Valor Estratégica */}
        <header className="border-l-4 border-cyan-500 pl-4 mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter">
            PROMPTC <span className="text-cyan-500">MCP Engine</span>
          </h1>
          <p className="text-gray-400 mt-2 text-sm md:text-base max-w-3xl leading-relaxed">
            El primer compilador de prompts determinista de LATAM para industrias críticas. 
            <span className="text-white font-semibold"> Integra Claude Desktop</span> con nodos locales <span className="text-white font-semibold">Ollama</span> vía Tailscale, garantizando soberanía de datos y compliance industrial absoluto.
          </p>
        </header>

        {/* 2. PRODUCTO: Simulador Interactivo "Sin Anestesia" */}
        <TerminalHero />

        {/* 3. INSTALACIÓN: Sección de Instalación (Binario) */}
        <div className="space-y-12">
          <section className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-cyan-500 text-black text-[10px] px-2 font-bold flex items-center gap-2">
              STABLE_V0.1.0-ALPHA
            </div>
            <p className="text-zinc-500 mb-4 text-xs font-bold uppercase tracking-wider">{'//'} 1. Instalación Global</p>
            
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3 bg-black p-4 border border-zinc-700 overflow-x-auto">
                <span className="text-pink-500">$</span>
                <code className="text-cyan-300 text-sm whitespace-nowrap">
                  curl -fsSL https://raw.githubusercontent.com/andesdevroot/promptc/main/install.sh | bash
                </code>
              </div>
              
              {/* Badges de Plataformas */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-1 border border-zinc-700">✓ macOS (Apple Silicon M1/M2/M3)</span>
                <span className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-1 border border-zinc-700">✓ macOS (Intel x86_64)</span>
                <span className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-1 border border-zinc-700">✓ Linux (AMD64 / ARM64)</span>
              </div>
            </div>
          </section>

          {/* 4. CONFIGURACIÓN: Sección de Configuración MCP */}
          <section className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-sm relative overflow-hidden">
            <p className="text-zinc-500 mb-4 text-xs font-bold uppercase tracking-wider">{'//'} 2. Integración MCP (Claude Desktop / Cursor)</p>
            <p className="text-gray-400 text-sm mb-4">
              Añade el servidor PROMPTC a tu archivo <code className="text-green-400 bg-black px-1 py-0.5 rounded border border-zinc-700">claude_desktop_config.json</code> para habilitar la orquestación local:
            </p>
            <div className="bg-black p-4 border border-zinc-700 overflow-x-auto">
              <pre className="text-cyan-300 text-sm">
{`{
  "mcpServers": {
    "PROMPTC": {
      "command": "/usr/local/bin/promptc",
      "args": [],
      "env": {
        "PROMPTC_MACMINI_IP": "TU_IP_TAILSCALE"
      }
    }
  }
}`}
              </pre>
            </div>
          </section>

          {/* 5. FEATURES: Value Proposition Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900/30 border border-zinc-800 p-6 hover:border-cyan-500 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-cyan-400 mb-2 font-bold flex items-center gap-2">
                <span className="text-zinc-600 group-hover:text-cyan-500 transition-colors">{'//'}</span> DATA_SOVEREIGNTY
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Arquitectura "Air-Gapped". La inferencia pesada se enruta vía túneles privados (Tailscale) hacia nodos dedicados (Ollama/vLLM). Cero data leaks a nubes públicas.
              </p>
            </div>
            <div className="bg-zinc-900/30 border border-zinc-800 p-6 hover:border-green-500 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-green-400 mb-2 font-bold flex items-center gap-2">
                <span className="text-zinc-600 group-hover:text-green-500 transition-colors">{'//'}</span> COMPLIANCE_INDUSTRIAL
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Plantillas deterministas precargadas para Banca (CMF), Minería (Sernageomin) y Legal. Orquestación autónoma directamente en el IDE.
              </p>
            </div>
            <div className="bg-zinc-900/30 border border-zinc-800 p-6 hover:border-pink-500 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-pink-500 mb-2 font-bold flex items-center gap-2">
                <span className="text-zinc-600 group-hover:text-pink-500 transition-colors">{'//'}</span> MCP_PROTOCOL
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Servidor JSON-RPC 2.0 nativo en Go. Las IAs como Claude pueden llamar a herramientas de validación de forma autónoma a través de stdio.
              </p>
            </div>
            <div className="bg-zinc-900/30 border border-zinc-800 p-6 hover:border-yellow-500 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-yellow-500 mb-2 font-bold flex items-center gap-2">
                <span className="text-zinc-600 group-hover:text-yellow-500 transition-colors">{'//'}</span> ANTI_SPANGLISH
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Motor de validación estricto que elimina alucinaciones idiomáticas, forzando terminología técnica nativa en español para reportes formales.
              </p>
            </div>
          </div>

          <footer className="pt-20 pb-10 text-center space-y-2 border-t border-zinc-900">
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest flex flex-col items-center gap-2">
              <span>Engineered by Cesar Rivas - Senior Software Engineer</span>
              <span>Chile 🇨🇱 • Open Source (MIT)</span>
              <span className="text-cyan-500/50 mt-2">Prompt Engineering is Software Engineering.</span>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}