import React, { Component } from 'react';
import { BoardService } from '../../services/board.service.js'
import BoardList from '../../cmps/BoardList/BoardList'

class HomePage extends Component {
    state = {
        boards: null
    }

    async componentDidMount() {
        const boards = await BoardService.query()
        this.setState({ boards })
    }

    render() {
        if (!this.state.boards || !this.state.boards.length) return <p>Loading..</p>
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
                        <BoardList boards={this.state.boards}/>
                    </section>
                </main>
            </div>
        );
    }
}
export default HomePage
// export const HomePage= connect(mapStateProps,mapDispatchToProps)(_HomePage);