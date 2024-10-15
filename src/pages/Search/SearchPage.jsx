import { useQuery } from "@tanstack/react-query";
import { customAxios } from "../../api/api";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const getPhotos = async (searchResult) => {
  const response = await customAxios.get(
    `/search/photos?query=${searchResult}`
  );
  return response.data;
};

const Search = () => {
  const location = useLocation();
  const queryString = location.search;
  const { data, isLoading, error } = useQuery({
    queryKey: ["photos", queryString],
    queryFn: () => getPhotos(queryString),
    enabled: !!queryString,
  });

  if (data === undefined) {
    return <div>올바르지 않은 접근입니다.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <div>
      SearchPage
      {data.results.map((photo) => {
        return (
          <ImgDiv key={photo.id}>
            <Img id={photo.id} src={photo.urls.regular} />
          </ImgDiv>
        );
      })}
    </div>
  );
};

const Img = styled.img`
  height: 100px;
  width: 100px;
  margin: 30px;
`;

const ImgDiv = styled.div``;

export default Search;
