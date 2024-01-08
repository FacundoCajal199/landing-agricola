import { HiBadgeCheck } from "react-icons/hi";
const Esparati = ()=>{
    const data = [
        { icon: <HiBadgeCheck className="amarillo" />, description: '  Hacer un huerto en casa que te permita <strong>cosechar tus propios alimentos libres de agroquímicos tóxicos.</strong>' },
        { icon: <HiBadgeCheck className="amarillo"/>, description: 'Conectar con la naturaleza y liberarte del estrés.' },
        { icon: <HiBadgeCheck className="amarillo"/>, description: 'Disfrutar junto a tu familia de <strong> verduras y hortalizas frescas, más ricas y nutritivas cultivadas por ti mismo(a)</strong>' },
        { icon: <HiBadgeCheck className="amarillo"/>, description: '<strong>Ahorrar dinero </strong> en la compra de alimentos.' },
      ];
return (
    <>
<h1 className="text-center style-titulos">Es para ti si buscas</h1>
<article className="grid container">

    {data.map((item, index) => (
        
      <div  key={index} className="d-flex my-3 container">
       <span className="h3 ">{item.icon}</span> 
       <p className="h4 container" dangerouslySetInnerHTML={{ __html: item.description }}></p>
      </div>
    ))}
</article>

 
    </>
);
}
export default Esparati