import { writeFileSync } from 'node:fs'

export default function writeFile(data: string, fileName: string): void {
  writeFileSync(fileName, data, { flag: 'w' })
}
