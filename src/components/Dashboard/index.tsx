import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./style";

export function Deshboard() {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    )
}