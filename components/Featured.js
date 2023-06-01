import Center from "./Center";
import styled from "styled-components";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
  background-color: #222;
  color: white;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3rem;
`;
const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;

  img {
    max-width: 100%;
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center; 
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;


export default function Featured({ product }) {
  const { setCartProducts, addProducts } = useContext(CartContext);
  
  function addFeaturedToCart () {
    addProducts(product._id);
  }

  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Desc>
                {product.description}
              </Desc>
              <ButtonWrapper>
                <ButtonLink href={'/products/'+product._id} outlined={1} white={1}>
                  Read more
                </ButtonLink>
                <Button white onClick={addFeaturedToCart}>
                  <CartIcon />
                  Add to cart
                </Button>
              </ButtonWrapper>
            </div>
          </Column>

          <Column>
            <img
              src="https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="macbook pro"
            />
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}
