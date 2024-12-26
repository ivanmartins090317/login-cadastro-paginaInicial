
import "./style.css"
import { Building2 } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { NotebookPen } from 'lucide-react';
import { BookType } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { UserRoundPlus } from 'lucide-react';



const levelJob = {
  Estágio: <GraduationCap />,
  Aprendiz: <NotebookPen />,
  Trainee: <BookType />,
  Júnior:<UserRound />,
  Pleno:<UsersRound />,    
  Sênior:<UserRoundPlus />,
}

const CardVagas = ({cargo, valor, local, empresa, nivel}) =>{
  return(   
  <div className="card-vagas">
    <div className="descricao-vaga">
      <h4>{cargo}</h4>
      <p>{valor}</p>
      <p className="local">{local}</p>
    </div>
    <div className="empresa-nivel">
      <div className="container-empresa">
      <Building2 />
      <p>{empresa}</p>  
      </div>
      <div className="container-nivel">
       <p>{levelJob[nivel]}</p>
       <p className="nivel">{nivel}</p>
      </div>
    </div>
  </div> 
  )
}


export { CardVagas }