import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?query=${inputValue}`);
  };

  return (
    <header>
      <Nav>
        <ImageBox>
          <img src="/logo.svg" />
        </ImageBox>

        <SearchForm onSubmit={handleSubmit}>
          <SrcBtn>
            <SrcImg src="/search.svg" />
          </SrcBtn>
          <Input
            type="text"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            placeholder="사진과 일러스트 검색"
          />
        </SearchForm>
        <RightSideDiv>
          <ul>
            <li>
              <Span>탐색</Span>
            </li>
          </ul>
          <Divider></Divider>
          <div>
            <Span>로그인</Span>
          </div>
        </RightSideDiv>
        <HamBtnDiv>
          <HamBtn>
            <img src="/menu.svg" />
          </HamBtn>
        </HamBtnDiv>
      </Nav>
    </header>
  );
};

const Nav = styled.nav`
  display: flex;
  margin: 11px 20px;
`;
const ImageBox = styled.a`
  margin-right: 16px;
  margin-top: 2px;
`;
const SearchForm = styled.form`
  background-color: #eee;
  display: flex;
  align-items: center;
  flex-grow: 1;
  border-radius: 24px;
`;
const Input = styled.input`
  background: none;
  border: none;
  width: 100%;
  height: 40px;
`;
const SrcBtn = styled.button`
  background: none;
  border: none;
`;

const SrcImg = styled.img`
  padding-left: 14px;
  height: 20px;
  width: 20px;
`;
const RightSideDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 16px;
  column-gap: 24px;
`;
export const Span = styled.span`
  font-size: 14px;
  color: #767676;
`;
export const Divider = styled.div`
  align-self: center;
  background-color: #d1d1d1;
  height: 32px;
  width: 1px;
`;
const HamBtnDiv = styled.div`
  display: flex;
`;
const HamBtn = styled.button`
  border: none;
  background: none;
`;

export default Header;
