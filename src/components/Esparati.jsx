import { HiBadgeCheck } from "react-icons/hi";
const Esparati = ()=>{
    const data = [
        { icon: <HiBadgeCheck />, description: '  Hacer un huerto en casa que te permita <strong>cosechar tus propios alimentos libres de agroquímicos tóxicos.</strong>' },
        { icon: <HiBadgeCheck />, description: 'Conectar con la naturaleza y liberarte del estrés.' },
        { icon: <HiBadgeCheck />, description: 'Disfrutar junto a tu familia de <strong> verduras y hortalizas frescas, más ricas y nutritivas cultivadas por ti mismo(a)</strong>' },
        { icon: <HiBadgeCheck />, description: '<strong>Ahorrar dinero </strong> en la compra de alimentos.' },
      ];
return (
    <>
<h3 className="text-center">Es para ti si buscas</h3>
<article className="grid ">

    {data.map((item, index) => (
        
      <div  key={index} className="d-flex my-3">
       <span className="h3 ">{item.icon}</span> 
       <p className="h4" dangerouslySetInnerHTML={{ __html: item.description }}></p>
      </div>
    ))}
</article>

 
    </>
);
}
export default Esparati