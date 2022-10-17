import React, {useEffect, useState} from "react";
import { Container,Table } from "react-bootstrap";
import api from "../../services/api";



/*const fun = async ()=> {
    const url = "https://estagio.geopostenergy.com/WorldCup/GetAllTeams" ;
    const response = await fetch(url,
        {
            method: 'get',
            headers: {'git-user': 'joaomgsa'}
        })
        return response.json()
}
    await fun();*/

export default function Sorteio(){
      const[paises, setPaises] = useState([]);

      useEffect(()=> {
         function loadPaises(){
                const resposta = api 
                const respostapaises = resposta.Result;
                setPaises(respostapaises);
        }
        loadPaises();
      },[])



      /* solução antiga de limpar array => const resposta = fun();
      const paises = resposta['Result'];*/
    

    return(
        <div>
            <Container>
                <h2>Paises Classificados</h2>
                <Table>
                   <thead>
                        <th>Pais</th>
                   </thead> 
                   <tbody>
                        {paises.map(pais => (
                            <tr key={pais.Token}>
                                <td>{pais.Name}</td>
                            </tr>
                        ))}
                   </tbody>
                </Table>
                <a className="button" href="\grupos">exibir grupos</a>
            </Container>
        </div>



        /*<main>
            <ul>
                {paises.map(pais =>(
                    <li key={pais.Token}>{pais.Name}</li>
                    ))}
            </ul>
         </main>*/
    );
}


