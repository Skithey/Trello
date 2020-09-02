import React, { Component } from 'react';

class HomePage extends Component {
    render() {
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
                        <ul className="flex wrap clean-list">
                            <li className="template flex-center">Board 1</li>
                            <li className="template flex-center">Board 2</li>
                            <li className="template flex-center">Board 3</li>
                            <li className="template flex-center">Board 4</li>
                        </ul>
                    </section>
                </main>
            </div>
        );
    }
}
export default HomePage
// export const HomePage= connect(mapStateProps,mapDispatchToProps)(_HomePage);