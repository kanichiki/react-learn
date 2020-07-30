import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SubComponent } from './sub-component';

class App extends React.Component {
    render(): JSX.Element {
        return (
            <div>
                <h1>Hello React!</h1>
                <SubComponent name="My Counter for TypeScript" count="8" />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));