<template>
    <div class="article">
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Article",
    props: {
      title: String,
      content: String,
    },
  };
  </script>
  