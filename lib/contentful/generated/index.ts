import * as C from ".";
import { IEntry } from "../base";

export * from "./blog_post";

export interface TypeDirectory {
  'blogPost': C.IBlogPost;
}

export interface ClassDirectory {
  'blogPost': C.BlogPost;
}

export function wrap(entry: C.IBlogPost): C.BlogPost;
export function wrap<CT extends keyof TypeDirectory>(entry: TypeDirectory[CT]): ClassDirectory[CT];
export function wrap(entry: IEntry<any>): IEntry<any> {
  const id = entry.sys.contentType.sys.id
  switch (id) {
    case 'blogPost':
      return new C.BlogPost(entry)
    default:
      throw new Error('Unknown content type:' + id)
  }
}
