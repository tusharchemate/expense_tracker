const ExpenseItem = (props) => {
  const { title, amount, date } = props;

  const styles = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
  };
  return (
    <>
      <div style={styles}>
        <div>{title}</div>
        <div>{amount}</div>
        <div>{date}</div>
      </div>
    </>
  );
};

export default ExpenseItem;
