import uno from 'unocss/vite'
import { presetUno, defineConfig } from 'unocss'

export default {
  plugins: [
    uno(defineConfig({
      presets: [presetUno()]
    }))
  ]
}
