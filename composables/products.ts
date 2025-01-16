import { Client, cacheExchange, fetchExchange } from '@urql/vue';

const client = new Client({
  url: 'https://api.escuelajs.co/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

export type Category = {
  id: number
  name: string
  image: string
}

export type Product = {
  id:	number // The id of the product.
  title: string // The name of the product.
  price: number // Price the product.
  description: string // Description the product.
  category: Category // Object of category.
  images: string[] // List of images like URLs.
}

export async function getCategory(id: number): Promise<Category | null> {
  const result = await client.query(`query getCategory($id: ID!) {
    category(id: $id) {
      id
      name
      image
    }
  }`, { id });
  return result?.data?.category || null;
}

export async function getCategories(): Promise<Category[]> {
  const result = await client.query(`query {
    categories {
      id
      name
      image
    }
  }`, {});
  return result?.data?.categories || [];
}

export async function getProducts(category?: number): Promise<Product[]> {
  const result = await client.query(`query getProducts($category: Float) {
    products(categoryId: $category) {
      id
      title
      price
      description
      images
      category {
        id
        name
        image
      }
    }
  }`, { category });
  return result?.data?.products || [];
}

export async function getProduct(id: number): Promise<Product | null> {
  const result = await client.query(`query getProducts($id: ID!) {
    product(id: $id) {
      id
      title
      price
      description
      images
      category {
        id
        name
        image
      }
    }
  }`, { id });
  return result?.data?.product || null;
}