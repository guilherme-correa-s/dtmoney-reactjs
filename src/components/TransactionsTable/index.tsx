import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionsTable() {
    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento</td>
                        <td className="deposit">12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>Data</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento</td>
                        <td className="withdraw">- 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>Data</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento</td>
                        <td>12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>Data</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento</td>
                        <td>12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>Data</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}