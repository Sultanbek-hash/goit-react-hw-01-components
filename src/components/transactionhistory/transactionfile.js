import PropTypes from 'prop-types';
import { TableTransac, ThTransac, Tdtype} from "./transactionfile.styled";

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
                    <TransactionTd item={item} />
                    </tr>
                ))}
            </tbody>
        </TableTransac>
    )
}

const TransactionTd = ({item : {type, amount, currency}}) =>{
    return (
    <> 
    <Tdtype>{type}</Tdtype>
    <Tdtype>{amount}</Tdtype>
    <Tdtype>{currency}</Tdtype>
    </>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
}

TransactionTd.propTypes = {
    item: PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
};