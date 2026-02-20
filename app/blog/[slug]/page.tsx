import { notFound } from "next/navigation";
import { posts } from "@/data/blog";

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();
  return <article className="container py-10"><h1 className="text-4xl font-black">{post.title}</h1><p className="mt-4 text-zinc-200">{post.content}</p></article>;
}
