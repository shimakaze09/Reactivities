import { Button, Container, Menu } from "semantic-ui-react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src='/assets/logo.png' alt='logo' style={{ marginRight: 10 }} />
                    Reactivities
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name='Activities' />
                <Menu.Item>
                    <Button as={NavLink} to='/createActivities' positive content='Create Activity' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}