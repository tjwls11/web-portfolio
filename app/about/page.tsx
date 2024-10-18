'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaBirthdayCake, FaSchool } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import { FaInstagram } from 'react-icons/fa6'

export default function AboutPage() {
  const [profileImage, setProfileImage] = useState(null)

  useEffect(() => {
    const fetchGitHubProfile = async () => {
      const username = 'tjwls11'
      const response = await fetch(`https://api.github.com/users/${username}`)
      if (response.ok) {
        const data = await response.json()
        setProfileImage(data.avatar_url)
      } else {
        console.error('Failed to fetch profile image')
      }
    }

    fetchGitHubProfile()
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="flex items-start max-w-4xl w-full mx-auto">
        <div className="mr-16">
          <Link
            href="https://github.com/tjwls11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={profileImage || 'defaultImage.jpg'}
              alt="Profile"
              className="rounded-full mb-4 object-cover"
            />
          </Link>
          <div className="mt-1 text-center">
            <p>저의 깃허브 프로필 입니다</p>
            <p>클릭시 깃허브 페이지로 이동합니다</p>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">About Me</h1>
          <h2 className="text-2xl mb-4">
            안녕하세요 정보보호학과 백서진입니다
          </h2>
          <p className="mb-4">
            멋쟁이 사자처럼 12기로 활동하면서 웹 개발에 관심이 많아졌습니다.
            풀스택 개발자를 목표로 공부 중입니다.
          </p>

          {/* 박스 */}
          <div className="border border-black p-4 mb-8 ">
            <div className="flex items-center mb-2">
              <FaBirthdayCake className="mr-2 text-2xl" />
              2004.09.03
            </div>

            <div className="flex items-center mb-2">
              <FaSchool className="mr-2 text-2xl" />
              중부대학교 정보보호학과 23학번
            </div>

            <div className="flex items-center mb-2">
              <MdOutlineMailOutline className="mr-2 text-2xl" />
              rcsj10@naver.com
            </div>

            <Link href="https://www.instagram.com/seojin___.b/">
              <div className="flex items-center mb-2">
                <FaInstagram className="mr-2 text-2xl" />
                seojin___.b
              </div>
            </Link>
          </div>
        </div>
      </div>

      <hr className="my-4 border-b border-black w-full" />

      {/*동영상*/}
      <div className="flex flex-col items-center mt-16">
        <div className="border-2 border-black w-96 h-48 flex items-center justify-center mb-4">
          <video src="/images/포트폴리오.mp4" controls></video>
        </div>
        <p className="text-lg">
          이번 포트폴리오 프로젝트를 하면서 느낀점을 동영상으로 만들었습니다
        </p>
        <p className="text-lg"></p>
      </div>

      <hr className="my-4 border-b border-black w-full" />
    </div>
  )
}
