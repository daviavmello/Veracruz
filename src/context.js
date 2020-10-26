import React, { Component } from "react";
import { storeProducts, detailProducts } from "./productsData";

const ProductContext = React.createContext();
// Provider and Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    genders: [],
    colors: [],
    detailProducts: detailProducts,
    cart: [],
    modalOpen: false,
    modalChecker: false,
    modalProduct: detailProducts,
    cartTotal: 0,
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProducts: product };
    });
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    const colorSelection = this.state.colors;
    const genderSelection = this.state.genders;

    console.log("Color Selection", colorSelection);

    if (
      typeof colorSelection === "string" &&
      typeof genderSelection === "string"
    ) {
      product.inCart = true;
      product.count = 1;
      const price = product.price;
      product.total = price;
      this.setState(
        () => {
          return {
            products: tempProducts,
            // genders: [...this.state.cart, genderSelection],
            cart: [...this.state.cart, product],
          };
        },
        () => {
          this.addTotal();
        }
      )
      return (this.openModal(id))
    }
    else {
      this.openModalChecker();
    }
  };

  openModal = (id) => {
    const product = this.getItem(id);
    // const colorSelection = this.state.colors;

    // console.log(colorSelection);
      this.setState(() => {
        return { modalProduct: product, modalOpen: true };
      });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false }
    })
  }

  openModalChecker = (  ) => {
    this.setState(() => {
      return { modalChecker: true }
    })
  }

  closeModalChecker = () => {
    this.setState(() => {
      return { modalChecker: false }
    })
  }

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotal();
      }
    );
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => {
          this.addTotal();
        }
      );
    }
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotal();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotal();
      }
    );
  };

  addTotal = () => {
    let total = 0;
    this.state.cart.map((item) => (total += item.total));
    this.setState(() => {
      return {
        cartTotal: total,
      };
    });
  };

  colorHandle = (item) => {
    // console.log("Item: ", { item }, "Key: ", { key });
    this.setState(() => {
      const color = item;
      console.log(color);
        return { colors: color };
      });
  };

  genderHandle = (item) => {
      this.setState(() => {
      const gender = item;
      console.log(gender);
        return { genders: gender };
      });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          genderHandle: this.genderHandle,
          colorHandle: this.colorHandle,
          openModalChecker: this.openModalChecker,
          toggleClass: this.toggleClass,
          closeModalChecker: this.closeModalChecker
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };