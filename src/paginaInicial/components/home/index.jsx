import { Header } from "../header"
import { Mascote } from "../mascote"
import { CarrosselSobre } from "../carrossel-sobre" 
import { VagasSection } from "../vagas"

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
    </div>
  )
}

export { Home }