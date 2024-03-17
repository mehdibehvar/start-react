
const ProducList = () => {
    const products=[
        {name:"apple",id:1},
        {name:"samsung",id:2},
        {name:"motorola",id:3},
    ];

  return (
    <ul>
        {products.map((product,index)=><li key={product.id}>{product.name}</li>)}
    </ul>
  )
}

export default ProducList