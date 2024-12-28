    
  import { Link } from "react-router-dom";
  import "./style.css"
  const Button = ({name, url}) =>{
    return(
      <button name={name} className="btn-primary">
        <Link to={url} style={{color: 'white', fontWeight:'700'}}>{name}</Link>    
      </button>
    )
  }

  export {Button}
    