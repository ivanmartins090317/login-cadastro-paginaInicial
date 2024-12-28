import { Header } from "../../login-cadastro/components/header"
import { Apresentacao } from "../../login-cadastro/components/apresentacao"
import { Button } from "../../login-cadastro/components/button"
import { FormCadastro} from "../../login-cadastro/components/form-cadastro"

import "./style.css"


const CadastroPage = () =>{
  return(
    <div>
        <Header/>
        <div className="container-cadastro">
          <Apresentacao>
            <Button name="Entrar" url="/login"></Button>
          </Apresentacao>
          <FormCadastro/>
        </div>
    </div>
  )
}

export {CadastroPage}