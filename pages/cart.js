import styled from "styled-components";
import Center from "@/components/Center";
import Header from "@/components/Header";
import React, { useContext, useEffect, useState } from "react";
import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import axios from "axios";
import Table from "@/components/Table";
import Input from "@/components/Input";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 40px;
  margin-top: 40px;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
`;

const ProductImageBox = styled.div`
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 80px;
    max-height: 80px;
  }
`;

const QuantityLabel = styled.span`
  padding: 0 3px;
`;

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

export default function cart() {
  const { cartProducts, addProducts, removeProducts } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAdress, setStreetAdress] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    if (cartProducts?.length > 0) {
      axios.post(`/api/cart`, { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    }
  }, [cartProducts]);

  // Increase product quantity
  function moreOfThisProduct(id) {
    addProducts(id);
  }

  // Decrease product quantity
  function lessOfThis(id) {
    removeProducts(id);
  }

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  return (
    <div>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>
            <h2>Cart</h2>
            {!cartProducts?.length && <div>Your cart is empty</div>}

            {products?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr>
                      <ProductInfoCell>
                        <ProductImageBox>
                          <img
                            src={
                              product?.image ||
                              "https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            }
                          />
                        </ProductImageBox>
                        {product.title}
                      </ProductInfoCell>

                      <td>
                        <Button onClick={() => lessOfThis(product._id)}>
                          -
                        </Button>
                        <QuantityLabel>
                          {
                            cartProducts.filter((id) => id === product._id)
                              .length
                          }
                        </QuantityLabel>
                        <Button onClick={() => moreOfThisProduct(product._id)}>
                          +
                        </Button>
                      </td>
                      <td>
                        $
                        {cartProducts.filter((id) => id === product._id)
                          .length * product.price}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>${total}</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Box>
          {cartProducts?.length && (
            <Box>
              <h2>Order Information</h2>

              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
              />
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
              />
              <CityHolder>
                <Input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  placeholder="City"
                />
                <Input
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  type="text"
                  placeholder="Postal Code"
                />
              </CityHolder>
              <Input
                value={streetAdress}
                onChange={(e) => setStreetAdress(e.target.value)}
                type="text"
                placeholder="Street Address"
              />
              <Input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                type="text"
                placeholder="Country"
              />

              <Button block primary>
                Continue to payment
              </Button>
            </Box>
          )}
        </ColumnsWrapper>
      </Center>
    </div>
  );
}
