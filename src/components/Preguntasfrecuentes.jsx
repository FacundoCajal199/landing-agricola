import React, { useState } from 'react';

const PreguntasYRespuestas = () => {
  const [preguntaSeleccionada, setPreguntaSeleccionada] = useState(null);

  const preguntasYRespuestas = [
    {
      pregunta: '¿Cómo me llega el acceso al Curso?',
      respuesta: (
        <div>
          <p>Es muy fácil!  Una vez haces el pago inmediatamente llega a tu correo <b>un correo de hotmart con el link de acceso al Curso</b>, le das clic al link de acceso, creas tu contraseña y ya puedes iniciar a ver las clases.texto en negritas.</p>
          <p>Recuerda que  <b>tu  usuario es tu correo  y la contraseña es la que creas cuando vas a ingresar al Curso.</b></p>
          <p>✅ Para  ingresar desde tu celular sólo descargas la app <b>Hotmart</b> e ingresas con tu usuario y contraseña.</p>
          <p>✅ Para acceder desde el computador siempre puedes hacerlo por el link que te llegó al correo.

y listo ¡Disfruta tu proceso de aprendizaje y aprovechalo al máximo!</p>
        </div>
      ),
    },
    {
      pregunta: '¿Es un curso en línea o presencial?',
      respuesta: (
        <div>
          <p>Nuestro programa de Huertos Orgánicos es <b>100% Online</b>, lo cuál te da la facilidad  de estudiar en los horarios que tu elijas y además <b> tendrás las clases de por vida para que puedas estudiarlas las veces que desees.</b></p>
        </div>
      ),
    },
    {
      pregunta: '¿Es seguro hacer el pago?',
      respuesta: (
        <div>
          <p><b>¡Claro que sí! el pago es 100% seguro</b>  y se realiza  por medio de Hotmart la plataforma de cursos digitales más grande y segura de habla hispana.</p>
          <p>El pago lo haces directamente en hotmart e  inmediatamente te llega el  link de acceso al curso a tu correo electrónico registrado.  El link de acceso que llega a tu correo te lleva al curso dentro de la plataforma así que  <b>no hay riesgo alguno.</b> </p>
        </div>
      ),
    },
    {
      pregunta: '¿Si se aprende bien Online?',
      respuesta: (
        <div>
          <p> <b>Claro que sí!</b> Todas las técnicas son muy sencillas de seguir, nuestro curso esta diseñando para que cualquier persona pueda aprender desde cero a cultivar sus propias verduras y hortalizas orgánicas en casa.</p>
          <p>Recuerda que ¡No estarás sólo! contarás con soporte personalizado  <b>vía whatsapp con uno de nuestros Ingenieros para que puedas hacer todas las preguntas que tengas. </b></p>
        </div>
      ),
    },
    {
      pregunta: 'No tengo tarjeta para hacer el pago',
      respuesta: (
        <div>
          <p> No te preocupues,<b> en algunos países podrás hacerlo en Efectivo (Perú, Chile, Colombia y México)</b> o si en tu país no está permitido, puedes vicular tu cuenta débito a Paypal (No te toma más de 5 minutos) y podrás  hacer el pago Inmediatamente.</p>
          <p>Si quieres hacer pago en efectivo para  no  perderte la oportunidad de aprender a  cultivar tus propios aliementos en casa, escríbemos en el <b>Botón Verde (HACER PAGO EN EFECTIVO) y te ayudaremos.</b></p>
        </div>
      ),
    }
    
  ];

  return (
    <div className='container'>
        <h1 className='text-center style-titulos my-4'>PREGUNTAS FRECUENTES</h1>
      {preguntasYRespuestas.map((item, index) => (
        <div key={index} className='colorpreguntas'>
          <h5 onClick={() => setPreguntaSeleccionada(index)} className='colorpreguntas2'>
            {item.pregunta}
          </h5>
          {preguntaSeleccionada === index && item.respuesta}
        </div>
      ))}
    </div>
  );
};

export default PreguntasYRespuestas;