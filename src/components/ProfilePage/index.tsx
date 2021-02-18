import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
    return (
      <Container>
            <Banner>
                <Avatar />
            </Banner>
            <ProfileData>
                <EditButton outlined> Editar perfil</EditButton>
                <h1>Marlon Mascarenhas</h1>
                <h2>@MarlonMascarenhas</h2>
                
                <p>
                    Developer <a href="https://www.linkedin.com/in/marlonmascarenhas/"> Linkedin </a> 
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        Minas Gerais 
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 25 de marco de 1998 
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>719</strong>
                    </span>
                    <span>
                        <strong>999 </strong> seguidores
                    </span>

                </Followage>
            </ProfileData>

        </Container>
    );
}

export default ProfilePage;