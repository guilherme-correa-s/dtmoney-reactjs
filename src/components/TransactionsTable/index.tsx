import { Container } from "./style";

export function TransactionsTable() {
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