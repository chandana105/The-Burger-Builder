import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
  // console.log(props)
  // code to trasnform ingredits t oarray
  const ingredients = [];
  // ingredients: {bacon: 2, cheese: 2, meat: 1, salad: 2}
  
  for (let ingredientName in props.ingredients) {
    // ingredients.push(props.ingredients[ingredientName])
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  // console.log(ingredients);

  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #ccc',
          padding: '5px',
        }}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });


  return (
    <div className={classes.Order}>
      <p>Ingredients : {ingredientOutput}</p>
      <p>
        Price <strong>
          Rs {Number.parseFloat(props.price).toFixed(2)}
        </strong>{' '}
      </p>
    </div>
  );
};

export default order;

