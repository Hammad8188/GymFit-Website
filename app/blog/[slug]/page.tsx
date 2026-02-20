import { notFound } from "next/navigation";
import { posts } from "@/data/blog";
import Link from "next/link";

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <div className="space-y-16 pb-16">
      <section className="relative overflow-hidden">
        <div className="hero-glow -top-20 -left-20 opacity-30" />
        <div className="container relative z-10 py-20 max-w-3xl">
          <Link href="/blog" className="text-sm text-zinc-500 hover:text-brand-500 transition-colors mb-6 inline-block">
            ← Back to Blog
          </Link>
          <span className="badge mb-4 block w-fit">Article</span>
          <h1 className="text-4xl font-black leading-tight md:text-5xl fade-up">{post.title}</h1>
          <div className="mt-8 fade-up-delay-1">
            <p className="text-lg text-zinc-300 leading-relaxed">{post.content}</p>
          </div>
          <div className="mt-12 glass-card p-6 text-center fade-up-delay-2">
            <p className="text-zinc-400">
              Want personalized guidance?{" "}
              <Link href="/contact" className="text-brand-500 font-semibold hover:text-brand-400 transition-colors">
                Book a free consultation →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
