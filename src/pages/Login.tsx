import React, {/* useContext, */ useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
// import { useParams } from 'react-router-dom';
// import EdisonContext from '../context/EdisonContext';

export default function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalid, setInvalid] = useState(true)


  useEffect(() => {
    inputRolesValidation();
  }, [email, password])

  const inputRolesValidation = () => {
  
    const regex = /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/gm;
    const minLetters = 6;
    if (
      email.length > 0
      && email.match(regex)
      && password.length > minLetters
    ) {
      setInvalid(false)
    } else {
      setInvalid(true)
    }
  }

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const {name, value} = (event.target as HTMLInputElement)
  //   console.log(name, value);
  //   inputRolesValidation();
  // }
  return (
    <div className="initial-page">
        <div className="login-page">
          <section className="login-form">
            <p className="login-paragraph">Informe seu email e senha:</p>
            <form>
              <input
                type="email"
                name="email"
                placeholder="Email"
                data-testid="email-input"
                className="email-input login-input"
                value={ email }
                // onChange={ (event) => handleInputChange(event) }
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Senha"
                data-testid="password-input"
                className="password-input login-input"
                value={ password }
                // onChange={ (event) => handleInputChange(event) }
                onChange={(event) => setPassword(event.target.value)}
              />
              <button
                type="button"
                disabled={ invalid }
                onClick={ () => history('/') }
              >
                Enter
              </button>
              {
                (invalid) ? (
                  <p className="login-paragraph">
                    Por favor preencha os campos corretamente
                  </p>
                ) : <p className="login-paragraph">Bem vindo(a)!</p>
              }
            </form>
          </section>
        </div>
      </div>
  )
}
