<script setup lang="ts">
import P5 from 'p5'

const props = defineProps({
  theme: {
    type: String,
    default: 'food',
  },
})

const canvasContainer = ref<HTMLElement | null>(null)
let p5Instance: any = null

onMounted(() => {
  if (canvasContainer.value) {
    p5Instance = new P5(sketch, canvasContainer.value)
  }
})

onUnmounted(() => {
  if (p5Instance) {
    p5Instance.remove()
  }
})

watch(() => props.theme, (newTheme) => {
  if (p5Instance) {
    p5Instance.updateTheme(newTheme)
  }
})

function sketch(p: any) {
  const particles: any[] = []
  const foodIcons: any[] = []

  // 食品图标的简化路径数据
  const iconPaths = {
    apple: [
      [0, -30],
      [10, -25],
      [15, -10],
      [15, 0],
      [10, 15],
      [0, 20],
      [-10, 15],
      [-15, 0],
      [-15, -10],
      [-10, -25],
      [0, -30],
    ],
    fish: [
      [30, 0],
      [20, 10],
      [0, 15],
      [-20, 10],
      [-30, 0],
      [-20, -10],
      [0, -15],
      [20, -10],
      [30, 0],
    ],
    bread: [
      [-20, -10],
      [0, -15],
      [20, -10],
      [25, 0],
      [20, 10],
      [0, 15],
      [-20, 10],
      [-25, 0],
      [-20, -10],
    ],
    carrot: [
      [0, -25],
      [5, -20],
      [8, -10],
      [8, 0],
      [5, 10],
      [0, 15],
      [-5, 10],
      [-8, 0],
      [-8, -10],
      [-5, -20],
      [0, -25],
    ],
    milk: [
      [-10, -20],
      [10, -20],
      [10, 20],
      [-10, 20],
      [-10, -20],
    ],
  }

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.noStroke()

    // 创建食品图标
    for (let i = 0; i < 15; i++) {
      const iconType: keyof typeof iconPaths = p.random(Object.keys(iconPaths))
      const icon = {
        path: iconPaths[iconType],
        x: p.random(p.width),
        y: p.random(p.height),
        size: p.random(0.5, 1.5),
        rotation: p.random(p.TWO_PI),
        rotationSpeed: p.random(-0.01, 0.01),
        vx: p.random(-0.3, 0.3),
        vy: p.random(-0.3, 0.3),
        color: p.color(
          p.random(200, 255),
          p.random(150, 200),
          p.random(50, 100),
          p.random(30, 70),
        ),
      }
      foodIcons.push(icon)
    }

    // 创建背景粒子
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: p.random(p.width),
        y: p.random(p.height),
        size: p.random(2, 8),
        vx: p.random(-1, 1),
        vy: p.random(-1, 1),
        color: p.color(
          p.random(200, 255),
          p.random(150, 200),
          p.random(50, 100),
          p.random(50, 150),
        ),
      })
    }
  }

  p.draw = () => {
    p.clear()

    // 绘制流动的背景
    drawFlowField()

    // 更新和绘制粒子
    for (let i = 0; i < particles.length; i++) {
      updateParticle(particles[i])
      drawParticle(particles[i])
    }

    // 更新和绘制食品图标
    for (let i = 0; i < foodIcons.length; i++) {
      updateFoodIcon(foodIcons[i])
      drawFoodIcon(foodIcons[i])
    }
  }

  function drawFlowField() {
    const time = p.frameCount * 0.01
    p.noFill()

    for (let y = 0; y < p.height; y += 30) {
      p.beginShape()
      p.stroke(255, 200, 100, 10)
      p.strokeWeight(3)

      for (let x = 0; x < p.width; x += 10) {
        const angle = p.noise(x * 0.001, y * 0.001, time) * p.TWO_PI * 2
        const py = y + p.sin(angle) * 15
        p.vertex(x, py)
      }

      p.endShape()
    }
  }

  function updateParticle(particle: any) {
    // 添加一些噪声运动
    const noiseX = p.noise(particle.x * 0.01, particle.y * 0.01, p.frameCount * 0.01) * 2 - 1
    const noiseY = p.noise(particle.x * 0.01, particle.y * 0.01, p.frameCount * 0.01 + 100) * 2 - 1

    particle.x += particle.vx + noiseX * 0.5
    particle.y += particle.vy + noiseY * 0.5

    // 边界检查
    if (particle.x < 0)
      particle.x = p.width
    if (particle.x > p.width)
      particle.x = 0
    if (particle.y < 0)
      particle.y = p.height
    if (particle.y > p.height)
      particle.y = 0
  }

  function drawParticle(particle: any) {
    p.noStroke()
    p.fill(particle.color)
    p.circle(particle.x, particle.y, particle.size)
  }

  function updateFoodIcon(icon: any) {
    icon.x += icon.vx
    icon.y += icon.vy
    icon.rotation += icon.rotationSpeed

    // 边界检查
    if (icon.x < -50)
      icon.x = p.width + 50
    if (icon.x > p.width + 50)
      icon.x = -50
    if (icon.y < -50)
      icon.y = p.height + 50
    if (icon.y > p.height + 50)
      icon.y = -50
  }

  function drawFoodIcon(icon: any) {
    p.push()
    p.translate(icon.x, icon.y)
    p.rotate(icon.rotation)
    p.scale(icon.size)

    p.noStroke()
    p.fill(icon.color)

    p.beginShape()
    for (let i = 0; i < icon.path.length; i++) {
      p.vertex(icon.path[i][0], icon.path[i][1])
    }
    p.endShape(p.CLOSE)

    p.pop()
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }

  // 添加鼠标交互
  p.mouseMoved = () => {
    for (let i = 0; i < foodIcons.length; i++) {
      const icon = foodIcons[i]
      const d = p.dist(p.mouseX, p.mouseY, icon.x, icon.y)
      if (d < 100) {
        const angle = p.atan2(icon.y - p.mouseY, icon.x - p.mouseX)
        icon.vx += p.cos(angle) * 0.2
        icon.vy += p.sin(angle) * 0.2

        // 限制最大速度
        const speed = p.sqrt(icon.vx * icon.vx + icon.vy * icon.vy)
        if (speed > 3) {
          icon.vx = (icon.vx / speed) * 3
          icon.vy = (icon.vy / speed) * 3
        }
      }
    }
  }
}
</script>

<template>
  <div ref="canvasContainer" class="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-70" />
</template>
