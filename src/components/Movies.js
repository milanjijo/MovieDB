import React from "react";

import {IMAGE_BASE_URL, POSTER_SIZE} from '../config';
//Components
import Grid from './Grid';
import Spinner from './Spinner';
//Hooks
import { useMovieFetch } from "../hooks/useMovieFetch";
//Image
import NoImage from '../images/no_image.jpg';

const Movie=()=> {

  return(
    <>
      <div>Movie</div>
    </>
  );

};

export default Movie;