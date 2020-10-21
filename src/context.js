import React, { Component } from 'react'
import { storeProducts, detailProducts } from './productsData';

const ProductContext = React.createContext();
// Provider and Consumer

class ProductProvider extends Component {
  state = {
      products: [],
      // genders: [],
      detailProducts: detailProducts,
      cart: [],
      modalOpen: false,
      modalProduct: detailProducts,
      cartTotal: 0
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    });
      this.setState(() => {
        return { products: tempProducts };
        // console.log("State products: ", storeProducts[0].color[0])
      });
    };
    
    getItem = id => {
      const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProducts: product };
    });
  };

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    // const genderItem = product.gender;
    // console.log(genderItem)
    // genderItem.map((item, key) => { (item === genderItem[0]) ? item = genderItem[0] : item = "asafe"; console.log(item)})
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
      return { products: tempProducts, cart: [...this.state.cart,product]}
    }, () => { this.addTotal();});
  }

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return {modalProduct: product, modalOpen: true}
    })
  }

  closeModal = () => {
    this.setState(() => {
      return {modalOpen: false}
    })
  }

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(() => {
      return {
        cart: [...tempCart]
      }
    }, () => { this.addTotal() })
  }

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;

    if(product.count === 0) {
      this.removeItem(id);
    }
    else {
      product.total = product.count * product.price;
      this.setState(() => {
        return {
          cart: [...tempCart]
        }
      }, () => { this.addTotal() })
    }
  }

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(() => {
      return {
        cart:[...tempCart],
        products: [...tempProducts]
      }
    }, ()=> {
      this.addTotal();
    })
  }

  clearCart = () => {
    this.setState(() => {
      return { cart: [] };
    }, () => {
      this.setProducts();
      this.addTotal();
    })
  }

  addTotal = () => {
    let total = 0;
    this.state.cart.map(item => (total += item.total));
    this.setState(() => {
      return {
      cartTotal: total
      }
    })
  }
  
  render() {
    return ( 
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
      }}
      >
        {this.props.children}
      </ProductContext.Provider>

    )
  }  
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };