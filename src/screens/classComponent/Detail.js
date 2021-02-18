import React, { Component } from 'react';

class Detail extends Component {

    componentWillUnmount() {
        console.log("Bye class detail comp")
    }

    render() {
        return (
            <div>
                Hello from details
            </div>
        )
    }
}

export default Detail;