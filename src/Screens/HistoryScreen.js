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
          <Title>HistoryScreen</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Right>
      </Header>
      <Content>
        <Card transparent>
          <CardItem>
            <Body>
              <Button
                onPress={() => {
                  navigation.navigate('Details');
                }}
                bordered
              >
                <Text>Go to Details Screen</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
