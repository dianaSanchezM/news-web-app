import React from 'react';

const CardsList = ({category: { path, name}}) => {
    console.log();
    return (
    <div>this is a {name} with {path} categorie</div>
    )
}

export default CardsList;