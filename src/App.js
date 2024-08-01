import Neuro from './Neuro.png';
import './App.css';

function App() {
  return (
    <div id="all">
      <header>
        <p id="title">
          Neurocirurgião
        </p>
      </header>
      <div id="container">
      <div id="img">
      <img src={Neuro} />
      </div>
        <br/>
        <br/>
        <div class="text">
          <h2>Introdução:</h2>
          <p>
            Neurocirurgião é o médico especialista em cirurgia do sistema nervoso central e periférico, que abrangem o cérebro,
            a coluna e todas as ramificações nervosas responsáveis pelos cinco sentidos e por todos os movimentos do corpo.
            E um neurocirurgião pode tratar traumatismos cranianos, aneurismas, malformações,
            tumores do encéfalo e da caixa óssea craniana, tumores da coluna; hidrocefalia, edema cerebral,
            deformações do crânio congênitas, afundamentos e falhas ósseas; dores crônicas com procedimentos cirúrgicos, entre outros.
          </p>
        </div>
        <br/>
        <div class="text">
          <h2>Habilidades Necessárias:</h2>

          <li>Empatia</li>
          <li>Liderança</li>
          <li>Pensamento Crítico</li>
          <li>Concentração</li>
          <li>Mãos Precisas</li>
          <li>Educação Continuada</li>
          <li>Organização</li>
          <li>Bom Gerenciamento do Tempo</li>
        </div>
        <br/>
        <div class="text">
          <h2>Oportunidades de Carreira:</h2>
          <li>Cardiocirurgião</li>
          <li>Cirurgião Torácico</li>
          <li>Ortopedista</li>
        </div>
        <br/>
        <div class="text">
          <h2>Ferramentas e Tecnologias Usadas:</h2>
          <li>IoT Médico</li>
          <li>Telemedicina</li>
          <li>Wearables</li>
          <li>IA</li>
          <li>Bioimpressão 3D</li>
          <li>Aplicativos Méciso</li>
          <li>Prontuário Eletrônico</li>
          <li>Microscópio de Alta Resolução</li>
          <li>Telemedicina</li>
          <li>BIP</li>
          <li>Utensílios Médicos</li>
        </div>
        <br/>
        </div>
      <footer>
        <p>Todos os direitos reservados © 2024</p>
      </footer>
    </div>


  );
}

export default App;
