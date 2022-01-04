import React, { PureComponent } from 'react';
import { Animated } from 'react-native';
declare type ValueXY = Animated.ValueXY;
declare type Value = Animated.Value;
interface PropsType {
    appInfo?: {};
    console?: boolean;
    panels?: {
        title: string;
        component: React.ReactNode;
    };
}
interface StateType {
    panels: {
        title: string;
        component: React.ReactNode;
    }[];
    showPanel: boolean;
    currentPanelTab: number;
    pan: ValueXY;
    scale: Value;
}
declare class RNVConsole extends PureComponent<PropsType, StateType> {
    static defaultProps: {
        appInfo: {};
        console: boolean;
    };
    private panResponder;
    constructor(props: any);
    togglePanel: () => void;
    clearLogs: () => void;
    showDevPanel: () => void;
    renderPanelHeader(): JSX.Element;
    renderPanelFooter(): JSX.Element;
    renderPanel(): JSX.Element;
    renderHomeBtn(): JSX.Element;
    render(): JSX.Element;
}
export default RNVConsole;
