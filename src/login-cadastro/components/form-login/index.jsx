import { useForm } from 'react-hook-form';
import { SignInButton } from '@clerk/clerk-react';
import "./style.css"
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
   console.log(data);
  };

  return (
    <div className="form-container-login">
    <h2>Entrar</h2>
    <SignInButton asChild={true} forceRedirectUrl="home">
    <div className="container-btn-acess">
      <button className="btn-acess">
        <img src="icon-google.svg" alt="Logo Google" />
        <h3>Entrar com o Google</h3>
      </button>
      <button className="btn-acess">
        <img src="icon-linkedin.svg" alt="Logo Linkedin" />
        <h3>Entrar com o linkedin</h3>
      </button>
    </div>
    </SignInButton>
    <hr />
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <div>
        <label htmlFor="email">E-mail*</label>
        <input
          type="text"
          placeholder="Digite seu email"
          id="email"
          {...register('email', { required: 'O email é obrigatório',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Digite um e-mail válido"
          }
          })}
          />
        </div>
     
      {/* SENHA */}
      <div>
        <label htmlFor="senha">Senha*</label>
        <input
          type="text"
          placeholder="Digite sua senha"
          id="senha"
          {...register('senha', { required: 'O senha é obrigatório' })}
        />
        {errors.senha && <p>{errors.senha.message}</p>}
      </div>
     <div className="btn-submit">
      <button type="submit" className="btn-btn-submit">Entrar</button>
     </div>
    </form>
    <a href="#">Esqeuceu a senha?</a>
    </div>
  )
};

export {LoginForm};