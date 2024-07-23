import { Handlers } from "$fresh/server.ts";
import { getPosts, Post } from "@/utils/posts.ts";
import { Feed, type Item as FeedItem } from "feed";

export const handler: Handlers<Post[]> = {
  async GET(req, _ctx) {
    const posts = await getPosts();
    const url = new URL(req.url);
    const origin = url.origin;
    const copyright = `Copyright ${new Date().getFullYear()} ${origin}`;
    const feed = new Feed({
      title: "Digital Media Studio 1 Blog - Lachlan Miles",
      description: "This is a Fresh Blog",
      id: `${origin}/blog`,
      link: `${origin}/blog`,
      language: "en",
      favicon: `${origin}/favicon.ico`,
      copyright: copyright,
      generator: "Feed (https://github.com/jpmonette/feed) for Deno",
      feedLinks: {
        atom: `${origin}/feed`,
      },
    });

    posts.map((post) => {
      const item: FeedItem = {
        id: `${origin}/${post.title}`,
        title: post.title,
        description: post.snippet,
        date: post.publishedAt,
        link: `${origin}/${post.slug}`,
        copyright,
        published: post.publishedAt,
      };
      feed.addItem(item);
    });

    const atomFeed = feed.atom1();
    return new Response(atomFeed, {
      headers: {
        "content-type": "application/atom+xml; charset=utf-8",
      },
    });
  },
};

<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{{ page.title }}</title>
  <link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">
</head>
<body>
  <header>
    {% if page.image %}
      <img src="{{ page.image }}" alt="{{ page.title }}" class="post-image">
    {% endif %}
    <h1>{{ page.title }}</h1>
    <p class="post-date">{{ page.date | date: "%B %-d, %Y" }}</p>
  </header>
  <main>
    {{ content }}
  </main>
</body>
</html>