<template>
  <div class="navbar">
    <b-navbar  toggleable="lg">
    <b-navbar-toggle id="navbar" target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{name: 'Home'}">Home <b-icon icon="house-fill"/></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item :to="{name:'Clientes'}">Clintes <b-icon icon="people-fill"/></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item :to="{name: 'Ordenes'}">Ordenes <b-icon icon="tag-fill"/></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
.navbar {
  display:flex;
  justify-items: center;
  background-image:linear-gradient(to right,#de7d2eee, #da5d2bec)
}
.navbar-light .navbar-nav .nav-link {
    color:rgb(255, 255, 255);
    font-weight: 600;
}
.navbar-light .navbar-nav{
  width: 120px;

  margin-left: 15px;
  margin-top: 10px;

  border-width: thin;  
  border-radius: 25px;
  border-style: solid;
  border-color: rgb(255, 255, 255);
}
.navbar.navbar-light.navbar-expand-lg{
  background: transparent;
}
</style>
