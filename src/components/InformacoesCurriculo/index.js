function InformacoesCurriculo({nascimento, estadoCivil,nacionalidade,endereco,cep,telefone,email,github,likedin}){
   return(
      <div>
         <p>Data de nascimento: {nascimento}</p> 
         <p>Estado Civil: {estadoCivil}</p>
         <p>Nacionalidade: {nacionalidade}</p>
         <p>Telefone: {telefone}</p>
         <p>E-Mail: {email}</p>
         <p>Github: {github}</p>
         <p>Likedin: {likedin}</p>
      </div>
   )
}

export default InformacoesCurriculo