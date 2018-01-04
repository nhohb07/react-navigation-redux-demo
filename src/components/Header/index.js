import React, { Component } from 'react';
import {
  Header as NBHeader,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon
} from 'native-base';

export class Header extends Component {
  render() {
    return (
      <NBHeader>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right />
      </NBHeader>
    );
  }
}