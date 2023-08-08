import { Table, Td, Tr, Th, TransactionTr } from './transaction-history-styles';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </thead>

      <tbody>
        {items.map((item, index) => {
          const { id, type, amount, currency } = item;
          return (
            <TransactionTr key={id}>
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </TransactionTr>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
