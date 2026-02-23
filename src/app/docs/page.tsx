import React from 'react';
import Link from 'next/link';

export default function DocsIndex() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12 border-l-4 border-cyan-500 pl-6">
        <h1 className="text-4xl font-bold text-white uppercase tracking-tighter">
          Technical <span className="text-cyan-500 underline">Reference</span>
        </h1>
      </header>
      
      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-zinc-900/20 border border-zinc-800 p-8 hover:border-zinc-700 transition-colors">
          <h2 className="text-zinc-500 text-xs font-bold uppercase mb-6 border-b border-zinc-800 pb-2 tracking-widest">
            01 // CORE_FILES
          </h2>
          <ul className="space-y-4">
            <li>
              <Link href="/docs/getting-started" className="text-lg font-bold text-white hover:text-cyan-500">
                GETTING_STARTED.txt
              </Link>
            </li>
          </ul>
        </section>

        <section className="bg-zinc-900/20 border border-zinc-800 p-8 hover:border-zinc-700 transition-colors">
          <h2 className="text-zinc-500 text-xs font-bold uppercase mb-6 border-b border-zinc-800 pb-2 tracking-widest">
            02 // ARCHITECTURE
          </h2>
          <ul className="space-y-4">
            <li>
              <Link href="/docs/architecture" className="text-lg font-bold text-white hover:text-cyan-500">
                ARCHITECTURE_L7.txt
              </Link>
            </li>
            <li>
              <Link href="/docs/compliance-cmf" className="text-lg font-bold text-white hover:text-cyan-500">
                COMPLIANCE_CMF.txt
              </Link>
            </li>
            <li>
              <Link href="/docs/anti-spanglish" className="text-lg font-bold text-white hover:text-cyan-500 transition-colors">
                ANTI_SPANGLISH.txt
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}