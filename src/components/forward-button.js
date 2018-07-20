// @flow

import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { ic_forward as icForward } from 'react-icons-kit/md';
import type { Node } from 'react';
import type { I18n } from '../types';
import typeof { setAnimateReverse } from '../actions';

type Props = {
  actions: {
    setAnimateReverse: setAnimateReverse
  },
  children: Node,
  i18n: I18n
}

export default class ForwardButton extends Component<Props> {
  static defaultProps = {
    i18n: {
      forwardButtonCaption: 'FORWARD'
    }
  }

  setAnimateReverse() {
    this.props.actions.setAnimateReverse(false);
  }

  render() {
    const { children, i18n } = this.props;

    return (
      <button onClick={this.setAnimateReverse.bind(this)}>
        {children === undefined ?
          <span><Icon icon={icForward} />&nbsp;{i18n.forwardButtonCaption}</span> :
          <span>{children}</span>
        }
      </button>
    );
  }
}
