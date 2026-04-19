import Header from './components/Header/Header';
import ResultContainer from './components/ResultContainer/ResultContainer';
import SearchBox from './components/SearchBox/SearchBox';
import React from 'react';
import name from '@rstacruz/startup-name-generator';



class App extends React.Component {
    state = {
        headerText: "Just Name It!!",
        headerExpanded: true,
        suggestedNames: [],
    };
    // Animation
    handleInputChange = (inputText) => {
        this.setState({ headerExpanded: !(inputText.length > 0), 
        suggestedNames: (inputText.length > 0) ? 
                        name(inputText) : [], });
    };

  render() {
    return <h1>App is working</h1>;
}
}

export default App;