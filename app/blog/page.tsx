import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Blog",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="px-6 py-20">
      <SectionHeading
        eyebrow="Writing"
        title="Blog"
        description="Thoughts on software, and everything in between."
      />

      <div className="mx-auto mt-16 max-w-3xl space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <span className="text-sm text-muted">{formatDate(post.date)}</span>
            </div>
            <p className="mt-2 text-muted">{post.excerpt}</p>
            {post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
        {posts.length === 0 && <p className="text-center text-muted">No posts yet — check back soon.</p>}
      </div>
    </section>
  );
}
