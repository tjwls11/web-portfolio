import Image from 'next/image'
import React from 'react'

export default function StudyPage() {
  const studyItems = [
    {
      title: 'HTML & CSS',
      imgSrc: '/study/html&css.png',
      description: 'HTML과 CSS 기본 구조와 문법에 대해 정리하였습니다',
    },
    {
      title: 'JavaScript',
      imgSrc: '/study/JavaScript.png',
      description: 'JavaScript 문법과 실습한 내용을 정리하였습니다',
    },
    {
      title: 'Nginx',
      imgSrc: '/study/nginx.png',
      description: 'Nginx에 대해 정리하고 웹배포를 하였습니다',
    },
    {
      title: 'AWS EC2',
      imgSrc: '/study/aws.png',
      description: 'AWS EC2를 활용해 서버를 구축해보았습니다',
    },
    {
      title: 'MongoDB',
      imgSrc: '/study/mongoDB.png',
      description:
        '몽고디비로 로그인 페이지를 만들어 유저 정보를 저장해보았습니다',
    },
    {
      title: 'MySQL',
      imgSrc: '/study/mysql.png',
      description: 'MySQL 구조, 문법 등을 정리해 보았습니다',
    },
    {
      title: 'Next.js 폴더구조',
      imgSrc: '/study/next.js.png',
      description: 'Next.js 폴더 구조에 대해 정리하였습니다',
    },
    {
      title: '오픈 API',
      imgSrc: '/study/openapi.png',
      description: '오픈 API 키를 발급 받고 불러오는 실습을 하였습니다',
    },
    {
      title: 'React',
      imgSrc: '/study/react.png',
      description: '리액트에 대해 정리하고 실습한 내용을 정리했습니다',
    },
    {
      title: '워게임',
      imgSrc: '/study/game.png',
      description: '드림핵에서 웹해킹문제를 풀고 정리하였습니다',
    },
  ]

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mt-11 pt-8 mb-5">
        웹에 대해 공부한 자료입니다
      </h1>
      <p className="text-center mb-11 pb-11">
        노션페이지에 정리해가며 공부하였습니다
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto px-4 mt-11 pt-4">
        {studyItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg m-4 mb-8 p-5"
          >
            <h2 className="text-2xl text-center font-semibold text-blue-950 m-6 overflow-hidden">
              {item.title}
            </h2>
            <Image
              src={item.imgSrc}
              alt={`${item.title} 이미지`}
              width={500}
              height={400}
              className="rounded-lg mb-4 shadow-lg" // 이미지에 shadow-lg 추가
            />

            <p className="text-gray-700 text-center mt-9 mb-6">
              {item.description}
            </p>
          </div>
        ))}
        <p className="mb-10 pb-4"></p>
      </div>
    </div>
  )
}
