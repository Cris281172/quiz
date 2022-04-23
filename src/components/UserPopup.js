import {connect} from 'react-redux';

const UserPopup = ({balance}) => {
    console.log(balance);

    return(
        <div>
            {/*{balance}*/}
        </div>
    )
}

const mapStateToProps = (state) => ({
    balance: state.balance.balance,
})

export default connect(mapStateToProps)(UserPopup);
