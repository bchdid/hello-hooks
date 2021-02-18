import React, { Component } from 'react';
import Detail from "./Detail";
import axios from "axios";

class FirstClassComponent extends Component {

    state = {
        count: 0,
        randomNumber: 0,
        showComponentDetail: false,
    }

    componentDidMount() {
        this.setState({ count: 10 });

        this.fetchArticles()
            .then(({ result, error }) => {
                console.log("result", result);
            })
            .catch(error => {
                console.log("error", error);
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.count !== this.state.count) {
            this.setState({ randomNumber: Math.random * 10 });
        }
    }

    componentWillUnmount() {
        console.log("By from first class comp");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // return true --> component will always render
        return true;
    }

    handleButton = () => {
        this.setState({ count: ++this.state.count });
    }

    toggleDetail = () => {
        this.setState({ showComponentDetail: !this.state.showComponentDetail });
    }

    fetchArticles = async () => {

        let result;
        let error;

        try {
            const API_KEY = 'CDSNAiFyxiaylxDzfjLVc3VCkoAjJPLA';

            result = (await axios(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`)).data;
            error = null;
        } catch (e) {
            result = [];
            error = 'Error occurred';
        }

        return { result, error };
    }

    render() {
        return (
            <>
                <div>
                    hello from class component
                </div>
                <button onClick={this.handleButton}>
                    CLick me
                </button>
                <div>
                    Count: {this.state.count}
                </div>
                <div>
                    RandomNumber : {this.state.randomNumber}
                </div>
                <div>
                    <button onClick={this.toggleDetail}>
                        Show details
                    </button>
                </div>
                {
                    this.state.showComponentDetail &&
                    <Detail />
                }
            </>
        )
    }
}

export default FirstClassComponent;