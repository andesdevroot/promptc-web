import React from 'react';
import Link from 'next/link';
import { getDocsList } from '../../../lib/docs';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const docsList = getDocsList();

  return (
    <div className="min-h-screen bg-black text-zinc-300 font-mono flex flex-col md:flex-row">
      
      {/* Sidebar de Navegación */}
      <aside className="w-full md:w-72 border-r border-zinc-800 bg-zinc-950 p-6 flex-shrink-0 md:min-h-screen">
        <div className="mb-10 border-b border-zinc-800 pb-4">
          <Link href="/" className="text-xl font-bold text-white uppercase tracking-tighter hover:text-cyan-500 transition-colors">
            PROMPTC_COMPILER
          </Link>
        </div>

        <nav className="space-y-10">
          <div>
            <h3 className="text-xs font-bold text-zinc-500 uppercase mb-5 tracking-widest">{'//'} DOCUMENTACIÓN</h3>
            <ul className="space-y-3">
              {docsList.map((doc) => (
                <li key={doc.slug}>
                  <Link 
                    href={`/docs/${doc.slug}`}
                    className="text-sm text-zinc-400 hover:text-cyan-400 block border-l border-transparent hover:border-cyan-500 hover:pl-2 transition-all"
                  >
                    {doc.slug.toUpperCase().replace(/-/g, '_')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-zinc-500 uppercase mb-5 tracking-widest">{'//'} CONTACTO</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:promptc@proton.me" className="text-sm text-zinc-400 hover:text-cyan-400 block underline decoration-zinc-800 transition-colors">
                  promptc@proton.me
                </a>
              </li>
              <li>
                <a href="https://github.com/andesdevroot/promptc/discussions" target="_blank" className="text-sm text-zinc-400 hover:text-cyan-400 block underline decoration-zinc-800 transition-colors">
                  COMMUNITY_MESH
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Área de Lectura */}
      <main className="flex-1 p-6 md:p-16 w-full max-w-5xl bg-black">
        {children}
      </main>
    </div>
  );
}