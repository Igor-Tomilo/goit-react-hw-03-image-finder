import PropTypes from 'prop-types';

function ImageErrorView({ message }) {
  return (
    <div role="alert">
      <h1>Nothing here. {message}</h1>
    </div>
  );
}

ImageErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ImageErrorView;
