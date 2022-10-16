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
        async function loadPaises(){
            const url = "https://estagio.geopostenergy.com/WorldCup/GetAllTeams";
            const response = await fetch(url,
                {
                    method: 'get',
                    headers: {'git-user': 'joaomgsa'}
                })
                .then(response=> response.json())
                const resposta = {"Status":200,"Result":[{"Token":"82d9e5fd-edc4-494b-a42b-6f0f8847a77b","Name":"Qatar"},{"Token":"b18e8f55-3477-4d76-bb1a-811132eb25fc","Name":"Equador"}],"Error":false};
                const respostapaises = resposta.Result;
                setPaises(respostapaises);
        }
        loadPaises();
      },[])



      /* solução antiga de limpar array => const resposta = fun();
      const paises = resposta['Result'];*/
    

    return(
        <main>
            <ul>
                {paises.map(pais =>(
                    <li key={pais.Token}>{pais.Name}</li>
                    ))}
            </ul>
         </main>
    );
}


/* <div>
            <Container>
            <h2>Paises classificados</h2>
                <Table>
                    <thead>
                        <th>Pais</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{paises.map((pais)=><tr>{pais.Name}</tr>)}</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>    
        </div> */