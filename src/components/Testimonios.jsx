const Testimonios =()=>{
    const videos = [
        '<iframe src="https://player.vimeo.com/video/827124445?h=90205e1068" width="600px" height="600" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>',
        '<iframe src="https://player.vimeo.com/video/835222409?h=734dc4903b" width="600px" height="600" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>',
        '',
        // Agrega aquí tus otros códigos de incrustación...
      ];
    return(
        <>
        <h1 className="text-center">Mira lo que dicen nuestros estudiantes:</h1>
        <div className="grid">
      {videos.map((video, index) => (
        <div key={index} className="" dangerouslySetInnerHTML={{ __html: video }} />
      ))}
    </div>
        </>
    )
}
export default Testimonios