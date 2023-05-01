import { TransactionList } from "components/transactionListList/transactionList"
import PropTypes from 'prop-types';
import { TableTransac, ThTransac} from "./transactionfile.styled";

export const TransactionHistory = ({items}) =>{
    return (
        <TableTransac>
            <thead>
                <tr>
                    <ThTransac>Type</ThTransac>
                    <ThTransac>Amount</ThTransac>
                    <ThTransac>Currency</ThTransac>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                    <TransactionList item={item} />
                    </tr>
                ))}
            </tbody>
        </TableTransac>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
}