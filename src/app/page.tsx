import React from 'react';

const ASCII_BANNER = `
    ____                            __  ______
   / __ \\_________  ____ ___  ____ / /_/ ____/
  / /_/ / ___/ __ \\/ __  __ \\/ __ / __/ /     
 / ____/ /  / /_/ / / / / / / /_/ / /_/ /___  
/_/   /_/   \\____/_/ /_/ /_/ .___/\\__/\\____/  
                          /_/                 
`;

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-green-500 font-mono p-4 flex flex-col items-center selection:bg-green-500 selection:text-black">
      {/* Navegación Superior */}
      <nav className="w-full max-w-4xl flex justify-end mb-4">
        <a 
          href="https://github.com/andesdevroot/promptc" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-300 hover:text-white hover:border-cyan-500 transition-all"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          [ GitHub / Código Fuente ]
        </a>
      </nav>

      {/* Centelleo del Banner */}
      <pre className="text-[10px] md:text-xs lg:text-sm mb-10 animate-pulse text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] leading-tight">
        {ASCII_BANNER}
      </pre>

      <div className="max-w-4xl w-full space-y-12">
        <header className="border-l-4 border-cyan-500 pl-4">
          <h1 className="text-3xl font-bold text-white uppercase tracking-tighter">
            PROMPTC <span className="text-cyan-500">MCP Engine</span>
          </h1>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            El primer compilador de prompts determinista de LATAM para industrias críticas. 
            <br className="hidden md:block"/> Soberanía de datos, Compliance y orquestación local para LLMs.
          </p>
        </header>

        {/* Sección de Instalación (Binario) */}
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

        {/* Sección de Configuración MCP */}
        <section className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-sm relative overflow-hidden">
          <p className="text-zinc-500 mb-4 text-xs font-bold uppercase tracking-wider">{'//'} 2. Integración MCP (Claude Desktop / Cursor)</p>
          <p className="text-gray-400 text-sm mb-4">
            Añade el servidor PROMPTC a tu archivo <code className="text-green-400 bg-black px-1 py-0.5 rounded">claude_desktop_config.json</code> para habilitar la orquestación local (Lee la <a href="https://github.com/andesdevroot/promptc#readme" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">documentación técnica en GitHub</a> para más detalles):
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

        {/* Value Proposition Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-zinc-800 p-5 hover:border-cyan-500 transition-colors group">
            <h3 className="text-cyan-400 mb-2 font-bold group-hover:text-cyan-300">{'//'} DATA_SOVEREIGNTY</h3>
            <p className="text-sm text-zinc-400">
              Arquitectura "Air-Gapped". La inferencia pesada se enruta vía túneles privados (Tailscale) hacia nodos dedicados. Cero data leaks a nubes públicas.
            </p>
          </div>
          <div className="border border-zinc-800 p-5 hover:border-green-500 transition-colors group">
            <h3 className="text-green-400 mb-2 font-bold group-hover:text-green-300">{'//'} COMPLIANCE_INDUSTRIAL</h3>
            <p className="text-sm text-zinc-400">
              Plantillas deterministas precargadas para Banca (CMF), Minería (Sernageomin) y Legal. Orquestación autónoma en el IDE.
            </p>
          </div>
          <div className="border border-zinc-800 p-5 hover:border-pink-500 transition-colors group">
            <h3 className="text-pink-500 mb-2 font-bold group-hover:text-pink-400">{'//'} MCP_PROTOCOL</h3>
            <p className="text-sm text-zinc-400">
              Servidor JSON-RPC 2.0 nativo en Go. Las IAs como Claude pueden llamar a la herramienta <code className="text-xs bg-zinc-800 px-1">get_template</code> de forma autónoma.
            </p>
          </div>
          <div className="border border-zinc-800 p-5 hover:border-yellow-500 transition-colors group">
            <h3 className="text-yellow-500 mb-2 font-bold group-hover:text-yellow-400">{'//'} ANTI_SPANGLISH</h3>
            <p className="text-sm text-zinc-400">
              Motor de validación estricto que elimina alucinaciones idiomáticas, forzando terminología técnica nativa en español.
            </p>
          </div>
        </div>

        <footer className="pt-20 pb-10 text-center space-y-2 border-t border-zinc-900">
          <div className="text-[10px] text-zinc-600 uppercase tracking-widest flex flex-col items-center gap-1">
            <span>Engineered by Cesar Rivas - Senior Software Engineer</span>
            <span>Chile 🇨🇱 • Open Source (MIT)</span>
          </div>
        </footer>
      </div>
    </main>
  );
}