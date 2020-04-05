import React from 'react'

import {
    BurgerButton,
    BurgerButtonLine
} from './DrawerToggleButtonStyle'

const DrawerToggleButton = ({onClick}) => (
    <BurgerButton onClick={onClick}>
        <BurgerButtonLine />
        <BurgerButtonLine />
        <BurgerButtonLine />
    </BurgerButton>
)

export default DrawerToggleButton