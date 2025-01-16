export type BlogPost = {
  title: string
  slug: string
  author: string
  ingress: string
  body: string
  date: Date
}

const data: BlogPost[] = [
  {
    title: 'My First Post',
    slug: 'my-first-post',
    author: 'Zsolt Szilagyi',
    ingress: 'This is my first post on this blog. It is used to demonstrate how content is shown on this site.',
    body: '<p>Now this is the actual blog post body. It contains multiple paragraphs and stuff and things.</p><p>This is the second paragraph. This is amazing.</p>',
    date: new Date('2025-01-02 09:00:00'),
  },
  {
    title: 'Exploring TypeScript',
    slug: 'exploring-typescript',
    author: 'Anna Kim',
    ingress: 'TypeScript is a powerful tool for JavaScript developers. Here are some tips and tricks to get started.',
    body: '<p>TypeScript adds static typing to JavaScript, making it easier to catch errors early. This can be a huge benefit in larger codebases.</p><p>One of my favorite features is the ability to define interfaces. These provide a way to describe object shapes and make your code more predictable.</p>',
    date: new Date('2025-01-10 15:30:00'),
  },
  {
    title: 'Why You Should Travel More',
    slug: 'why-you-should-travel-more',
    author: 'Liam Garcia',
    ingress: 'Traveling is not just a way to relax; it is a way to learn about the world and yourself.',
    body: '<p>When you travel, you step out of your comfort zone. You experience new cultures, meet new people, and see the world from a different perspective.</p><p>Even a short weekend trip can be refreshing and help you recharge your mental batteries.</p>',
    date: new Date('2025-01-14 08:00:00'),
  },
  {
    title: 'The Importance of Mental Health',
    slug: 'the-importance-of-mental-health',
    author: 'Sophia Johnson',
    ingress: 'Mental health is as important as physical health, yet it is often overlooked. Let\'s change that.',
    body: '<p>Taking care of your mental health should be a priority. Practice mindfulness, stay connected with loved ones, and don’t hesitate to seek help if needed.</p><p>Remember, you cannot pour from an empty cup. Take care of yourself first.</p>',
    date: new Date('2025-01-18 10:00:00'),
  },
  {
    title: 'How to Start Coding',
    slug: 'how-to-start-coding',
    author: 'Ethan Brown',
    ingress: 'Learning to code can be intimidating at first, but with the right resources and mindset, anyone can do it.',
    body: '<p>Start by picking a language. For beginners, Python is often recommended because of its simplicity and readability.</p><p>Practice regularly, build small projects, and don’t be afraid to make mistakes. That’s how you learn!</p>',
    date: new Date('2025-01-22 13:45:00'),
  },
  {
    title: 'Healthy Eating Habits',
    slug: 'healthy-eating-habits',
    author: 'Emily Clark',
    ingress: 'Eating healthy doesn’t have to be complicated. Small changes can make a big difference.',
    body: '<p>Focus on incorporating more whole foods into your diet, such as fruits, vegetables, whole grains, and lean proteins.</p><p>Avoid restrictive diets and aim for balance. Moderation is key.</p>',
    date: new Date('2025-01-25 11:20:00'),
  },
];

export function getPosts(): BlogPost[] {
  return data.sort((a, b) => Number(b.date) - Number(a.date));
}

export function getPost(slug: string): BlogPost | null {
  return data.find(post => post.slug === slug) || null;
}
