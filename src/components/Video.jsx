const Video = () => {
    const embedCode =
      '<iframe src="https://player.vimeo.com/video/899570514?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1000px" height="300px" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="Presentación Oficial Curso Huertos Orgánicos"></iframe>';
  
    return (
      <>
        <section className="d-flex justify-content-center">
          <div className="">
            <div dangerouslySetInnerHTML={{ __html: embedCode }} />
          </div>
        </section>
      </>
    );
  };
  
  export default Video