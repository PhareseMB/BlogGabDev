<template>
    <div class="card-container">
      <div class="card" v-for="card in cards" :key="card.id">
        <img :src="card.image" alt="Image de {{ card.title }}" class="card-image" />
        <div class="card-content">
          <h3 class="card-title">
            <span class="card-title-text">{{ card.title }}</span>
            <span class="card-title-icon">➡️</span>
          </h3>
          <p class="card-description">{{ card.description }}</p>
          <div class="card-footer">
            <span class="card-date">
              <i class="icon-calendar">📅</i> {{ card.date }}
            </span>
            <span class="card-comments">
              <i class="icon-comments">💬</i> {{ card.comments }} COMMENTAIRES
            </span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CardNew",
    data() {
      return {
        cards: [
          {
            id: 1,
            title: "Infrastructures",
            image: "/path/to/infrastructure-image.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date: "24 Oct, 2024",
            comments: 136,
          },
          {
            id: 2,
            title: "Santé",
            image: "/path/to/health-image.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date: "24 Oct, 2024",
            comments: 136,
          },
          {
            id: 3,
            title: "Education",
            image: "/path/to/education-image.jpg",
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
  .card-container {
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }
  
  .card {
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  
  .card-image {
    width: 100%;
    height: 200px;
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
  
 