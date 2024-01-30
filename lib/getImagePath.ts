const getImagePath = (imagePath?: string, fullSize?: boolean) => {
  // full size give me original, otherwise, 500w
  return imagePath
    ? `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/${imagePath}`
    : "https://links.papareact.com/o8z"; //didn't pass image path, give me this instead
};

export default getImagePath;
