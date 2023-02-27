"use client";

export default function BlogPostsPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  console.log(params);
  console.log(searchParams);
  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}
