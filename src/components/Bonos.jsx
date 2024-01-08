const Bonos =()=>{
    const bonos = [
        {
          image: 'https://i.ibb.co/Vm1fhHG/bonos7.jpg', // Reemplaza con la ruta a tu imagen
          title: 'BONO #1',
          text: [
            'MANUAL DE HUERTOS ORGÁNICOS',
            'Recibe un manual de estudio de cada una de las técnicas que aprenderás en las clases (Formato PDF)',
            'VALORADO EN: 39 USD',
            'SÓLO POR HOY',
            'GRATIS'
          ]
        },
        {
          image: 'https://i.ibb.co/R0FRnMz/bonos6.jpg', // Reemplaza con la ruta a tu imagen
          title: 'BONO #2 ',
          text: [
            'CURSO ABONOS ORGÁNICOS',
            'Aprende lo que pocos saben para nutrir sus plantas  con humus de lombriz y tener cosechas abundantes.(Formato video)',
            'VALORADO EN:  27 USD',
            ' ¡HOY GRATIS!',
          ]
        },
        {
          image: 'https://i.ibb.co/9wDsT9b/bonos4.jpg', // Reemplaza con la ruta a tu imagen
          title: 'BONO #3',
          text: [
            'CURSO PLAGUICIDAS ORGÁNICOS',
            'Aprende los secretos para evitar que las plagas ataquen tu huerto. (Formato video)',
            'VALORADO EN: 19 USD',
            '¡HOY GRATIS!',
            
          ]
        },
        {
          image: 'https://i.ibb.co/HdTZxMz/bonos3.jpg', // Reemplaza con la ruta a tu imagen
          title: 'BONO #4',
          text: [
            'ACCESO A COMUNIDAD PRIVADA DE ESTUDIANTES',
            'Tendrás acceso al grupo exclusivo para estudiantes en  Whatsapp donde podrás hacer tus preguntas y tener soporte de nuestros Ingenieros Expertos.',
            ' VALORADO EN: 99 USD',
            '¡HOY GRATIS!',
           
          ]
        },
        {
          image: 'https://i.ibb.co/n0QGdht/bonos1.jpg', // Reemplaza con la ruta a tu imagen
          title: 'BONO EXTRA',
          text: [
            'CURSO DE KOKEDAMAS',
            'prende a elaborar kokedamas y dale un toque artístico a tu jardín(Formato video)',
            ' VALORADO EN: 29 USD',
            '¡HOY GRATIS!',
            
          ]
        }
      
      ];
    
      return (
        <>
        <section className="bg-bonos">

        <h1 className="text-center mt-5  style-titulos">SI TE INSCRIBES HOY, RECIBE 4 INCREÍBLES BONOS REGALO ¡TOTALMENTE GRATIS!</h1>
        <div className="orden container">
          {bonos.map((bono, index) => (
            <div key={index} className="bono text-center">
              <img src={bono.image} alt={bono.title} className="ajustarbonos" />
              <h2 className="verde">{bono.title}</h2>
              {bono.text.map((line, i) => <p key={i} className="h5 text-light mb-3">{line}</p>)}
            </div>
          ))}
        </div>
        <h2 className="mt-5 text-center verde">LOS 5 BONOS TIENEN UN  VALOR DE MÁS DE $210 USD, PERO SI TE INSCRIBES SERÁN
¡GRATIS POR INSCRIBIRTE HOY!</h2>
<p className="text-center mt-3 h5 py-4 text-bg-light">
Encontrarás los bonos dentro de la plataforma de estudios y tendrás acceso a ellos de forma inmediata.
</p>
        </section>

        </>
        )
}
export default Bonos