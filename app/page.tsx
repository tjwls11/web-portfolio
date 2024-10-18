import Link from 'next/link'
import NextImg from 'next/image'
import { MdEmail, MdArrowForward } from 'react-icons/md'
import { FaInstagramSquare, FaGithub } from 'react-icons/fa'
import { SiNotion } from 'react-icons/si'

export default function Home() {
  return (
    <div className="isolate min-h-full">
      <NextImg
        src="/images/배경.jpg"
        alt="success"
        quality={100}
        className="-z-10 object-cover"
        fill
      />
      {/* 배경 위 */}
      <div className="flex flex-col justify-center items-center min-h-screen ml-9 relative z-10 animate-slideUp">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Hello I'm SeoJin
        </h1>
        <p className="mt-4 text-base text-white/70 sm:mt-6">
          안녕하세요 정보보호학과 23학번 백서진입니다
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            href="https://github.com/tjwls11"
            className="flex items-center text-sm font-semibold leading-7 text-white transition-transform duration-200 transform hover:scale-105"
          >
            <MdArrowForward className="mr-2 transition-transform duration-200 transform hover:translate-x-1" />
            github link
          </Link>
        </div>
      </div>

      {/* 배경 아래 */}
      <div className="flex flex-col justify-center items-center ml-9 relative z-10 animate-slideUp">
        <h1 className="text-black text-3xl font-bold mb-4">My contact</h1>

        <div className="mt-2 flex flex-row space-x-12 items-start">
          <div className="flex flex-col items-center pr-7">
            <MdEmail className="text-3xl mb-1 transition-transform duration-200 transform hover:scale-110" />
            <p className="text-center text-sm ">rcsj10@naver.com</p>
          </div>

          <div className="flex flex-col items-center pr-10">
            <Link
              href="https://www.instagram.com/seojin___.b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center transition-transform duration-200 transform hover:scale-110"
            >
              <FaInstagramSquare className="text-3xl mb-1 transition-transform duration-200 transform hover:scale-110" />
              <p className="text-center text-sm">Instagram</p>
            </Link>
          </div>

          <div className="flex flex-col items-center pr-10">
            <Link
              href="https://marble-acapella-568.notion.site/f1608ef20da24d3da95c6a5b1233500f?pvs=25"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center transition-transform duration-200 transform hover:scale-110"
            >
              <SiNotion className="text-3xl mb-1 transition-transform duration-200 transform hover:scale-110" />
              <p className="text-center text-sm">Notion</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
