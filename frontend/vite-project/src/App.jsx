import { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
import cps from './assets/cps.png';
import imgFundo from './assets/imgFundo.jpg';
import imgBanner from './assets/imgBanner.png';

export default function App() {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem('');
    setCarregando(true);

   try {
      // Envia CPF e SENHA para a API
      const response = await fetch('http://localhost:3001/api/cadastrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cpf, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.redirectUrl) {
          window.location.href = data.redirectUrl;
        }
      } else {
        setMensagem(data.erro || 'Erro ao processar o acesso.');
      }
    } catch (error) {
      setMensagem('Não foi possível conectar ao servidor.');
    } finally {
      setCarregando(false);
    }
  };

const handleInstitutionalLogin = () => { 
  console.log('Iniciando login institucional...'); 
}
  return (
    <div
      className="page"
      style={{ '--bg-image': `url(${imgFundo})` }}
    >
      <div className="login-card">
        <div className="form-section">
          <div className="form-header">
            <img src={logo} alt="Logo" className="form-logo" />
            <h1>Acesso à plataforma de pesquisa</h1>
            <p>
              Realize seu acesso de forma facilitada com sua conta institucional
            </p>
          </div>

          <button
            type="button"
            className="btn-primary"
            onClick={handleInstitutionalLogin}
          >
            Entrar com sua conta institucional
          </button>

          <div className="divider">ou</div>

          <div className="section-title">
            Utilize o seu CPF e senha.
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                type="text"
                placeholder="Informe seu CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="senha">Senha</label>
              <input
                id="senha"
                type="password"
                placeholder="Informe sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              disabled={carregando}
            >
              {carregando ? 'Entrando...' : 'Entrar com CPF e senha'}
            </button>
          </form>

          {mensagem && (
            <div className="form-error">
              {mensagem}
            </div>
          )}

          <div className="form-footer-note">
            * No primeiro acesso clique em Redefinir Senha
          </div>

          <div className="divider">ou</div>

          <div className="form-footer">
            Problemas com acesso?{' '}
            <a href="#" className="help-link">
              Redefinir senha
            </a>
            {' '}ou{' '}
            <a href="#" className="help-link">
              Obter ajuda
            </a>
          </div>

          <img
            src={cps}
            alt="Logo CPS"
            className="form-logo-cps"
          />
        </div>

        <div className="banner-section">
          <img src={imgBanner} alt="Banner" />
        </div>
      </div>
    </div>
  );
}