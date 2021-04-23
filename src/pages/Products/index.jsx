import React from "react";
// import './styles.css'
import { Link } from "react-router-dom";
import styled from "styled-components";

const WrapperProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0 1rem;
  @media only screen and (max-width: 996px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 567px) {
    grid-template-columns: 1fr;
  }
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
  padding: 2rem;
  margin-bottom: 2rem;
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

const Price = styled.div``;

//
const SectionProduct = styled.section`
  margin-top: 10rem;
`;

const ProductsLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 0 1rem;
  padding: 10rem;
  @media only screen and (max-width: 768px) {
    padding: 0 5rem;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 4rem 0;
  }
`;

const LeftLayout = styled.div`
  div {
    margin-bottom: 8rem;
  }
`;

const BlockTitle = styled.div`
  color: var(--grey1);
  margin-bottom: 1.6rem;
`;
const LeftHeading = styled.h3`
  font-size: 2.7rem;
  font-weight: inherit;
`;

const BlockContent = styled.ul`
  margin-top: -6rem;
`;
const ListContent = styled.li`
  margin-bottom: 1rem;
`;

const InputContent = styled.input`
  outline: none;
  height: auto;
  cursor: pointer;
`;

const LabelContent = styled.label`
  color: var(--black);
  margin-left: 1rem;
  font-size: 1.5rem;
  :hover {
    color: var(--primary);
    cursor: pointer;
  }
`;

const RightLayout = styled.div`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-bottom: 3rem;
  label {
    color: var(--grey1);
  }
  select {
    padding: 1rem;
    width: 10rem;
    border: 1px solid #f2f2f2;
    outline: none;
  }
  button {
    display: inline-block;
    padding: 1rem 3rem;
    border-radius: 4rem;
    margin-right: 1rem;
    background-color: var(--primary);
    color: var(--white);
    transition: all 300ms ease-in-out;
    cursor: pointer;
    outline: none;
    :hover {
      background-color: var(--black);
    }
  }
`;
const ItemFilter = styled.div`
  margin-right: 1rem;
`;

const Pagination = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;
`;

function productPage() {
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
    <SectionProduct>
      <ProductsLayout>
        <LeftLayout>
          <div>
            <BlockTitle>
              <LeftHeading>Danh Mục</LeftHeading>
            </BlockTitle>
            <BlockContent>
              <ListContent>
                <InputContent type="checkbox"></InputContent>
                <LabelContent>Sách Văn Học</LabelContent>
              </ListContent>

              <ListContent>
                <InputContent type="checkbox"></InputContent>
                <LabelContent>Sách Kinh Tế</LabelContent>
              </ListContent>

              <ListContent>
                <InputContent type="checkbox"></InputContent>
                <LabelContent>Sách Kĩ Năng</LabelContent>
              </ListContent>

              <ListContent>
                <InputContent type="checkbox"></InputContent>
                <LabelContent>Sách Thiếu Nhi</LabelContent>
              </ListContent>
            </BlockContent>
          </div>

          <div>
            <BlockTitle>
              <LeftHeading>Nhà Cung Cấp</LeftHeading>
            </BlockTitle>
            <BlockContent>
              <ListContent>
                <InputContent type="checkbox"></InputContent>
                <LabelContent>NXB Kim Đồng</LabelContent>
              </ListContent>

              <ListContent>
                <InputContent type="checkbox"></InputContent>
                <LabelContent>NXB Trẻ</LabelContent>
              </ListContent>

              <ListContent>
                <InputContent type="checkbox"></InputContent>
                <LabelContent>Nhã Nam</LabelContent>
              </ListContent>
            </BlockContent>
          </div>
        </LeftLayout>
        <RightLayout>
          <Form>
            <ItemFilter>
              <label htmlFor="">Sắp xếp theo </label>
              <select>
                <option value="title" selected="selected">
                  Tên
                </option>
                <option value="number">Giá bán</option>
                <option value="search_api_relevance">Bán chạy</option>
                <option value="created">Mới nhất</option>
              </select>
            </ItemFilter>
            <ItemFilter>
              <label>Order </label>
              <select>
                <option value="ASC" selected="selected">
                  Tăng dần
                </option>
                <option value="DESC">Giảm dần</option>
              </select>
            </ItemFilter>
            <button>Apply</button>
          </Form>
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
                  <Price>
                    <PriceLabel>${item.price}</PriceLabel>
                  </Price>
                </Bottom>
              </ProductItem>
            ))}
          </WrapperProduct>
          <Pagination></Pagination>
        </RightLayout>
      </ProductsLayout>
    </SectionProduct>
  );
}

export default productPage;
