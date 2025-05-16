import { defineConfig } from '@pzj01/picpress'

export default defineConfig({
  entry: 'public',
  sharpCompressOptions: {
    quality: 50,
    trellisQuantisation: true,
    overshootDeringing: true,
    mozjpeg: true,
  },
  minFileSize: 1000,
  overwrite: true,
  recursive: true,
})
