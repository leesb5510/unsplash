import styled from "styled-components";
import { Divider, Span } from "./header";

const MainNav = () => {
  return (
    <MainNavDiv>
      <LeftDiv>
        <Ul>
          <li>
            <Span>사진</Span>
          </li>
          <li>
            <Span>일러스트</Span>
          </li>
          <li>
            <Span>Unsplash+</Span>
          </li>
        </Ul>
      </LeftDiv>
      <Divider></Divider>
      <RightDiv>
        <Ul>
          <li>
            <Span>3D 렌더링</Span>
          </li>
          <li>
            <Span>마리</Span>
          </li>
          <li>
            <Span>건축 및 인테리어</Span>
          </li>
          <li>
            <Span>실험적인</Span>
          </li>
          <li>
            <Span>패션 & 뷰티</Span>
          </li>
          <li>
            <Span>필름</Span>
          </li>
          <li>
            <Span>식음료</Span>
          </li>
          <li>
            <Span>자연</Span>
          </li>
          <li>
            <Span>사람</Span>
          </li>
          <li>
            <Span>스포츠</Span>
          </li>
          <li>
            <Span>여행하다</Span>
          </li>
          <li>
            <Span>라이징 스타</Span>
          </li>
        </Ul>
      </RightDiv>
    </MainNavDiv>
  );
};

const MainNavDiv = styled.div`
  box-shadow: 0 1px rgba(0, 0, 0, 0.12);
  display: flex;
`;

const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 20px;
`;

const RightDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 20px;
`;

const Ul = styled.ul`
  display: flex;
  column-gap: 25px;
`;

export default MainNav;
