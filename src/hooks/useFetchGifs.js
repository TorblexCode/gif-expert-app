import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = category => {
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getImg = async () => {
    const newImage = await getGifs(category);
    setImages(newImage);
    setisLoading(false);
  };

  useEffect(() => {
    getImg();
  }, []);

  return {
    images,
    isLoading
  };
};
