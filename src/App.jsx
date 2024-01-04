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
    </>
  )
}

export default App
