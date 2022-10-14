import React from "react";
import { Container, Table } from "react-bootstrap";
import Jogos from "../Jogos";

export default function Grupos(){

    const indices = ["#", "País", "Pontos", "Jogos", "Gols Pro", "Gols Contra"];

    return(
        <div>
            <Container>
                <Table size="sm">
                    <thead>
                        <tr>{indices.map( (indice) => <th> {indice}</th>) }</tr>
                    </thead>
                </Table>
            </Container>
        </div>
    );
}