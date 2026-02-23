import Link from 'next/link';
import { getDevlogData, getSortedDevlogData } from '../../../../lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getSortedDevlogData();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function DevlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  try {
    const postData = await getDevlogData(slug);

    return (
      <main className="min-h-screen bg-black text-zinc-300 font-mono p-6 md:p-16 max-w-4xl mx-auto selection:bg-cyan-500 selection:text-black">
        <header className="mb-16 border-b-2 border-zinc-900 pb-8">
          <div className="text-[10px] text-cyan-500 font-bold mb-4 uppercase tracking-[0.3em]">
            LOG_ENTRY // {postData.date}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tighter italic leading-none">
            {postData.title}
          </h1>
        </header>

        <article 
          className="prose prose-invert max-w-none
                     /* SEPARACIÓN DE PÁRRAFOS UNIFICADA */
                     prose-p:text-zinc-400 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-12
                     
                     /* HEADINGS */
                     prose-h2:text-2xl prose-h2:text-cyan-500 prose-h2:uppercase prose-h2:border-b prose-h2:border-zinc-800 prose-h2:pb-2 prose-h2:mt-16 prose-h2:mb-8
                     
                     /* TERMINAL BOX (STYLE HOME/DOCS) */
                     prose-pre:bg-zinc-950 prose-pre:border prose-pre:border-zinc-800 prose-pre:p-0 prose-pre:my-14
                     prose-pre:before:content-['●_●_●_compiler_log'] prose-pre:before:block prose-pre:before:bg-zinc-900 prose-pre:before:text-zinc-600 prose-pre:before:text-[9px] prose-pre:before:px-4 prose-pre:before:py-2.5 prose-pre:before:border-b prose-pre:before:border-zinc-800
                     
                     prose-code:text-green-400 prose-code:bg-transparent prose-code:p-8 prose-code:block prose-code:text-sm
                     
                     prose-strong:text-cyan-400 prose-a:text-cyan-400 prose-a:underline hover:text-white"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />

        <footer className="mt-32 pt-10 border-t border-zinc-900 flex justify-between items-center">
          <Link href="/devlog" className="text-xs font-bold text-cyan-500 hover:text-white uppercase tracking-widest">
            $ cd .. // BACK_TO_LOGS
          </Link>
          <span className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest">
            PROMPTC_COMPILER // 2026
          </span>
        </footer>
      </main>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
}