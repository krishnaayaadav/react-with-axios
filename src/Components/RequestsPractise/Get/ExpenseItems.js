
export default function ExpenseItem(props){
    const expense  = props.expense;
    const field_name = props.field_name;

    return(
        <>
          <div className="jumbo mt-5 my-5 text-center">

                <h6>Title: {expense.exp_title}  </h6>
          </div>
        </>
    )
}