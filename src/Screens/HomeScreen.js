import React from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
  Content
} from 'native-base';

export default function({ navigation }) {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>Home Header</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Right>
      </Header>
      <Content>
        <Button
          onPress={() => {
            navigation.replace('Home');
          }}
        >
          <Text>Save</Text>
        </Button>
        <Button
          onPress={() => {
            navigation.navigate('Modal');
          }}
        >
          <Text>Open Modal</Text>
        </Button>
      </Content>
    </Container>
  );
}
