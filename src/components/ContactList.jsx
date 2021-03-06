import React from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import PropTypes from 'prop-types';

const ContactList = ({array, filter, onClick}) =>{
  return(
    <ul 
      css={{
        
      }}>
        {array.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())).map(contact => (
          <li 
            css={{
              marginBottom: '10px',
              width: '600px',
              position: 'relative',
            }}
            id={contact.id} 
            onClick={onClick} 
          >{contact.name}: {contact.number}
            <button 
              css={{
                backgroundColor: '#ffffff',
                fontSize: '20px',
                borderRadius: '10px',
                position: 'absolute',
                height: '100%',
                right: '0px',
              }}
              type='button'>Delete</button>
          </li>
          ))}
    </ul>
  )
}

ContactList.propTypes ={
  array: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  })),
  filter: PropTypes.string,
  onClick: PropTypes.func,
}

export default ContactList;