import styled from "styled-components";

const Header = () => {
  return (
    <header>
      <nav>
        <ImageBox>
          <img src="/logo.svg" />
        </ImageBox>
        <div>여백</div>
        <MiddleSideBox>
          <SearchForm>
            <button>
              <img src="/search.svg" />
            </button>
            <div>
              <input />
            </div>
            <div>
              <div>여백</div>
            </div>
          </SearchForm>
          <RightSideDiv>
            <div>여백</div>
            <ul>
              <li>
                <a>탐색</a>
              </li>
            </ul>
            <div>여백</div>
            <Divider>|</Divider>
            <div>여백</div>
            <div>
              <a>로그인</a>
            </div>
          </RightSideDiv>
        </MiddleSideBox>
        <div>여백</div>
        <HamBtnDiv>
          <HamBtn>
            <img src="/menu.svg" />
          </HamBtn>
        </HamBtnDiv>
      </nav>
    </header>
  );
};

const ImageBox = styled.a``;
const MiddleSideBox = styled.div``;
const SearchForm = styled.form``;
const RightSideDiv = styled.div``;
const Divider = styled.div``;
const HamBtnDiv = styled.div``;
const HamBtn = styled.button``;

export default Header;
