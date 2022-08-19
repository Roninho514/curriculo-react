import './App.css';
import AtividadesExtracurriculares from './components/AtividadesExtracurriculares';
import ExperienciaProfissional from './components/ExperienciaProfissional';
import FormacaoAcademica from './components/FormacaoAcademica';
import Habilidades from './components/Habilidades';
import InformacoesCurriculo from "./components/InformacoesCurriculo";
import Objetivo from './components/Objetivo';
import foto from './imagens/foto.jpg'

function App() {
  return (
    <div className="App">
        <h1>Roni dos Santos Silva</h1>
        <img src={foto}/>
        <InformacoesCurriculo 
          nascimento = "18/01/2002" 
          estadoCivil = "Solteiro" 
          nacionalidade = "Brasileira"
          telefone = "(11) 94346-5718"
          email = "roni.silvasantos514@gmail.com"
          github = "github.com/Roninho514"
          likedin = "Roni Dos Santos Silva"
        />
        <Objetivo/>
        <ExperienciaProfissional/>
        <FormacaoAcademica/>
        <Habilidades/>
        <AtividadesExtracurriculares/>
    </div>
  );
}

export default App;
