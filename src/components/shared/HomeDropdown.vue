<template>
  <div class="dropdown btn btn-success m-2">
    <a
      class="dropdown-toggle"
      id="menu-drop"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >Change View</a>
    <div class="dropdown-menu" aria-labelledby="menu-drop">
      <a class="dropdown-item" href="#">Item 1</a>
      <a class="dropdown-item" href="#">Item 2</a>
      <a class="dropdown-item" href="#">Item 3</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Other Item</a>
    </div>
  </div>
</template>

<style scoped>
.dropdown:hover > .dropdown-menu {
  display: block;
}
</style>