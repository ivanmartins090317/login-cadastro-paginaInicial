import "./style.css"
const Apresentacao = ({children}) =>{
  return (

    <div className="container">
      <p>Diga adeus às entrevistas tradicionais e dê boas-vindas a uma nova forma de encontrar talentos. Com nossa plataforma, o processo de seleção se torna mais dinâmico e divertido, com jogos online e dinâmicas que revelam as melhores habilidades dos candidatos. Experimente agora!</p>
      <div className="imagem-apresentacao">
        <img src="blocos-apresentaçãodesktop.png" alt="" />
      </div>
      <h3>Já possui uma conta?</h3>
      {children}
    </div>
  )
}

export {Apresentacao}