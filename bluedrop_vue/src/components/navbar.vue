<template>
    <div id="navbar">
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-brand href="#">Bluedrop</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/">Home</b-nav-item>
                    <b-nav-item to="/addplayer">Add Player</b-nav-item> 
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
