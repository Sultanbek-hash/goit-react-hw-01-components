import PropTypes from 'prop-types';
import { Tdtype } from './transactionList.styled';

export const TransactionList = ({item : {type, amount, currency}}) =>{
    return (
    <> 
    <Tdtype>{type}</Tdtype>
    <Tdtype>{amount}</Tdtype>
    <Tdtype>{currency}</Tdtype>
    </>
    )
};

TransactionList.propTypes = {
    item: PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
};