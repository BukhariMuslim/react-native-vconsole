import { Component } from 'react';
interface Props {
    info: {} | string;
}
interface State {
    info: string;
}
export default class Info extends Component<Props, State> {
    constructor(props: any);
    static getDerivedStateFromProps(nextProps: Readonly<Props>): {
        info: string | {};
    };
    render(): JSX.Element;
}
export {};
