import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote }) => (
  <p>{quote.quote}</p>
);

Quote.propTypes = {
  quote: PropTypes.object,
};

export default Quote;
