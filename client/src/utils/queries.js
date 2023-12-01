import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
query Products($category: ID) {
  products(category: $category) {
    category {
      name
    }
    name
    description
    image
    price
  }
}
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ProductInput]) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;
// havent touched
export const QUERY_CATEGORIES = gql`
query Categories {
  categories {
    _id
    name
  }
  products {
    name
    _id
  }
}
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
// havent touched