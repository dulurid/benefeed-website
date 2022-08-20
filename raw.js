import fs from 'fs'

export default function raw() {
  return {
    enforce: 'post',
    name: 'raw',
    resolveId(id) {
      if (id.endsWith('?raw'))
        return id
    },
    load(id) {
      if (id.endsWith('?raw')) {
        const fpath = id.replace('?raw', '')
        const raw = fs.readFileSync(fpath, 'utf-8')
        return `export default ${JSON.stringify(raw)};`
      }
    },
  }
}
