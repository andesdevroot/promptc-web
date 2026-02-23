import { getDocData, getDocsList } from '../../../../lib/docs';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const docs = getDocsList();
  return docs.map((doc) => ({ slug: doc.slug }));
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  try {
    const docData = await getDocData(slug);

    return (
      <article className="max-w-none bg-black text-zinc-300 font-mono">
        <header className="mb-16 border-l-4 border-cyan-500 pl-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter">
            {docData.title}
          </h1>
          <p className="text-[10px] text-zinc-600 mt-2 font-bold tracking-widest">
            SOURCE: {docData.slug}.md
          </p>
        </header>

        <div 
          className="prose prose-invert max-w-none
                     /* FIX: SEPARACIÓN DE PÁRRAFOS */
                     prose-p:text-zinc-400 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-12
                     
                     /* HEADINGS SOBRIOS */
                     prose-h2:text-cyan-500 prose-h2:text-2xl prose-h2:font-bold prose-h2:uppercase prose-h2:border-b prose-h2:border-zinc-800 prose-h2:pb-2 prose-h2:mt-16 prose-h2:mb-8
                     
                     /* FIX: CAJA DE TERMINAL (DIFERENCIA EL CÓDIGO DEL TEXTO) */
                     prose-pre:bg-black prose-pre:border prose-pre:border-zinc-800 prose-pre:rounded-none prose-pre:p-0 prose-pre:my-12 prose-pre:relative
                     
                     /* CABECERA CON PUNTOS (● ● ●) */
                     prose-pre:before:content-['●_●_●'] prose-pre:before:block prose-pre:before:bg-zinc-900 prose-pre:before:text-zinc-600 prose-pre:before:text-[10px] prose-pre:before:px-4 prose-pre:before:py-2 prose-pre:before:border-b prose-pre:before:border-zinc-800
                     
                     /* TEXTO DEL CÓDIGO */
                     prose-code:text-green-400 prose-code:bg-transparent prose-code:p-6 prose-code:block prose-code:text-sm prose-code:leading-relaxed
                     
                     prose-a:text-cyan-500 prose-a:underline hover:text-white transition-colors
                     prose-li:text-zinc-400 prose-li:my-3 prose-li:marker:text-cyan-500"
        >
          <div dangerouslySetInnerHTML={{ __html: docData.contentHtml }} />
        </div>

        <footer className="mt-32 pt-8 border-t border-zinc-900 text-[10px] text-zinc-600 font-bold uppercase tracking-widest text-center">
          --- end_of_file ---
        </footer>
      </article>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
}