import { Button } from "../../login-cadastro/components/button"
import {Apresentacao} from "../../login-cadastro/components/apresentacao"
import {Header} from "../../login-cadastro/components/header"
import {LoginForm} from "../../login-cadastro/components/form-login"
import "./style.css"
const LoginPage = () =>{
  return (
    <div>
    <Header/>
    <div className="container-login">
      <Apresentacao>
        <Button name="Cadastre-se" url="/"/>
      </Apresentacao>
      <LoginForm/>
    </div>
    </div>
  )
}

export { LoginPage }