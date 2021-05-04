import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
// import './styles.css'
import { Link } from "react-router-dom";
import styled from "styled-components";

import history from "../../utils/history";

import {
  getCategoryListAction,
  getProductListAction,
  getPublisherListAction,
} from "../../redux/actions";

const WrapperProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

const LabelContent = styled.span`
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

function ProductPage({
  getCategoryList,
  getProductList,
  getPublisherList,
  categoryList,
  productList,
  publisherList,
}) {
  const [categorySelected, setCategorySelected] = useState(null);
  const [publisherSelected, setPublisherSelected] = useState(null);

  useEffect(() => {
    getCategoryList();
    getProductList({
      page: 1,
      limit: 10,
    });
    getPublisherList();
  }, []);

  function handleFilterCategory(id) {
    setCategorySelected(id);
    getProductList({
      page: 1,
      limit: 10,
      categoryId: id,
    });
  }

  function handleFilterPublisher(id) {
    setPublisherSelected(id);
    getProductList({
      page: 1,
      limit: 10,
      publisherId: id,
    });
  }

  function renderCategoryList() {
    return categoryList.data.map((item) => {
      return (
        <ListContent>
          <LabelContent
            onClick={() => handleFilterCategory(item.id)}
            style={{
              color: categorySelected === item.id ? "var(--primary)" : "",
            }}
          >
            {item.name}
          </LabelContent>
        </ListContent>
      );
    });
  }

  function renderPublisherList() {
    return publisherList.data.map((item) => {
      return (
        <ListContent>
          <LabelContent
            onClick={() => handleFilterPublisher(item.id)}
            style={{
              color: publisherSelected === item.id ? "var(--primary)" : "",
            }}
          >
            {item.name}
          </LabelContent>
        </ListContent>
      );
    });
  }

  function renderProductList() {
    return (
      <WrapperProduct>
        {productList.data.map((productItem, productIndex) => (
          <ProductItem key={productIndex}>
            <ImgContainer>
              <Link>
                <img src={productItem.image} alt={productItem.name} />
              </Link>
              {productItem.countInStock === 0 ? (
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
              <ProductLink
                onClick={() => history.push(`/product/${productItem.id}`)}
              >
                {productItem.name}
              </ProductLink>
              <Price>
                <PriceLabel>${productItem.price}</PriceLabel>
              </Price>
            </Bottom>
          </ProductItem>
        ))}
      </WrapperProduct>
    );
  }

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
                <LabelContent
                  onClick={() => handleFilterCategory(null)}
                  style={{
                    color: categorySelected === null ? "var(--primary)" : "",
                  }}
                >
                  Tất Cả
                </LabelContent>
              </ListContent>
              {renderCategoryList()}
            </BlockContent>
          </div>

          <div>
            <BlockTitle>
              <LeftHeading>Nhà Cung Cấp</LeftHeading>
            </BlockTitle>
            <BlockContent>
              <ListContent>{renderPublisherList()}</ListContent>
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
                <option value="DESC" onChange={() => handleFilterCategory()}>
                  Giảm dần
                </option>
              </select>
            </ItemFilter>
            <button>Apply</button>
          </Form>
          {renderProductList()}
          <Pagination></Pagination>
        </RightLayout>
      </ProductsLayout>
    </SectionProduct>
  );
}

const mapStateToProps = (state) => {
  const { productList, categoryList, publisherList } = state.productReducer;
  return {
    productList: productList,
    categoryList: categoryList,
    publisherList: publisherList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductList: (params) => dispatch(getProductListAction(params)),
    getCategoryList: (params) => dispatch(getCategoryListAction(params)),
    getPublisherList: (params) => dispatch(getPublisherListAction(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
