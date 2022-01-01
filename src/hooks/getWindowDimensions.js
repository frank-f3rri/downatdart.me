function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  console.log(width, height);
  return {
    width,
    height,
  };
}

export default getWindowDimensions;
