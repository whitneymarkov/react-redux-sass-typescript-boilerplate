import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../assets/svg/logo.svg';
import { Logger } from '../utils/logger/Logger';
import { IRootState } from '../state/RootStore';

import './app.scss';
import { IRouterProps } from './IRouter';

interface IProps extends IStateProps, IDispatchProps {
    
}

interface IState {

}

interface IStateProps {
    showFilters: boolean;
}

interface IDispatchProps {

}

type Props = IProps & IStateProps & IDispatchProps;

class AppBase extends React.Component<Props, IState> {

    constructor(props: Props) {
        super(props);
        this.state = {
            ...props
        };
    }

    public componentWillMount() {
        Logger.info('APP MOUNTING --------------------');
    }

    public componentWillReceiveProps(props: IProps) {
    }

    public render() {
        console.log(this.state);
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Compiled.
                    </p>
                </header>
            </div>
        );
    }
}

const mapStateToProps = (state: IRootState): IStateProps => {
    return {
        showFilters: state.ui.showFilters,
    };
};

const App = connect(mapStateToProps)(AppBase);

export { App, AppBase };
