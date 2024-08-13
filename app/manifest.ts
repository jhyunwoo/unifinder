import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '내 수시카드 6장',
    short_name: '내수6',
    description:
      '2025 대입 수시 카드를 전형별로 검색할 수 있는 수시 전형 비교 서비스',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
