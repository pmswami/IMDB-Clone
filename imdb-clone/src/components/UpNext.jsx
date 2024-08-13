import { Box, Typography, styled } from "@mui/material";
import React from "react";

const Component = styled(Box)`
  width: 40%;
  display: flex
  flex-direction: column
  align-items: baseline
  padding-left: 20px
  & > p {
    color: black;
    font-weight: 600
    font-size: 18px
    margin-bottom: 10px
  }
`;

const Wrapper = styled(Box)`
  color: black;
  display: flex;
  & > p {
    margin-left: 20px;
  }
`;

const Poster = styled("img")({
  width: 88,
});

function UpNext(props) {
  return (
    <Component>
      <Typography>Up Next</Typography>
      {props.movies.splice(0, 3).map((movie) => (
        <Wrapper>
          <Poster
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt="poster"
          />
          <Typography>{movie.original_title}</Typography>
        </Wrapper>
      ))}
    </Component>
  );
}

export default UpNext;
