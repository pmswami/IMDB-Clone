import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import { Box, Divider } from "@mui/material";
import Carousel from "react-multi-carousel";
import { Typography, styled } from "@mui/material";
import { categoryMovies } from "../services/api";
import { useLocation } from "react-router-dom";
import {
  POPULAR_API_URL,
  TOPRATED_API_URL,
  UPCOMING_API_URL,
  type,
} from "../constants/constant";
import MoviesList from "../components/MoviesList";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const StyledBanner = styled("img")({
  height: 450,
  width: "100%",
  // margin-top: "20px"
});

const Title = styled(Typography)`
  color: #ffffff;
`;

const Component = styled(Box)`
  width: 80%;
  margin: auto;
`;

const Container = styled(Box)`
    background: #F5F5F5
    padding: 10px
`;

function CategoryMovies(props) {
  const [movies, setMovies] = useState([]);
  const { search } = useLocation();
  const [movieType, setMovieType] = useState("");

  useEffect(() => {
    const getData = async (API_URL) => {
      let response = await categoryMovies(API_URL);
      setMovies(response.results);
    };
    let API_URL = "";
    if (search.includes("popular")) {
      API_URL = POPULAR_API_URL;
      setMovieType(type.popular);
    } else if (search.includes("upcoming")) {
      API_URL = UPCOMING_API_URL;
      setMovieType(type.upcoming);
    } else if (search.includes("toprated")) {
      API_URL = TOPRATED_API_URL;
      setMovieType(type.toprated);
    }
    getData(API_URL);
  }, [search]);

  return (
    <>
      <Header />
      <Component>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
        >
          {movies.map((movie, i) => (
            <>
              <StyledBanner
                key={i}
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt="banner"
              />
              {/* <Title>{movie.original_title}</Title> */}
            </>
          ))}
        </Carousel>
        <Container>
          <Typography variant="h6">IMDB Charts</Typography>
          <Typography variant="h4">{movieType} Movies</Typography>
          <Typography style={{ fontSize: 12, margin: 5 }}>
            IMDB Top {movies.length} movies as rated by regular IMDB Viewers
          </Typography>
          <Divider />
          <MoviesList movies={movies} />
        </Container>
      </Component>
    </>
  );
}

export default CategoryMovies;
