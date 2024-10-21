'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaBirthdayCake, FaSchool, FaGithub, FaHome } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import { FaInstagram } from 'react-icons/fa6'
import { SiNotion } from 'react-icons/si'
import { GiLion } from 'react-icons/gi'

// GitHub 프로필 가져오기
async function GitHubProfile(username: string) {
  // ISR 방식 사용
  const response = await fetch(`https://api.github.com/users/${username}`)
  const data = await response.json()
  return data.avatar_url || '/images/icon1.png'
}

export default function AboutPage() {
  const [profileImage, setProfileImage] = useState('/images/icon1.png')

  useEffect(() => {
    const username = 'tjwls11'

    const getProfileImage = async () => {
      const image = await GitHubProfile(username)
      setProfileImage(image)
    }

    getProfileImage()
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 px-4 md:px-12 mt-9">
      <div className="flex flex-col md:flex-row items-center max-w-4xl w-full mx-auto mb-8">
        <div className="flex flex-col items-center mt-20 md:mt-0 md:items-start md:mr-16">
          <Link
            href="https://github.com/tjwls11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={profileImage}
              alt="깃허브 프로필"
              className="rounded-full mb-4 object-cover"
              width={200}
              height={200}
            />
          </Link>
          <div className="text-center md:text-left">
            <p>저의 깃허브 프로필 입니다</p>
            <p>클릭시 깃허브 페이지로 이동합니다</p>
          </div>
        </div>

        {/* 오른쪽 섹션 */}
        <div className="flex-1 mt-12 md:mt-16">
          <h1 className="text-3xl font-bold mb-2">About Me</h1>
          <h2 className="text-2xl mb-4 md:text-xl sm:text-lg whitespace-nowrap">
            안녕하세요 정보보호학과 백서진입니다
          </h2>
          <p className="mb-4">
            멋쟁이 사자처럼 12기로 활동하면서 웹 개발에 관심이 많아졌습니다.
            풀스택 개발자를 목표로 공부 중입니다. 앞으로도 계속해서 새로운
            기술을 배우고 성장하는 개발자가 되고 싶습니다.
          </p>
        </div>
      </div>
      {/* 박스 */}
      <div className="border border-black p-6 mt-4 mb-8 w-full aspect-[16/3]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center mb-2">
            <FaBirthdayCake className="mr-2 text-2xl" />
            2004.09.03
          </div>

          <Link href="https://github.com/tjwls11">
            <div className="flex items-center mb-2">
              <FaGithub className="mr-2 text-2xl" />
              Git Link
            </div>
          </Link>
          <div className="flex items-center mb-2">
            <FaSchool className="mr-2 text-2xl" />
            중부대학교 정보보호학과 23학번
          </div>
          <div className="flex items-center mb-2">
            <GiLion className="mr-2 text-2xl" />
            멋쟁이사자처럼 12기
          </div>
          <div className="flex items-center mb-2">
            <MdOutlineMailOutline className="mr-2 text-2xl" />
            <span className="text-sm">rcsj10@naver.com</span>
          </div>

          <Link href="https://marble-acapella-568.notion.site/f1608ef20da24d3da95c6a5b1233500f?pvs=25">
            <div className="flex items-center mb-2">
              <SiNotion className="mr-2 text-2xl" />
              Notion
            </div>
          </Link>
          <Link href="https://www.instagram.com/seojin___.b/">
            <div className="flex items-center mb-2">
              <FaInstagram className="mr-2 text-2xl" />
              seojin___.b
            </div>
          </Link>

          <div className="flex items-center mb-2">
            <FaHome className="mr-2 text-2xl" />
            경기도 고양시 탄현동
          </div>
        </div>
      </div>
      <hr className="my-4 border-b border-black w-full" />
      {/* 동영상 */}
      <div className="flex flex-col items-center mt-5">
        <div className="border-2 border-black w-full aspect-[16/9] flex items-center justify-center mb-4 max-w-3xl mx-auto">
          <video
            src="/images/포트폴리오.mp4"
            controls
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-lg mt-2">
          이번 포트폴리오 프로젝트를 하면서 느낀점을 동영상으로 만들었습니다
        </p>
      </div>
      <hr className="my-4 border-b border-black w-full" />
    </div>
  )
}
