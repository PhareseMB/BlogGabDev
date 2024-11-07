<template>
  <header class="header">
    <!-- Section gauche avec le logo et les icônes de réseaux sociaux -->
    <div class="header-left">
      <img src="../assets/Logo GABON_DEV_Circle.png" alt="Logo Gabon Développement" class="logo" />
      <div class="social-media">
        <img src="../assets/facebook.png" alt="Facebook" class="social-icon" />
        <img src="../assets/whatsapp.png" alt="WhatsApp" class="social-icon" />
        <img src="../assets/instagram.png" alt="Instagram" class="social-icon" />
        <img src="../assets/twitter.png" alt="Twitter" class="social-icon" />
        <img src="../assets/linkedin.png" alt="LinkedIn" class="social-icon" />
        <img src="../assets/youtube.png" alt="YouTube" class="social-icon" />
      </div>
      <p class="header-text">@Gabon développement</p>
    </div>

    <!-- Section droite avec les images -->
    <div class="header-right">
      <img src="../assets/header1.png" alt="Image 1" class="header-image" />
      <img src="../assets/header2.png" alt="Image 2" class="header-image" />
      <img src="../assets/header3.png" alt="Image 3" class="header-image" />
      <img src="../assets/header4.png" alt="Image 4" class="header-image" />
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  background-color: #244E9B; /* Couleur bleue de fond */
  padding: 20px;
  margin-top: 20px;
}

.header-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding-right: 20px;
}

.logo {
  width: 100px; /* Taille du logo */
  margin-bottom: 10px;
}

.social-media {
  display: flex;
  gap: 10px;
  margin: 10px 0;
}

.social-icon {
  width: 20px; /* Taille des icônes des réseaux sociaux */
  height: 20px;
}

.header-text {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}

.header-right {
  display:inline-flex;
  gap: 1px;
  flex-grow: 1;
}

.header-image {
  width: calc(10% - 20px); /* Diviser l'espace en 4 images avec des marges */
  height: 250px;
  border-radius: 5px;
  object-fit:cover;
}
</style>

  