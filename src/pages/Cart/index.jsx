import React from "react";
// import "./styles.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Form, Select } from "../ProductDetail";

const Cart = styled.div`
  margin: 10rem auto;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 0.5rem;
  color: var(--white);
  background-color: #1890ff;
  font-weight: bold;
`;

const Td = styled.td`
  padding: 1rem 0.5rem;
  img {
    width: 8rem;
    height: 8rem;
    margin-right: 1rem;
  }
  &.total {
    font-weight: 700;
  }
`;

const CartInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.p`
  color: var(--black);
  @media (max-width: 576px) {
    display: none;
  }
`;

const LinkWrapper = styled(Link)`
  color: var(--primary);
  font-size: 1.4rem;
  :hover {
    color: var(--primary);
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  flex-direction: column;
  margin-top: 2rem;
  div {
    margin-left: auto;
  }
`;

const TotalTable = styled.table`
  border-top: 3px solid #1890ff;
  width: 100%;
  max-width: 35rem;
`;

const TotalLink = styled.button`
  display: inline-block;
  background-color: #1890ff;
  color: var(--white);
  padding: 1.3rem 2rem;
  font-size: 1.6rem;
  font-weight: 500;
  border-radius: 3rem;
  outline: none;
  border: none;
  cursor: pointer;
`;

function cartPage() {
  return (
    <Cart className="container">
      <Table>
        <thead>
          <tr>
            <Th>Sản Phẩm</Th>
            <Th>Số Lượng</Th>
            <Th>Giá</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>
              <CartInfo>
                <Link>
                  <img src="/images/product8.jpg" alt="" />
                </Link>
                <div>
                  <Link>
                    <Title>Tìm Em Nơi Anh - Find Me</Title>
                  </Link>
                  <span>Giá: $300000</span>
                  <br />
                  <LinkWrapper>Xóa</LinkWrapper>
                </div>
              </CartInfo>
            </Td>
            <Td>
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
            </Td>
            <Td>$300000</Td>
          </tr>
        </tbody>
      </Table>

      <TotalPrice>
        <div>
          <TotalTable>
            <tbody>
              <tr>
                <Td>Tổng Tiền</Td>
                <Td>$30000</Td>
              </tr>
              <tr>
                <Td>Thuế</Td>
                <Td>$0</Td>
              </tr>
              <tr>
                <Td>Thành Tiền</Td>
                <Td className="total">$2000000</Td>
              </tr>
            </tbody>
          </TotalTable>
          <TotalLink type="button">Thanh Toán</TotalLink>
        </div>
      </TotalPrice>
    </Cart>
  );
}

export default cartPage;
