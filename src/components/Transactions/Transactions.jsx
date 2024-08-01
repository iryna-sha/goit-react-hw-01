import s from './Transactions.module.css';
import clsx from "clsx";

export function Transactions({items}) {
  return (
    <div>
      <table className={clsx(s.wrapper)}>
        <thead className={clsx(s.thead)}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr className={clsx(s.tbody, s.tr)} key={item.id}>
                <td className={clsx(s.tbody)}>{item.type}</td>
                <td className={clsx(s.tbody)}>{item.amount}</td>
                <td className={clsx(s.tbody)}>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
