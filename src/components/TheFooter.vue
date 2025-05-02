<template>
  <!-- 页脚 -->
  <footer class="bg-gray-900 px-4 py-12 text-white">
    <div class="mx-auto max-w-7xl">
      <div class="grid grid-cols-1 mb-8 gap-8 md:grid-cols-4">
        <div class="col-span-1 md:col-span-2">
          <div class="mb-4 flex items-center">
            <div class="mr-3 h-10 w-10 flex items-center justify-center rounded-lg bg-sky-500 text-xl text-white font-bold">
              宏
            </div>
            <span class="text-xl text-white font-bold">江西宏润配送有限公司</span>
          </div>
          <p class="mb-4 max-w-md text-gray-400">
            专业的食品供应链和配送服务提供商，致力于为学校食堂等机构客户提供高品质的食品，确保每一份食材的新鲜与安全。
          </p>
          <div class="flex space-x-4">
            <a href="#" class="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-sky-500">
              <i class="pi pi-phone" />
            </a>
            <a href="#" class="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-sky-500">
              <i class="pi pi-envelope" />
            </a>
            <a href="#" class="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-sky-500">
              <i class="pi pi-map-marker" />
            </a>
          </div>
        </div>

        <div>
          <h3 class="mb-4 text-lg font-bold">
            快速链接
          </h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 transition-colors hover:text-sky-400">首页</a></li>
            <li><a href="#" class="text-gray-400 transition-colors hover:text-sky-400">产品中心</a></li>
            <li><a href="#" class="text-gray-400 transition-colors hover:text-sky-400">关于我们</a></li>
            <li><a href="#" class="text-gray-400 transition-colors hover:text-sky-400">联系我们</a></li>
            <li><a href="#" class="text-gray-400 transition-colors hover:text-sky-400">登录</a></li>
          </ul>
        </div>

        <div>
          <h3 class="mb-4 text-lg font-bold">
            联系方式
          </h3>
          <ul class="space-y-4">
            <li class="flex">
              <i class="pi pi-map-marker mr-3 mt-1 text-sky-500" />
              <span class="text-gray-400">江西省萍乡市安源区八一街汪公潭居委会公潭路</span>
            </li>
            <li class="flex">
              <i class="pi pi-phone mr-3 mt-1 text-sky-500" />
              <span class="text-gray-400">0791-xxxxxxx</span>
            </li>
            <li class="flex">
              <i class="pi pi-envelope mr-3 mt-1 text-sky-500" />
              <span class="text-gray-400">contact@jxhongrun.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-6 text-center">
        <p class="text-gray-500">
          © {{ new Date().getFullYear() }} 江西宏润配送有限公司 版权所有
        </p>
      </div>
    </div>
  </footer>
</template>
