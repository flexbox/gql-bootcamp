const { getProducts, createProduct, getProduct } = require('../db/products');
const { login, updateUser } = require('../db/users');
const { UserInputError, AuthenticationError } = require('apollo-server');

module.exports = {
  Query: {
    products: () => getProducts()
  },
  Mutation: {
    login: (_parent, args) => {
      return login(args.input.email, args.input.password);
    },
    addProductToCart: (_, { input }, context) => {
      console.log('context.user', context.user);
      if (!context.user) {
        throw new AuthenticationError('must authenticate');
      }

      const product = getProduct(input.productId);
      if (product.stock < input.amount) {
        throw new UserInputError(
          'can’t add more to the cart than stock of the product',
          {
            invalidArgs: ['input.amount']
          }
        );
      }

      return { amount: input.amount };
    }
  }
};
