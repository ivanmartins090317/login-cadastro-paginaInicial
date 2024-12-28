import { Header } from "../components/header"
import { Mascote } from "../components/mascote"
import { CarrosselSobre } from "../components/carrossel-sobre" 
import { VagasSection } from "../components/vagas"

import "./style.css"
const Home = () =>{
  return(
    <div className="container-home">
      <Header/>
      <div className="mascote-home">
       <Mascote/>
       <CarrosselSobre/>
      </div>
      <VagasSection/>
      <h3>Nossos serviços</h3>
      <h3>footer</h3>
    </div>
  )
}

export { Home }