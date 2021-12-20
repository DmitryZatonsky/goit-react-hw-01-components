import PropTypes from 'prop-types';
import { 
  Table,
  Thead,
  Tbody,
} from './TransactionHistory.styled'

const TransactionHistory = ({ transaction }) => {
  return (
    <Table className="transaction-history">
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>

      <Tbody>
        {transaction.map((item) => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </Tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })  ).isRequired,
}

export default TransactionHistory;
