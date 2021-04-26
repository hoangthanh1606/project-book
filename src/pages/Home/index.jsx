import React from "react";
// import "./styles.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Title from "../../Title";

import { useEffect } from 'react';
import { connect } from "react-redux";
import { getProductListAction } from "../../redux/actions";

// style promotion
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  @media (max-width: 996px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CollectionTitle = styled.h3`
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5rem;
  padding: 0.7rem 1.4rem;
  font-size: 1.7rem;
  font-weight: inherit;
  margin-bottom: 1rem;
  transition: all 300ms ease-in-out;
  @media (min-width: 1200px) {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 5rem;
    padding: 0.7rem 1.4rem;
    font-size: 1.6rem;
  }
`;

const CollectionItem = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 0;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    transition: all 500ms ease-in-out;
  }
  :hover ${CollectionTitle} {
    background-color: var(--white);
    color: var(--black !important);
  }
  :hover img {
    transform: scale(1.2);
  }
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    visibility: hidden;
    transition: all 500ms ease-in-out;
  }
  :hover::after {
    visibility: visible;
    opacity: 1;
  }
`;

const CollectionContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--white);
  text-align: center;
  z-index: 3;
`;

const CollectionLink = styled(Link)`
  transition: all 300ms ease-in-out;
  font-size: 1.4rem;
  color: var(--white);
  :hover {
    color: var(--primary);
  }
`;

// style for products
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
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
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
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
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

const Price = styled.div``;

function Home({ getProductList, productList }) {
  const CollectionData = [
    {
      url: "/images/promo1.jpeg",
      label: "Alphabooks",
      path: "/",
    },
    {
      url: "/images/promo2.jpeg",
      label: "MCBOOKS",
      path: "/",
    },
    {
      url: "/images/promo3.jpeg",
      label: "Nhã Nam",
      path: "/",
    },
    {
      url: "/images/promo4.jpeg",
      label: "NXB Kim Đồng",
      path: "/",
    },
    {
      url: "/images/promo5.jpeg",
      label: "NXB Trẻ",
      path: "/",
    },
    {
      url: "/images/promo6.jpeg",
      label: "Bách Việt",
      path: "/",
    },
  ];

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

  useEffect(() => {
    getProductList({
      page: 1,
      limit: 10,
    });
  }, []);

  return (
    <>
      <section className="section">
        <Title title="Books Collections" subtitle="Chossen Goods Books" />
        <Wrapper className="container">
          {CollectionData.map((item, index) => (
            <CollectionItem key={index}>
              <img src={item.url} alt={item.label} />
              <CollectionContent>
                <CollectionTitle>
                  <Link to={item.path}>{item.label}</Link>
                </CollectionTitle>
                <CollectionLink to={item.path}>SHOP NOW</CollectionLink>
              </CollectionContent>
            </CollectionItem>
          ))}
        </Wrapper>
      </section>
      {/* product */}
      <section className="section">
        <Title title="New Products" subtitle="Chossen Goods Books" />
        <WrapperProduct>
          {productList.data.map((item, index) => (
            <ProductItem key={index}>
              <ImgContainer>
                <Link>
                  <img src={item.image} alt={item.name} />
                </Link>
                {item.countInStock === 0 ? (
                  <IconWrapper className="disabled">
                    <i className="fas fa-shopping-cart"></i>
                  </IconWrapper>
                ) : (
                  <IconWrapper>
                    <i className="fas fa-shopping-cart"></i>
                  </IconWrapper>
                )}
              </ImgContainer>
              <Bottom>
                <ProductLink>{item.name}</ProductLink>
                <Price>
                  <PriceLabel>${item.price}</PriceLabel>
                </Price>
              </Bottom>
            </ProductItem>
          ))}
        </WrapperProduct>
      </section>
    </>
  );
}

const mapStateToProps = (state) => {
  const { productList } = state.productReducer;
  return {
    productList: productList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductList: (params) => dispatch(getProductListAction(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
