import React from 'react';

import { Container, Retweeted, RocketseatIcon, Body, Avatar, Content, Header, Description, ImageContent, Icons, Status, CommentIcon, RetweetIcon, LikeIcon  } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        voce retweetou
      </Retweeted>
      <Body>
        <Avatar />

        <Content>
            <Header>
              <strong>Vacao</strong>
              <span>@vacao</span>
              <Dot />
              <time>27 de jan</time>
            </Header>
            <Description>Foguete nao tem re</Description>

            <ImageContent />
            
            <Icons>
              <Status>
                <CommentIcon />
                199
              </Status>
              <Status>
                <RetweetIcon />
                199
              </Status>
              <Status>
                <LikeIcon />
                199
              </Status>
            </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;