import { IoShieldCheckmarkSharp } from "react-icons/io5";
const Informacion =()=>{
    const data = [
        { icon: <IoShieldCheckmarkSharp />, description: 'Como hacer un huerto orgánico desde cero para cultivar  <strong>tomate, lechuga, pepino, espinacas, cebolla, cilantro, pimentón</strong> y muchas hortalizas más 100% orgánicas. ' },
        { icon: <IoShieldCheckmarkSharp />, description: 'Cómo <strong>hacer un huerto orgánico en pequeños espacios</strong> ¡Te sorprenderá lo fácil que es!' },
        { icon: <IoShieldCheckmarkSharp />, description: ' Como preparar <strong>Sustratos, abonos y fertilizantes orgánicos</strong> para que tus hortalizas no se mueran.' },
        { icon:<IoShieldCheckmarkSharp />, description: '<strong>Hacer tus propios maceteros y mesas de cultivo  </strong>con materiales que ya tienes en casa. ' },
        { icon:<IoShieldCheckmarkSharp />, description: '<strong>Calendarios de siembra para hortalizas y plantas aromáticas </strong> (Aplica para cualquier país con 2 o 4 estaciones climáticas)' },
        { icon:<IoShieldCheckmarkSharp />, description: '<strong>Técnicas clave </strong>para que tu huerto de más cosechas y las plagas no puedan hacer nada.' },
        { icon:<IoShieldCheckmarkSharp />, description: 'Donde conseguir <strong>semillas</strong> y el paso a paso para hacer tu propios <strong>semilleros</strong> en casa.' },
        { icon:<IoShieldCheckmarkSharp />, description: '<strong> Cuidados de tu huerto </strong> (riego, poda, deshierbado, control de plagas con plaguicidas orgánicos efectivos)' },
        { icon:<IoShieldCheckmarkSharp />, description: '<strong>Cosecha y postcosecha </strong>' },
      ];
    return(
        <>
<h3 className="text-center">¿Qué vas a aprender?</h3>
<article className="grid ">

    {data.map((item, index) => (
        
      <div  key={index} className="d-flex my-3">
       <span className="h3 ">{item.icon}</span> 
       <p className="h4" dangerouslySetInnerHTML={{ __html: item.description }}></p>
      </div>
    ))}
</article>
<div className="d-flex justify-content-center">
<img src="https://i.ibb.co/r0tthJ9/para-web.png" alt="foto de huertas organicas" className="ajustarimagen" />
    
</div>
<h3 className="text-center my-4">¿Cómo es el Curso?</h3>
<p className="h4">Podrás seguir este curso <b>a tu propio ritmo y horario </b>através de clases prácticas, 100% en video y <b>siguiendo un paso a paso sencillo</b> a los cuáles tendrás <b>acceso de por vida </b>en tu correo electrónico inmediatamente después de inscribirte.
<br />
<br />

Además tendrás  <b>Soporte  con nuestros Ingenieros Expertos en la Comunidad Privada de estudiantes en Whatsapp</b>, donde podrás hacer tus preguntas y aprender mucho más de las experiencias de los demás estudiantes.</p>
        </>
    )
};
export default Informacion
