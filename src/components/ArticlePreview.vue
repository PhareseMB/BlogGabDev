import

<template>
  <section class="brand-news">
    <!-- Section gauche : Articles en aperçu -->
    <div class="news-preview">
      <div class="news-item">
        <img src="../assets/JO.png" alt="Article 1" class="news-image" />
        <div class="news-category">Energie</div>
        <h3 class="news-title">JO de Paris soutiens des athlètes gabonais</h3>
      </div>

      <div class="news-item">
        <img src="../assets/JO.png" alt="Article 2" class="news-image" />
        <div class="news-category">Energie</div>
        <h3 class="news-title">Délestage abusif dans le grand Libreville</h3>
        <div class="play-icon"></div>
      </div>
    </div>

    <!-- Section droite : Liste des articles récents -->
    <div class="recent-articles">
      <div class="recent-title">Article récent</div>
      <ul class="recent-list">
        <li class="recent-item" v-for="n in 6" :key="n">
          <span class="article-tag">TECH</span>
          <span class="article-description">Lorem ipsum lorem ipsum lorem ipsum</span>
        </li>
      </ul>
    </div>
  </section>
  <section>
    <div class="grid-cols-1 sm:grid md:grid-cols-3 ">
  <div
    class="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <img
        class="rounded-t-lg"
        src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
        alt="Hollywood Sign on The Hill" />
    </a>
    <div class="p-6">
      <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
      <p class="mb-4 text-base">
        This is a longer card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
    </div>
  </div>

  <div
    class="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <img
        class="rounded-t-lg"
        src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
        alt="Palm Springs Road" />
    </a>
    <div class="p-6">
      <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
      <p class="mb-4 text-base">
        This is a longer card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
    </div>
  </div>

  <div
    class="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <img
        class="rounded-t-lg"
        src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
        alt="Skyscrapers" />
    </a>
    <div class="p-6">
      <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
      <p class="mb-4 text-base">
        This is a longer card with supporting text below as a natural
        lead-in to additional content.
      </p>
    </div>
  </div>

  <div
    class="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
    <a href="#!">
      <img
        class="rounded-t-lg"
        src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
        alt="Los Angeles Skyscrapers" />
    </a>
    <div class="p-6">
      <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
      <p class="mb-4 text-base">
        This is a longer card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
    </div>
  </div>
</div>
  </section>
</template>

<script>
export default {
  name: "BrandNews",

  name: "CardNew",
    data() {
      return {
        cards: [
          {
            id: 1,
            title: "Infrastructures",
            image: "src/assets/infrastructure.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date: "24 Oct, 2024",
            comments: 136,
          },
          {
            id: 2,
            title: "Santé",
            image: "src/assets/Covid-19-1.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date: "24 Oct, 2024",
            comments: 136,
          },
          {
            id: 3,
            title: "Education",
            image: "src/assets/centre scolaire.jpeg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date: "24 Oct, 2024",
            comments: 136,
          },
        ],
      };
    },
};



</script>


<style scoped>
.brand-news {
  padding: 30px;
  margin:100px;
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
}

.news-preview {

  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.news-item {
  position: relative;
}

.news-image {
  width: 50%;
  height: 50%;
  border-radius: 10px;
  /* object-fit: cover; */
}

.news-category {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #244E9B;
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 3px;
}

.news-title {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}

.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  background: url('../assets/play-icon.png') center center no-repeat;
  background-size: cover;
}

.recent-articles {
  width: 30%;
  background-color: #f8f8f8;
  padding: 15px;
  border-radius: 10px;
}

.recent-title {
  background-color: #244E9B;
  color: white;
  text-align: center;
  font-weight: bold;
  padding: 8px;
  border-radius: 5px;
}

.recent-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.recent-item {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.article-tag {
  background-color: #244E9B;
  color: white;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 12px;
  margin-right: 10px;
  font-weight: bold;
}

.article-description {
  font-size: 14px;
}

.card-container {
    display:flex;
    gap: 2px;
    justify-content: space-evenly;
  }
  
  .card {
    width: 300px;
    /* border: 1px solid #ddd;
    border-radius: 8px; */
    overflow: hidden;
    /* box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); */
    background-color: #fff;
  }
  
  .card-image {
    width: 100%;
    height: 200px;
    border: 1px solid #ddd;
    border-radius: 8px; 
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }
  
  .card-content {
    padding: 16px;
  }
  
  .card-title {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    color: #1a1a1a;
    font-weight: bold;
  }
  
  .card-title-text {
    margin-right: 8px;
  }
  
  .card-title-icon {
    color: #007bff;
  }
  
  .card-description {
    font-size: 14px;
    color: #666;
    margin-bottom: 16px;
  }
  
  .card-footer {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #999;
  }
  
  .icon-calendar,
  .icon-comments {
    margin-right: 4px;
  }
</style>

  