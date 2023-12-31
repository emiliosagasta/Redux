import {deposit, withdraw} from '../store/amount/action';
import { connect } from 'react-redux';
import { selectCurrentAmount } from '../store/amount/reducer';

const mapStatetoProps = (state) => {
    return {
        amount: selectCurrentAmount(state)
};
};

const Counter = ({amount, deposit, withdraw}) => {
  return (
    <div>
        <h1> {amount} </h1>
        <button onClick={()=> deposit()}>Deposit $10</button>
        <button onClick={()=> withdraw()}>withdraw $10</button>
    </div>
  );
};

export default connect(mapStatetoProps, {deposit, withdraw} )(Counter);