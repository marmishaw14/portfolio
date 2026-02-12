export default function Blogs() {
  return (
    <section id="blogs" className="px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              Writing
            </p>
            <h2 className="mt-2 text-3xl font-semibold">Latest blogs</h2>
          </div>
          <a
            href="/blog"
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            View all
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Designing for clarity in complex products',
              date: 'Jan 18, 2026',
              tag: 'Product',
            },
            {
              title: 'Building fast, accessible interfaces in Next.js',
              date: 'Dec 2, 2025',
              tag: 'Frontend',
            },
            {
              title: 'From idea to launch: my 30-day build sprint',
              date: 'Nov 10, 2025',
              tag: 'Process',
            },
          ].map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/30"
            >
              <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/50">
                <span>{post.tag}</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-lg font-semibold leading-snug">
                {post.title}
              </h3>
              <p className="mt-3 text-sm text-white/60">
                A short preview of the post goes here so the section still looks
                complete without real content.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
