import "./style.css"
import { Search, MapPin  } from 'lucide-react';
import {CardVagas} from '../../components/card-vagas'

const VagasSection = () =>{
    return(
       <div className="container-vagas">
         <h2>Sua próxima oportunidade está mais perto do que você imagina. É só procurar!</h2>
         <form>
          <h3>Pesquise por vagas</h3>
          <div className="container-form-vagas">
          <div className="search-icon-input">
              <Search/>
              <input type="text" placeholder="Aréa ou cargo" />
          </div>
          <div className="location-icon-input">
            <MapPin />
            <input type="text" className="cidade" placeholder="Cidade, estado ou código postal" />
          </div>
          <div>
           <button type="submit">Pesquisar</button>
          </div>
          </div>
         </form>
         <hr />
         {/* sessão card vagas */}
         <div className="vagas">
          <div className="container-cards-vagas">

            {/* card-01 */}
            <CardVagas 
              cargo="Desenvolvedor web" 
              valor="R$ 2.000,00"
              local="São Paulo, SP"
              empresa="Google"
              nivel="Estágio"  
             />
            {/* card-02    */}
            <CardVagas 
              cargo="Desenvolvedor de software" 
              valor="R$ 2.000,00"
              local="Rio de janeiro, RJ"
              empresa="Versel"
              nivel="Aprendiz"  
             />
            {/* card-03    */}
            <CardVagas 
              cargo="Desenvolvedor web" 
              valor="R$ 2.000,00"
              local="Curitiba, PR"
              empresa="Empresa Til"
              nivel="Trainee"  
             />
            {/* card-04 */}
            <CardVagas 
              cargo="Desenvolvedor web" 
              valor="R$ 2.000,00"
              local="São Paulo, SP"
              empresa="Empresa Til"
              nivel="Júnior"  
             />
            {/* card-05    */}
            <CardVagas 
              cargo="Desenvolvedor web" 
              valor="R$ 2.000,00"
              local="São Paulo, SP"
              empresa="Empresa Til"
              nivel="Pleno"  
             />
            {/* card-06    */}
            <CardVagas 
              cargo="Desenvolvedor web" 
              valor="R$ 2.000,00"
              local="São Paulo, SP"
              empresa="Empresa Til"
              nivel="Sênior"      
             />

          </div>

              <div className="btn-verMais">
               <button>Ver mais</button>
              </div>
         </div>
       </div>
    )
}

export { VagasSection}