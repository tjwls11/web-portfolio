import React from 'react'
import Image from 'next/image'

export default function ProjectPage() {
  // 프로젝트 정보 배열
  const projects = [
    {
      title: '반응속도 페이지',
      imageSrc: '/project/reactiongame.png',
      description:
        'HTML, CSS, JavaScript를 사용해 만든 반응속도 게임입니다.<br />사용자가 버튼을 누르는 속도를 측정하여 결과를 보여줍니다',
      projectLink: 'https://game-ivory-eta.vercel.app/',
      githubLink: 'https://github.com/tjwls11/game',
    },
    {
      title: 'TodoList',
      imageSrc: '/project/todolist.png',
      description:
        '리액트를 사용하여 만든 TodoList 웹서비스입니다.<br />사용자가 할 일을 추가하고 삭제할 수 있는 기능이 있습니다',
      projectLink: 'https://react-todolist-4yx3.vercel.app/',
      githubLink: 'https://github.com/tjwls11/react-todolist',
    },
    {
      title: '캘린더',
      imageSrc: '/project/moodtracker.png',
      description:
        '리액트를 사용하여 만든 캘린더입니다.<br />그날의 기분을 색깔로 표현하는 기능이 있습니다',
      projectLink: 'https://calendar-lake-xi.vercel.app/',
      githubLink: 'https://github.com/tjwls11/calendar',
    },
    {
      title: '해커톤',
      imageSrc: '/project/해커톤.mp4',
      description:
        '멋쟁이사자처럼 해커톤 프로젝트.<br />개인의 정신 건강과 감정 관리를 위해 일상과 감정을 기록하는 서비스입니다',
      projectLink:
        'https://www.canva.com/design/DAGNEV99esg/FTfYOKHk-iTGGaCpJ_xtIQ/view',
      githubLink: 'https://github.com/tjwls11/diary111',
    },
  ]

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mt-11 pt-8 mb-5">
        MY PROJECTS
      </h1>
      <p className="text-center mb-11 pb-11">
        제가 진행한 프로젝트를 소개합니다
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto px-4 mt-11 pt-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg p-5 shadow-lg"
          >
            <h2 className="text-2xl text-center font-semibold text-blue-950 mb-4">
              {project.title}
            </h2>
            <div className="flex justify-center mb-4">
              {project.imageSrc.endsWith('.mp4') ? (
                <div className="flex items-center justify-center w-[500px] h-[500px] sm:w-[280px] sm:h-[280px]">
                  <video
                    src={project.imageSrc}
                    className="w-full h-full object-cover rounded-lg"
                    controls
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center w-[500px] h-[500px] sm:w-[280px] sm:h-[280px]">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    width={500}
                    height={400}
                    className="rounded-lg object-cover mb-4 shadow-lg"
                  />
                </div>
              )}
            </div>

            <p
              className="text-gray-700 text-center mt-2 mb-2"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition"
              >
                바로가기
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition"
              >
                깃허브
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
