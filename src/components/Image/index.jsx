const Image = ({ src, alt, size = 'small' }) => (
  <img src={src} alt={alt} className={`image ${size}`} />
);

export default Image;
