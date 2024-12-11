const products = [
    { title: 'Carrot', isFruit: false, id: 1 },
    { title: 'Orange', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
    { title: 'Lime', isFruit: true, id: 4 },
    { title: 'Kiwi', isFruit: false, id: 5 },
  ];
  
  export default function ShoppingList() {
    const listItems = products.map(product =>
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'darkblue' : 'red'
        }}
      >
        {product.title}
      </li>
    );
  
    return (
      <ul>{listItems}</ul>
    );
  }