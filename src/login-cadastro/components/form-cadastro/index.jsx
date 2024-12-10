import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import "./style.css";

// SCHEMA ZOD
const schema = z.object({
  nome: z.string().min(1, "O nome é obrigatório"),
  email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("Informe um e-mail válido"),
  cargo: z.string().min(1, "O cargo é obrigatório"),
  cnpj: z
    .string()
    .regex(/^\d{14}$/, "O CNPJ deve conter 14 números")
    .min(1, "O CNPJ é obrigatório"),
  address: z.object({
    street: z.string().min(1, "A rua é obrigatória"),
    city: z.string().min(1, "A cidade é obrigatória"),
    state: z.string().min(1, "O estado é obrigatório"),
    cep: z
      .string()
      .regex(/^\d{5}-\d{3}$/, "O CEP deve estar no formato 00000-000")
      .transform((val) => val.replace(/\s+/g, "")),
    country: z.string().min(1, "O país é obrigatório"),
  }),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
  confirmPassword: z
    .string()
    .min(6, "A confirmação de senha é obrigatória"),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"], // Define onde a mensagem de erro aparecerá
  message: "As senhas não coincidem",
});

const FormCadastro = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver:
      zodResolver(schema),  
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  //CHAMADA PARA PARA O BACKEND
  // const onSubmit = async (data) => {

  //   const dadosUsuario = await data

  //   await fetch("http://localhost:8080/users/register", {
  //     method: "POST", // Método HTTP
  //     headers: {
  //       "Content-Type": "application/json" // Tipo de conteúdo
  //     },
  //     body: JSON.stringify(dadosUsuario) // Convertendo os dados para JSON
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Erro ao enviar os dados");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("Dados enviados com sucesso:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Erro:", error);
  //   });
  // };

  return (
    <div className="form-container">
      <h2>Cadastre-se</h2>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nome de usuário*</label>
          <input type="text" {...register("nome")}   
          id="nome"
          />
          {errors.nome && <p>Opss: {errors.nome.message}</p>}
        </div>

        <div>
          <label>E-mail*</label>
          <input type="email"
          id="email"
          {...register("email",
           
             {

               
               pattern: {
                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                 message: "O email é obrigatorio"
               }
             })}
        
          />
          {errors.email && <p>Opss: {errors.email.message}</p>}
        </div>

        <div>
          <label>Cargo*</label>
          <input type="role" {...register("cargo")}
          id="cargo"
          />
          {errors.cargo && <p>Opss: {errors.cargo.message}</p>}
        </div>

        <div>
          <label>CNPJ*</label>
          <input type="text" {...register("cnpj")}
          id="cnpj"
          />
          {errors.cnpj && <p>Opss: {errors.cnpj.message}</p>}
        </div>

        <div>
          <label>Rua*</label>
          <input type="text" {...register("address.street")  }
          id="street"
          />
          {errors.address?.street && 
            <p>Opss: {errors.address.street.message}</p>
          }
        </div>
        <div>
          <label>Cidade*</label>
          <input type="text" {...register("address.city")}
          id="city"
          />
          {errors.address?.city && 
            <p>Opss: {errors.address.city.message}</p>
          }
        </div>

        <div>
          <label>Estado*</label>
          <input type="text" {...register("address.state")} 
          id="estado"
          />
          {errors.address?.state && (
            <p>Opss: {errors.address.state.message}</p>
          )}
        </div>
        <div>
          <label>CEP*</label>
          <input type="numeric" {...register("address.cep")}
          id="cep"
          />
          {errors.address?.cep && <p>Opss: {errors.address.cep.message}</p>}
        </div>
        <div>
          <label>País*</label>
          <input type="text" {...register("address.country")}
          id="pais"
          />
          {errors.address?.country && (
            <p>Opss: {errors.address.country.message}</p>
          )}
        </div>
        <div className="senha">
          <label>Senha*</label>
          <input
            type={showPassword ? "text" : "password"}
            {...register("password")}
            id="senha"  
          />
          <span className="icon-senha" onClick={handleTogglePassword}>
          {showPassword ? 
             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#808080"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#808080"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg> }
          </span>
          {errors.password && <p>Opss: {errors.password.message}</p>}
        </div>
        <div className="senha confirmar">
          <label>Confirmar senha*</label>
          <input
            type={showPassword ? "text" : "password"}
            {...register("confirmPassword")}
            id="confirmar-senha"  
          />
          <span className="icon-senha" onClick={handleTogglePassword}>
            {showPassword ? 
             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#808080"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#808080"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg> }
          </span>
          {errors.confirmPassword && (
            <p>Opss: {errors.confirmPassword.message}</p>
          )}
        </div>
        <div className="btn-submit">
          <button type="submit" className="btn-btn-submit">
            Enviar
          </button>
        </div>
      </form>
      <hr className="show-mobile" />
      <p className="termos">
        <span className="icon-senha">Ao cadastrar-se, você concorda com nossos</span> Termos de
        privacidade
      </p>
    </div>
  );
};

export { FormCadastro };