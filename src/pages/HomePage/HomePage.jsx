import React, { Component } from 'react';
import { BoardService } from '../../services/board.service.js'
import BoardList from '../../cmps/BoardList/BoardList'
import { storageService } from '../../services/storage.service'
import { connect } from 'react-redux';
import { loadBoards } from '../../actions/BoardActions';

class _HomePage extends Component {
    async componentDidMount() {
        await this.props.loadBoards()
        const boards = await BoardService.query()
        storageService.store('boards', boards)
        this.setState({ boards })
    }

    render() {
        if (!this.props.boards) return <p>Loading..</p>
        return (
            <div className="home-page">
                <main className="main-container container home-page column-layout">
                    <section className="templates">
                        <h2>Templates</h2>
                        <ul className="flex wrap clean-list">
                            <li className="template flex-center">Template 1</li>
                            <li className="template flex-center">Template 2</li>
                            <li className="template flex-center">Template 3</li>
                            <li className="template flex-center">Template 4</li>
                        </ul>
                    </section>
                    <section className="boards">
                        <h2>Boards</h2>
                        <BoardList boards={this.props.boards} />
                    </section>
                </main>
            </div>
        );
    }
}
function mapStateProps(state) {
    return {
        boards: state.boardReducer.boards
    }
}

const mapDispatchToProps = {
    loadBoards
}

export const HomePage = connect(mapStateProps, mapDispatchToProps)(_HomePage)
// export default HomePage
// export const HomePage= connect(mapStateProps,mapDispatchToProps)(_HomePage);