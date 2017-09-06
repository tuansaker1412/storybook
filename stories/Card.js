import React from 'react';

const cardStyles = {
  position: 'relative',
  padding: 10,
  display: '-ms-flexbox',
  display: 'flex',
  MsFlexDirection: 'column',
    flexDirection: 'column',
  minWidth: 0,
  wordWrap: 'break-word',
  backgroundColor: '#fff',
  backgroundclip: 'border-box',
  border: '1px solid rgba(0, 0, 0, 0.125)',
  borderRadius: '0.25rem',
  boxShadow: '0px 1px 8px 1px #ddd',
};

const linkStyles = {
  marginLeft: '1.25rem',
  color: '#3080e8',
  cursor: 'pointer',
}

const Card = ({ children }) => (
  <div style={cardStyles}>
    {children}
  </div>
);

const CardTitle = ({ children }) => (
  <div style={{marginBottom: '0.75rem'}}>
    {children}
  </div>
);

const CardText = ({ children }) => (
  <div style={{marginBottom: 0}}>
    {children}
  </div>
);

const CardLink = ({ children, onClick }) => (
  <a style={linkStyles} onClick={onClick}>
    {children}
  </a>
);

const CardImg = ({ children }) => (
  <img style={{width: '100%', borderRadius: 'calc(0.25rem - 1px)', padding: '5px'}}
    src='...' height='200px' />
);

Card.propTypes = {
  children: React.PropTypes.string.isRequired,
};

CardTitle.propTypes = {
  children: React.PropTypes.string.isRequired,
};

CardText.propTypes = {
  children: React.PropTypes.string.isRequired,
};

CardLink.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

CardImg.propTypes = {
  children: React.PropTypes.string.isRequired,
};

export { Card, CardTitle, CardText, CardLink, CardImg };
