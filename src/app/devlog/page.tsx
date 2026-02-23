import Link from 'next/link';
import { getSortedDevlogData } from '../../../lib/posts';

export default function DevlogIndex() {
  const allPostsData = getSortedDevlogData();

  return (
    <main className="min-h-screen bg-black text-zinc-300 font-mono p-8 md:p-16 max-w-5xl mx-auto selection:bg-cyan-500 selection:text-black">
      
      <header className="mb-16 border-l-4 border-cyan-500 pl-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter">
          PROMPTC <span className="text-cyan-500 italic">DEVLOG</span>
        </h1>
        <p className="text-zinc-600 mt-2 text-xs font-bold uppercase tracking-widest">
          $ tail -f /var/log/compiler_updates.log
        </p>
      </header>

      <div className="space-y-12">
        {allPostsData.length === 0 ? (
          <div className="text-sm text-zinc-700 italic border border-zinc-900 p-4">No log entries found.</div>
        ) : (
          allPostsData.map(({ slug, date, title, excerpt }) => (
            <article key={slug} className="group border-b border-zinc-900 pb-10">
              <div className="text-[10px] text-cyan-500/50 mb-2 font-bold tracking-widest uppercase">
                [{date}] // ENTRY_STAMP
              </div>
              
              <Link href={`/devlog/${slug}`} className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors block mb-4 uppercase italic">
                {title}
              </Link>
              
              <p className="text-zinc-500 text-lg leading-snug mb-6 max-w-3xl">
                {excerpt}
              </p>
              
              <Link href={`/devlog/${slug}`} className="text-xs font-bold text-cyan-500 underline decoration-zinc-800 hover:decoration-cyan-500 uppercase tracking-widest">
                Read_Full_Log --&gt;
              </Link>
            </article>
          ))
        )}
      </div>

      <footer className="mt-20 pt-8">
        <Link href="/" className="text-xs font-bold text-zinc-500 hover:text-white transition-colors">
          $ cd /root/
        </Link>
      </footer>
    </main>
  );
}