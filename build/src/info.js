import React, { Component } from 'react';
import { View, Text } from 'react-native';
export default class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: '',
        };
    }
    static getDerivedStateFromProps(nextProps) {
        let { info } = nextProps;
        if (info) {
            if (typeof info === 'object') {
                try {
                    info = JSON.stringify(info, null, 2);
                }
                catch (err) {
                    console.log(err);
                }
            }
            return { info };
        }
        return null;
    }
    render() {
        return (<View style={{ padding: 5 }}>
        <Text style={{ color: 'black' }}>{this.state.info}</Text>
      </View>);
    }
}
