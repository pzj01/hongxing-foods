<template>
  <div class="relative min-h-screen overflow-hidden">
    <!-- P5.js 背景动画 -->
    <Background />
    <!-- 主内容 -->
    <div class="relative z-10">
      <TheNav />
      <slot />
      <TheFooter />
    </div>
  </div>
</template>
