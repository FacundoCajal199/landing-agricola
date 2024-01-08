const Testimonios =()=>{
    const videos = [
        '<iframe src="https://player.vimeo.com/video/827124445?h=90205e1068" width="600px" height="600" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>',
        '<iframe src="https://player.vimeo.com/video/835222409?h=734dc4903b" width="600px" height="600" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>',
        '',
       
      ];
    return(
        <>
        <section className="bg-bonos">
        <h1 className="text-center my-5 verde py-5 style-titulos">Mira lo que dicen nuestros estudiantes:</h1>
        <div className="grid">
      {videos.map((video, index) => (
        <div key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: video }} />
       
      ))}
     
    </div>
    <div className="container ajustar mt-4">
        <img src="https://i.ibb.co/4sVgKrJ/testimonioescrito8.jpg" alt="testimonio de redes" className="ajustartestimonios "/>
        <img src="https://i.ibb.co/yF2RYM8/testimonioescrito4.jpg" alt="testimonio de redes" className="ajustartestimonios "/>
        <img src="https://i.ibb.co/z68JYGH/testimonioescrito7.jpg" alt="testimonio de redes" className="ajustartestimonios "/>
        <img src="https://i.ibb.co/KzkKGyT/testimonioescrito2.jpg" alt="" className="ajustartestimonios" />
      </div>
      <p className="text-center h4 container mt-5 fff"> <b className="verde">Más de 3.200 estudiantes</b>  <b className="fff">ya están disfrutando de sus huertos en casa, muchos de ellos ya lograron sus primeras cosechas  y están comiendo alimentos más nutritivos y más frescos.</b>  <b className="verde">Si ellos han iniciado apesar de su falta de tiempo, poco espacio y falta de conocimiento para hacer su huerto…</b></p> 
      <p className="text-center h5"> <b className="fff">Entonces dime ¿Porqué  no hacerlo? </b></p>
        </section>
     
        </>
    )
}
export default Testimonios