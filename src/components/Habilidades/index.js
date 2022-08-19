function Habilidades(){
   const hab = [
      "HTML",
      "CSS",
      "Lógica de programação",
      "Javascript",
      "Python"
   ]
   return(
      <div>
         <h1>Habilidades</h1>
         <ul>
            {hab.map(habilidade => <li>{habilidade}</li>)}
         </ul>
      </div>
   )
}

export default Habilidades