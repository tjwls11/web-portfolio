/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com', // 원격 이미지 도메인
        pathname: '/**', // 모든 경로 허용
      },
    ],
  },
}

export default nextConfig
