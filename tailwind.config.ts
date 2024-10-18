import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // keyframes 정의
      keyframes: {
        slideUp: {
          // keyframe의 시작: 요소가 아래에서 위로 올라옴
          '0%': {
            transform: 'translateY(100%)', // Y축으로 100% 아래에서 시작
            opacity: '0', // 처음에는 투명하게
          },
          // keyframe의 끝: 요소가 제자리에 오고 완전히 보임
          '100%': {
            transform: 'translateY(0)',
            // Y축 이동을 0으로 설정 (원래 위치로 돌아옴)
            opacity: '1', // 완전히 보이게 됨
          },
        },
      },

      // animation 정의
      animation: {
        // slideUp이라는 이름의 애니메이션 설정
        slideUp: 'slideUp 1s ease-out',
        //slideUp keyframe을 1초 동안 ease-out 속도로 애니메이션 적용
      },
    },
  },
  plugins: [],
}

export default config
