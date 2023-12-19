import { useState } from 'react';
import styles from './App.module.css';

function App() {

  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState('');
  const [erro, setErro] = useState('');

  const calcularIMC = () => {
    if (!altura || !peso) {
      setErro('Preencha ambos os campos.');
      setIMC(null);
      setClassificacao('');
      return;
    }
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setIMC(imcCalculado.toFixed(2));

    
    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do Peso');
    } else if (imcCalculado < 24.9) {
      setClassificacao('Peso Normal');
    } else if (imcCalculado < 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imcCalculado < 34.9) {
      setClassificacao('Obesidade Grau 1');
    } else if (imcCalculado < 39.9) {
      setClassificacao('Obesidade Grau 2');
    } else {
      setClassificacao('Obesidade Grau 3');
    }
    
    setAltura('');
    setPeso('');
    setErro('');
  };
 
  return (
    <div className={styles.app}>
    <h1>Calculadora de IMC</h1>
    {erro && <p style={{ color: 'red' }}>{erro}</p>}
    <div className={styles.inputContainer}>
      <label>Altura (cm):</label>
      <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} required />
    </div>
    <div className={styles.inputContainer}>
      <label>Peso (kg):</label>
      <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} required />
    </div>
    <button onClick={calcularIMC}>Calcular</button>

    {imc !== null && (
      <div>
        <h2>Resultado:</h2>
        <p>IMC: {imc}</p>
        <p>Classificação: {classificacao}</p>
      </div>
    )}
  </div>
  )
}

export default App
