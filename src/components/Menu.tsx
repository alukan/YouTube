import React from 'react';
import { MenuContainer, MenuButton } from '../styles/MenuStyles';

const LeftSlideMenu: React.FC = () => {
    return (
        <MenuContainer>
            <MenuButton>Menu Item 1</MenuButton>
            <MenuButton>Menu Item 2</MenuButton>
            <MenuButton>Menu Item 3</MenuButton>
        </MenuContainer>
    );
};

export default LeftSlideMenu;