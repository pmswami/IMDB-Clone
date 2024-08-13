import { Box, Typography, styled } from "@mui/material";
import React from "react";

const Component = styled(Box)`
  width: 40%;
`;

const Poster = styled("img")({
  width: 88,
});

function UpNext(props) {
  return (
    <Component>
      <Typography>Up Next</Typography>
      {props.movies.splice(0, 3).map((movie) => (
        <Box
          style={{ display: "flex", padding: "10px 10px", margin: "10px 10px" }}
        >
          <Poster
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt="poster"
          />
          <Typography>{movie.original_title}</Typography>
        </Box>
      ))}
    </Component>
  );
}

export default UpNext;
