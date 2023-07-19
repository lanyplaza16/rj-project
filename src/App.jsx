import {Header} from './componentes/Header/Header'
import {ItemListContainer} from './componentes/ItemListContainer/ItemListContainer'
import "./styles/styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
      <div>
        <Header />
        <ItemListContainer saludo={"Bienvenidos"} />
      </div>
  )
}
export default App
