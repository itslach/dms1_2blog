import { Handlers, PageProps } from "$fresh/server.ts";
import { getPost, getPosts, Post } from "@/utils/posts.ts";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};
function BlogHeader() {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <h1 className="text-2xl font-bold ">DMS1</h1>
        <h2 className="text-5xl font-bold font-sans">DIGITAL MEDIA BLOG</h2>
        <h3 className="text-xl font-italic ">Created by Student 3410666</h3>
      </div>
      <img
        src="https://i.pinimg.com/564x/32/e3/62/32e36224bed498ea74d643222f918da9.jpg" 
        alt="Blog logo"
        className="w-60 h-auto ml-4"
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}

export default function BlogIndexPage(props: PageProps<Post[]>) {
  const posts = props.data;
  return (
    <main class="max-w-screen-md px-4 pt-10 mx-auto">
      <BlogHeader />
      <div class="mt-8">
        {posts.map((post) => <PostCard post={post} />)}
      </div>
    </main>
  );
}

function PostCard(props: { post: Post }) {
  const { post } = props;
  return (
    <div class="py-8 border(t gray-200)">
      <a class="sm:col-span-2" href={`/${post.slug}`}>
      <div className= "flex items-start justify-between">
       <div className= "flex-grow"> {/* Flex item for text content */}
        <h3 class="text(3xl gray-900) font-bold">
          {post.title}
        </h3>
        <time class="text-gray-500">
          {new Date(post.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div class="mt-4 text-gray-900 font-italic">
          {post.snippet}
        </div>
      </div>
      {post.image && (
       <img
            src={post.image}
            alt={post.title}
            className="w-25 h-auto mr-4 order-last" // Tailwind classes for width, height, and margin-right
            
          />
        )}
    </div>
  </a>
</div>
  );
}

