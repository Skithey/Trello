import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveCard } from '../../actions/CardActions'

class _CardDetials extends Component {
    state = {
        isInput: false,
        card: null,
    }
    async componentDidMount() {
        const card = this.props.card
        this.setState({ card })
    }
    saveCard = async (ev) => {
        ev.preventDefault();
        // const { name, phone, email } = this.state.contact;
        // if (!name || !phone || !email ) return this.setState({ showError: true })
        await this.props.saveCard(this.state.card)
        // this.props.history.goBack();
    }
    changeInput = () => {
        let isInput = !this.state.isInput
        this.setState({ isInput })
        console.log(this.state.isInput);
    }
    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState(({ card }) => ({ card: { ...card, [field]: value } }))
    }
    render() {
        if (!this.state.card) return <p>Loading..</p>
        const { description } = this.state.card
        return (
            <div className="card-details" >
                <h2>{this.props.card.name}</h2>
                {/* <h2>{this.props.board.topics}</h2> */}
                <h2>Description:</h2>
                {!this.state.isInput && <button onClick={this.changeInput} > Edit</button>}
                {this.state.isInput && <input type="text" name="description" value={description} placeholder="Write the description" onChange={this.handleChange} />}
                {this.state.isInput && <button onClick={this.saveCard}>Save</button>}
                {!this.state.isInput && <p>{this.props.card.description}</p>}
            </div>
        );
    }
}
function mapStateProps(state) {
    return {
        boards: state.boardReducer.boards,
        board: state.boardReducer.board,
    }
}

const mapDispatchToProps = {
    saveCard,
}

export const CardDetials = connect(mapStateProps, mapDispatchToProps)(_CardDetials)
//  export default withRouter(BoardTopic);
// export default CardDetials;