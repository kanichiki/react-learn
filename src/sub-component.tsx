import * as React from 'react';
import Button from '@material-ui/core/Button';

// Propsの型定義
interface IProps {
    name: string;
    count: string;
}

interface IState {
    count: number;
}

export class SubComponent extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            count: Number(this.props.count),
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(): void {
        console.log('クリックされました');

        this.setState({
            count: this.state.count + 2,
        });
    }

    render(): JSX.Element {

        return (
            <div>
                <h2>{this.props.name}</h2>
                <div>{this.state.count}</div>
                <Button variant="contained" color="primary" onClick={this.handleClick}>
                    Add +1
                </Button>
            </div>
        );
    }
}