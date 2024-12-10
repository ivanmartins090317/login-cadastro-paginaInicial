import "./style.css"
const VagasSection = () =>{
    return(
       <div className="container-vagas">
         <h2>Sua próxima oportunidade está mais perto do que você imagina. É só procurar!</h2>
         <form>
          <h3>Pesquise por vagas</h3>
          <div className="container-form-vagas">
          <input type="text" placeholder="Aréa ou cargo" />
          <input type="text" className="cidade" placeholder="Cidade, estado ou código postal" />
          <button type="submit">Pesquisar</button>
          </div>
         </form>
         <hr />
       </div>
    )
}

export { VagasSection}