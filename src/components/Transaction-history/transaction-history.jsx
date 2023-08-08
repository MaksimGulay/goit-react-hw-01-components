import { Table, Td, Tr, Th, TransactionTr } from './transaction-history-styles';

export const TransactionHistory = ({ items }) => {
  return (
    <Table class="transaction-history">
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
