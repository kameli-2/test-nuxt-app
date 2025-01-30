import { Entry, IEntry } from "../base";

export interface IBlogPostFields {
  title: string;
  slug: string;
  author?: string;
  ingress?: string;
  body: any;
  date: string;
}

/** Blog Post */
export interface IBlogPost extends IEntry<IBlogPostFields> {
}

export function isBlogPost(entry: IEntry<any>): entry is IBlogPost {
  return entry &&
    entry.sys &&
    entry.sys.contentType &&
    entry.sys.contentType.sys &&
    entry.sys.contentType.sys.id == 'blogPost'
}

export class BlogPost extends Entry<IBlogPostFields> implements IBlogPost {
  get title(): string {
    return this.fields.title
  }

  get slug(): string {
    return this.fields.slug
  }

  get author(): string | undefined {
    return this.fields.author
  }

  get ingress(): string | undefined {
    return this.fields.ingress
  }

  get body(): any {
    return this.fields.body
  }

  get date(): string {
    return this.fields.date
  }

  constructor(entry: IBlogPost);
  constructor(id: string, fields: IBlogPostFields);
  constructor(entryOrId: IBlogPost | string, fields?: IBlogPostFields) {
    super(entryOrId, 'blogPost', fields)
  }
}
