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
  Content,
  Card,
  CardItem
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
      <Content padder style={{ alignContent: 'center' }}>
        <Card>
          <CardItem>
            <Body>
              <Text>//Your text here</Text>
              <Text>//Your text here</Text>
              <Text>//Your text here</Text>
              <Text>//Your text here</Text>
              <Text>//Your text here</Text>
              <Button
                onPress={() => {
                  navigation.navigate('Modal');
                }}
                bordered
              >
                <Text>Open Modal</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
