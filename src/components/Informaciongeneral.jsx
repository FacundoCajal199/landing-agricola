import { IoShieldCheckmarkSharp } from "react-icons/io5";
const Informacion =()=>{
    const data = [
        { icon: <IoShieldCheckmarkSharp className="verde"/>, description: 'Como hacer un huerto orgánico desde cero para cultivar  <strong>tomate, lechuga, pepino, espinacas, cebolla, cilantro, pimentón</strong> y muchas hortalizas más 100% orgánicas. ' },
        { icon: <IoShieldCheckmarkSharp className="verde"/>, description: 'Cómo <strong>hacer un huerto orgánico en pequeños espacios</strong> ¡Te sorprenderá lo fácil que es!' },
        { icon: <IoShieldCheckmarkSharp className="verde"/>, description: ' Como preparar <strong>Sustratos, abonos y fertilizantes orgánicos</strong> para que tus hortalizas no se mueran.' },
        { icon:<IoShieldCheckmarkSharp className="verde"/>, description: '<strong>Hacer tus propios maceteros y mesas de cultivo  </strong>con materiales que ya tienes en casa. ' },
        { icon:<IoShieldCheckmarkSharp className="verde"/>, description: '<strong>Calendarios de siembra para hortalizas y plantas aromáticas </strong> (Aplica para cualquier país con 2 o 4 estaciones climáticas)' },
        { icon:<IoShieldCheckmarkSharp className="verde"/>, description: '<strong>Técnicas clave </strong>para que tu huerto de más cosechas y las plagas no puedan hacer nada.' },
        { icon:<IoShieldCheckmarkSharp className="verde"/>, description: 'Donde conseguir <strong>semillas</strong> y el paso a paso para hacer tu propios <strong>semilleros</strong> en casa.' },
        { icon:<IoShieldCheckmarkSharp className="verde"/>, description: '<strong> Cuidados de tu huerto </strong> (riego, poda, deshierbado, control de plagas con plaguicidas orgánicos efectivos)' },
        { icon:<IoShieldCheckmarkSharp className="verde"/>, description: '<strong>Cosecha y postcosecha </strong>' },
      ];
    return(
        <>
<h1 className="text-center style-titulos mt-5">¿Qué vas a aprender?</h1>
<article className="container grid">

    {data.map((item, index) => (
        
      <div  key={index} className="d-flex my-3 container ">
       <span className="h3 ">{item.icon}</span> 
       <p className="h4 container" dangerouslySetInnerHTML={{ __html: item.description }}></p>
       
      </div>
    ))}
       
       
</article>
<h1 className="text-center style-titulos my-4">Algunos huertos de nuestros alumnos</h1>
<div className="ordenimagenes">
  
<img src="https://i.ibb.co/r0tthJ9/para-web.png" alt="foto de huertas organicas" className="ajustarimagen" />
<img src="https://i.ibb.co/Vt3V1gy/para-agregar.png" alt="fotos de huertos de alumnos" className="ajustarimagen"/>
</div>

       <h1 className="text-center my-4 style-titulos">¿Cómo es el Curso?</h1>
<p className="h4 container">Podrás seguir este curso <b className="verde">a tu propio ritmo y horario </b>através de clases prácticas, 100% en video y <b>siguiendo un paso a paso sencillo</b> a los cuáles tendrás <b className="verde">acceso de por vida </b>en tu correo electrónico inmediatamente después de inscribirte.
<br />
<br />

Además tendrás  <b className="verde">Soporte  con nuestros Ingenieros Expertos en la Comunidad Privada de estudiantes en Whatsapp</b>, donde podrás hacer tus preguntas y aprender mucho más de las experiencias de los demás estudiantes.</p>


        </>
    )
};
export default Informacion
