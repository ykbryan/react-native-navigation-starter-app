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
          <Title>HistoryScreen</Title>
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
            navigation.navigate('Details');
          }}
        >
          <Text>Go to Details Screen</Text>
        </Button>
      </Content>
    </Container>
  );
}
