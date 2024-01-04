import React, { useState } from 'react';


const faqData = [
  {
    question: 'Módulo 1: Bienvenida al Curso:',
    answer: (
      <div>
        <p>✅Bienvenida al curso.</p>
        <p>✅ Seguridad Alimentaria.</p>
        <p>✅Claves para una correcta ubicación de tu huerto en casa.</p>
        <p>✅En este módulo además encontrarás:</p>
        <p><b className="naranja">TU BONO REGALO: </b> Manual de Huertos Orgánicos  descargable en pdf.</p>
        <p> <b className="naranja">EL LINK DE ACCESO:</b>  A Comunidad Privada de Estudiantes en Whatsapp.</p>
      </div>
    ),
  },
  
  {
    question: 'Módulo 2 : Sustratos y Abonos Orgánicos',
    answer:(
      <div>
        <p>✅Qué es el sustrato y porque es importante para tus hortalizas.</p>
        <p>✅Materiales para iniciar tu huerto en Macetas y Mesas de cultivo.</p>
        <p>✅Cómo preparar el sustrato para que no se mueran tus plantas.</p>
        <p>✅Aprende a hacer abono compost (con desechos orgánicos)</p>
        <p><b className="naranja">BONO REGALO: </b>Curso abono orgánico Humus de Lombriz en casa.</p>
      </div>
    ),
  },
  {
    question: 'Módulo 3: Fertilizantes líquidos',
    answer:(
      <div>
        <p>✅Qué son los Fertilizantes naturales y cómo hacerlos con ingredientes caseros.</p>
        <p>✅fertilizante de cáscara de (papa, huevo y plátano).</p>
        <p>✅Fertilizante a base de azúcar y arroz.</p>
        <p>✅ Cómo Preparar fertilizantes sólidos.</p>
        <p>✅Aprende como aplicar fertilizantes a las plantas de tu huerto.</p>
      </div>
    ),
  },
  {
    question: 'Módulo 4: Fabrica tus maceteros con lo que tengas en casa:',
    answer:(
      <div>
        <p>✅ Cómo hacer huertos verticales con botellas.</p>
       
        <p>✅Mesas de cultivo con cajas de fruta.</p>
        <p>✅Ideas para tus macetas con lo que tengas en casa.</p>
      </div>
    ),
  },
  {
    question: 'Módulo 5: Clasificación de Hortalizas y Plantas aromáticas :',
    answer:(
      <div>
        <p>✅Calendario de siembra para hortalizas y plantas aromáticas  (para cualquier país y clima donde vivas).</p>
        <p>✅Hortalizas de siembra directa e indirecta.</p>
        <p>✅Tiempo de Germinación de hortalizas y plantas aromáticas. </p>
        <p>✅Tipos de hortalizas según sus características.</p>
        <p>✅ Tiempo de cosecha de hortalizas y plantas aromáticas.</p>
      </div>
    ),
  },
  {
    question: 'Módulo 6: Técnicas clave para tener cosechas abundantes en tu huerto.',
    answer:(
      <div>
        <p>✅ Porque tener plantas aromáticas en nuestros cultivos y como cultivarlas con éxito.</p>
        <p>✅Asociación de cultivos y como aplicarla.</p>
        <p>✅Rotación de cultivos y como aplicarla.</p>
        <p>✅Correcta aplicación de abonos orgánicos a tus cultivos.</p>
      </div>
    ),
  },
  {
    question: 'Módulo 7: Semillas y Germinación',
    answer:(
      <div>
        <p>✅Cómo obtener semillas de los desechos orgánicos de tu cocina.</p>
        <p>✅ Identifica que semillas te sirven y cuáles no para germinarlas.</p>
        <p>✅ Como hacer un semillero (sustrato, cuidados y crecimiento)</p>
        <p>✅ Momento de trasplantar.</p>
      </div>
    ),
  },
  {
    question: 'Módulo 8: Cuidados esenciales de tu Huerto',
    answer:(
      <div>
        <p>✅ Mantenimiento de tus hortalizas (No te tomará más de 15 minutos diarios).</p>
        <p>✅ Deshierbado y limpieza de tu huerto.</p>
        <p>✅ Cómo hacer una poda a tus hortalizas.</p>
        <p>✅ Adecuado Riego de tus hortalizas</p>
      </div>
    ),
  },
  {
    question: 'Modulo 9: Controla de plagas con plaguicidas orgánicos',
    answer:(
      <div>
        <p>✅ Aprende a identificar las plagas que atacan tu huerto.</p>
        <p>✅ Aprende a preparar plaguicidas orgánicos para combatir las plagas como la araña roja, mosca blanca y el pulgón.</p>
        <p>✅ Plaguicidas orgánicos contra caracoles, hormigas, babosa y otras plagas.</p>
        <p><b className="naranja">BONO REGALO:</b>  Curso de plaguicidas sólidos a base de (huevo, ceniza y canela).</p>
       
      </div>
    ),
  },
  {
    question: 'Módulo 10: Tips e implementación de tu huerto paso a paso',
    answer:(
      <div>
        <p>✅ Implementación paso a paso de tu Huerto en casa.</p>
        <p>✅ Recomendaciones para el riego de tu huerto.</p>
        <p>✅ Cosecha y Postcosecha.</p>
       <p> <b className="naranja">BONO REGALO:
        </b>  Curso de la técnica japonesa de Jardinería Kokedamas.</p>
      </div>
    ),
  },
 
];

const Modulos = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveQuestionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
    <section className='d-flex justify-content-center mt-5'>
    <div className="">
      <h4 className='h1'>Toca para desplegar el Temario⬇️ </h4>
      {faqData.map((item, index) => (
        <div key={index} className="estilos-modulo" onClick={() => handleQuestionClick(index)}>
          <h5>{item.question}</h5>
          {activeQuestionIndex === index && <p className="estilo-respuesta">{item.answer}</p>}
        </div>
      ))}
    </div>
    </section>
     <h5 className="text-center my-4 container">Sabemos que puede ser abrumador pensar en cultivar tus propios alimentos en casa,<b className="verde">pero déjanos decirte que en nuestro Curso te explicaremos fácil y paso a paso  todos los secretos que necesitas saber para cultivar y cosechar tus propios alimentos orgánicos en el espacio que tengas en casa.</b> </h5>
    </>
   
  );
};

export default Modulos;