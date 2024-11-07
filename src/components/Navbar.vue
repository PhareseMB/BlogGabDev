<template>
  <nav class="navbar">
    <!-- Section gauche avec les icônes et les liens -->
    <div class="navbar-left">
      <a href="/" class="nav-item">
        <img src="../assets/home.png" alt="Accueil" />
        <span>Accueil</span>
      </a>
      <a href="/news" class="nav-item">
        <img src="../assets/newspaper.png" alt="News" />
        <span>News</span>
      </a>

      <!-- Menu déroulant Catégorie -->
      <div class="dropdown">
        <a href="/categories" class="nav-item">
          <img src="../assets/categorie.png" alt="Catégorie" />
          <span>Catégorie</span>
        </a>
        <div class="dropdown-content">
          <a href="/economy">Économie</a>
          <a href="/education">Éducation</a>
          <a href="/politics">Politique</a>
          <a href="/agriculture">Infrastructure</a>
          <a href="/sports">Sport</a>
          <a href="/sante">Santé</a>
        </div>
      </div>
    </div>

    <!-- Section droite avec la barre de recherche -->
    <div class="navbar-right">
      <input type="text" placeholder="Recherche..." class="search-input" />
      <button class="search-button">
        <img src="../assets/search.png" alt="Rechercher" />
      </button>
    </div>
  </nav>

  <!-- Section centrale avec les catégories -->
  <div class="category-element">
    <button class="category-button">Économie</button>
    <button class="category-button">Santé</button>
    <button class="category-button">Infrastructure</button>
    <img src="../assets/Logo GABON DÉV 1-01.png" alt="Gabon Développement" class="logo" />
    <button class="category-button">Politique</button>
    <button class="category-button">Éducation</button>
    <button class="category-button">Sport</button>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: white;
  border-bottom: 4px solid #2f4f6f;
}

.navbar-left,
.navbar-center,
.navbar-right {
  display: flex;
  align-items: center;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 50px;
  color: #2f4f6f;
  text-decoration: none;
}

.nav-item img {
  width: 24px;
  height: 24px;
}

.nav-item span {
  font-size: 14px;
  margin-top: 5px;
}

/* Menu déroulant */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #dddad7;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 5px;
}

.dropdown-content a {
  color: rgb(255, 255, 255);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #8e5b03;
}

/* Afficher le menu déroulant au survol */
.dropdown:hover .dropdown-content {
  display: block;
}

.category-element {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 4px solid #2f4f6f;
}

.category-button {
  background-color: #a37f48;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
}

.category-button:hover {
  background-color: #8a6d3c;
}

.logo {
  width: 50px;
  margin: 0 20px;
}

.search-input {
  padding: 10px;
  border: 1px solid #a37f48;
  border-radius: 20px 0 0 20px;
  outline: none;
}

.search-button {
  background-color: #a37f48;
  border: none;
  padding: 8px 10px;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
}

.search-button img {
  width: 18px;
  height: 18px;
}
</style>
