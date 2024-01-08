import Video from './components/Video'
import './App.css'
import Titulo from './components/Titulo'
import 'bootstrap/dist/css/bootstrap.min.css';
import Esparati from './components/Esparati';
import Informacion from './components/Informaciongeneral';
import Modulos from './components/Modulos';
import Lograr from './components/Quevasalograr';
import Oferta from './components/Oferta';
import Testimonios from './components/Testimonios';
import Bonos from './components/Bonos';
import Garantia from './components/Garantias';
import Evidencia from './components/Evidencia';
import Reoferta from './components/Reoferta';
import PreguntasYRespuestas from './components/Preguntasfrecuentes';

function App() {
  

  return (
    <>
    <Titulo></Titulo>
     <Video></Video> 
     <Esparati></Esparati>
     <Informacion></Informacion>
     <Modulos></Modulos>
     <Lograr></Lograr>
     <Oferta></Oferta>
     <Testimonios></Testimonios>
     <Bonos></Bonos>
  <Garantia></Garantia>
  <Evidencia></Evidencia>
  <Reoferta></Reoferta>
  <PreguntasYRespuestas></PreguntasYRespuestas>
    </>
  )
}

export default App
