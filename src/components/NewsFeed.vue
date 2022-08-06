<template>
  <main>
    <Component 
      v-for="content in apiResponse"
      :key="content.id"
      :is="content.type"
      :article-title="content.title"
      :article-content="content.body"
      :ad-image="content.image"
      :ad-heading="content.heading"
      @click="content.type === 'NewsArticle' ? openArticle : openAd"
      @mouseover="content.type === 'NewsArticle' ? showPreview : trackAdEvent"
    />
  </main>
</template>