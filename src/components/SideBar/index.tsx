import React from 'react';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body} from './styles';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';

const SideBar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder = 'Buscar no Twitter' />
                <SearchIcon />
            </SearchWrapper>
            <Body>
                <List
                    title="Talvez voce curta"
                    elements={[
                        <FollowSuggestion 
                            name="teste"
                            nickname="@testetestado"
                        />,
                        <FollowSuggestion 
                            name="teste"
                            nickname="@testetestado"
                        />,
                        <FollowSuggestion 
                            name="teste"
                            nickname="@testetestado"
                        />
                    ]}
                />
                <List
                    title="Talvez voce curta"
                    elements={[
                        <h1>Test</h1>,
                        <h1>Test</h1>,
                        <h1>Test</h1>
                    ]}
                />
            </Body>
        </Container>
    );
}

export default SideBar;