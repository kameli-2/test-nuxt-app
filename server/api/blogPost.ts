import { useQuery } from "@urql/vue";
import { createClient, EntryCollection, EntrySkeletonType } from "contentful";
import type { BlogPost } from "~/lib/contentful/generated/blog_post";

function getClient() {
  const config = useRuntimeConfig(); 
  const client = createClient({
    accessToken: config.ctfCdaAccessToken,
    space: config.ctfSpaceId,
  })
  return client;
}

export async function getPosts() {
  const contentfulClient = getClient();
  const data = await contentfulClient.getEntries({
      content_type: 'blogPost',
  }) as EntryCollection<EntrySkeletonType<BlogPost>>;

  return data.items.map(item => item.fields).sort((a, b) => +new Date(b.date.toString()) - +new Date(a.date.toString()));
}

export default defineEventHandler(async (event) => {
  const { method, path } = event;
  const { slug } = getQuery(event);

  if (method === 'GET') {
    if (slug) {
      // Get single post
      return {
        post: (await getPosts()).find(post => post.slug === slug)
      }
    }
    return {
      posts: await getPosts()
    }
  }

  // TODO: return 405 method not allowed
})