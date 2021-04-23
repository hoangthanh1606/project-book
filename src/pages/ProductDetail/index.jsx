import React from "react";
// import "./styles.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "../../Title";

// import history from "../../utils/history";

const ProductDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 7rem;
  margin: 10rem auto;
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 650px) {
    width: 100%;
    height: 45rem;
  }
`;

const Main = styled.div`
  text-align: center;
  background-color: #f6f2f1;
  margin-bottom: 2rem;
  height: 45rem;
  padding: 3rem;
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;

const Thumbnails = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
`;

const Thumbnail = styled.div`
  height: 10rem;
  background-color: #f6f2f1;
  text-align: center;
  img {
    height: 100%;
    object-fit: contain;
  }
  @media (max-width: 650px) {
    width: 6rem;
    height: 6rem;
  }
`;
const CatLabel = styled.span`
  display: inline-block;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Right = styled.div`
  div {
    position: relative;
    z-index: 1;
  }
  @media (max-width: 650px) {
    margin-top: 5rem;
  }
`;

export const Form = styled.form`
  margin-bottom: 2rem;
  div {
    display: inline-block;
    position: relative;
    z-index: 1;
    span {
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translateY(-60%);
      font-size: 1.3rem;
      z-index: 0;
      pointer-events: none;
    }
  }
`;

export const Select = styled.select`
  font-family: "Poppins", sans-serif;
  width: 6rem;
  padding: 0.3rem;
  border: 1px solid var(--grey1);
  appearance: none;
  outline: none;
  font-weight: 600;
  cursor: pointer;
`;

const TitleDetail = styled.h1`
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 2rem;
`;
const Price = styled.div`
  font-size: 600;
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 2rem;
`;

const LinkWrapper = styled(Link)`
  display: inline-block;
  background: var(--primary);
  padding: 0.8rem 4rem;
  color: var(--white);
  border-radius: 3rem;
  margin-bottom: 2rem;
  &.disabled{
    cursor: default;
    /* pointer-events: none, */
    color: var(--white);
    background: var(--grey1);
  }
  :hover {
    color: var(--white);
  }
`;

const Heading = styled.h3`
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const InStock = styled.span`
  display: block;
  margin-bottom: 2rem;
`;

const Discription = styled.p`
  color: var(--grey1);
`;

// style for products related
const WrapperProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 3rem;
  padding: 0 4rem;
  margin-bottom: 5rem;
`;

const ImgContainer = styled.div`
  position: relative;
  cursor: pointer;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0.6rem;
  background-color: var(--white);
  border-radius: 50%;
  padding: 1.3rem 1.6rem;
  transition: all 300ms ease-in-out;
  :hover {
    background-color: var(--primary);
    color: var(--white);
  }
  &.disabled {
    /* pointer-event: none; */
    cursor: default;
  }
`;

const ProductItem = styled.div`
  overflow: hidden;
  i {
    transition: all 300ms ease-in-out;
  }
  :hover {
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.3);
  }
  :hover ${IconWrapper} {
    border-radius: 1rem 0 0 0;
  }
`;

const Bottom = styled.div`
  padding: 1rem;
  text-align: center;
`;

const ProductLink = styled(Link)`
  margin-bottom: 1rem;
  font-weight: inherit;
  font-size: 1.5rem;
  color: var(--black);
  :hover {
    color: var(--primary);
  }
`;

const PriceLabel = styled.span`
  color: var(--primary);
  font-size: 1.8rem;
`;

const PriceRelated = styled.div``;

function productDetailPage() {
  const ProductData = [
    {
      _id: "1",
      title: "Nhà Giả Kim (2021)",
      url: "/images/product1.jpg",
      price: 150000,
    },
    {
      _id: "2",
      title: "Tìm Em nơi Anh - Find Me",
      url: "/images/product2.jpg",
      price: 150000,
    },
    {
      _id: "3",
      title: "Con Chim Xanh Biếc Bay Về",
      url: "/images/product3.jpg",
      price: 150000,
    },
    {
      _id: "4",
      title: "Hạnh Nhân",
      url: "/images/product4.jpg",
      price: 150000,
    },
    {
      _id: "5",
      title: "999 Lá Thư Gửi Cho Chính Mình",
      url: "/images/product5.jpg",
      price: 150000,
    },
    {
      _id: "6",
      title: "Colorfull",
      url: "/images/product6.jpg",
      price: 150000,
    },
    {
      _id: "7",
      title: "Đảo Mộng Mơ - Ấn Bản Kỷ Niệm 10 Năm Xuất Bản",
      url: "/images/product7.jpg",
      price: 150000,
    },
    {
      _id: "8",
      title: "Dấu Chân Trên Cát (Tái Bản 2020)",
      url: "/images/product8.jpg",
      price: 150000,
    },
  ];

  return (
    <>
      <ProductDetails className="container">
        <Left>
          <Main>
            <img src="/images/product8.jpg" alt="" />
          </Main>
          <Thumbnails>
            <Thumbnail>
              <img src="/images/product8.jpg" alt="" />
            </Thumbnail>
            <Thumbnail>
              <img src="/images/product8.jpg" alt="" />
            </Thumbnail>
            <Thumbnail>
              <img src="/images/product8.jpg" alt="" />
            </Thumbnail>
            <Thumbnail>
              <img src="/images/product8.jpg" alt="" />
            </Thumbnail>
          </Thumbnails>
        </Left>

        <Right>
          <CatLabel>Trang Chủ/Sách Văn Học</CatLabel>
          <TitleDetail>Nhà Giả Kim</TitleDetail>
          <Price>$300000</Price>
          <Form>
            <div>
              <Select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Select>
              <span>
                <i className="fas fa-chevron-down"></i>
              </span>
            </div>
          </Form>
          <InStock>Status: Còn hàng</InStock>
          <LinkWrapper className="white">Add To Cart</LinkWrapper>
          <Heading>Product Description</Heading>
          <Discription>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            nemo in repudiandae magnam quasi consequatur sed eligendi atque
            consectetur dolorem. Illum ex natus doloremque quas voluptates dicta
            deserunt tempora itaque!
          </Discription>
        </Right>
      </ProductDetails>
      {/* products relate */}
      <section className="section">
        <Title title="Related Products" subtitle="Chossen Goods Books" />
        <WrapperProduct>
          {ProductData.map((item, index) => (
            <ProductItem key={index}>
              <ImgContainer>
                <Link>
                  <img src={item.url} alt={item.title} />
                </Link>
                <IconWrapper className="disabled">
                  <i className="fas fa-shopping-cart"></i>
                </IconWrapper>
                <IconWrapper>
                  <i className="fas fa-shopping-cart"></i>
                </IconWrapper>
              </ImgContainer>
              <Bottom>
                <ProductLink>{item.title}</ProductLink>
                <PriceRelated>
                  <PriceLabel>${item.price}</PriceLabel>
                </PriceRelated>
              </Bottom>
            </ProductItem>
          ))}
        </WrapperProduct>
      </section>
    </>
  );
}

export default productDetailPage;
