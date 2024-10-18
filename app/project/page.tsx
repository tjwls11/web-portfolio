import React from 'react'

export default function ProjectPage() {
  // 프로젝트 정보 배열
  const projects = [
    {
      title: '반응속도 페이지',
      imageSrc: '/project/reactiongame.png',
      description: 'HTML, CSS, JavaScript를 사용해 만든 반응속도 게임입니다',
      subDescription:
        '사용자가 버튼을 누르는 속도를 측정하여 결과를 보여줍니다',
      projectLink: 'https://game-ivory-eta.vercel.app/',
      githubLink: 'https://github.com/tjwls11/game',
    },
    {
      title: 'TodoList',
      imageSrc: '/project/todolist.png',
      description: '리액트를 사용하여 만든 TodoList 웹서비스입니다',
      subDescription:
        '사용자가 할 일을 추가하고 삭제할 수 있는 기능이 있습니다',
      projectLink: 'https://react-todolist-4yx3.vercel.app/',
      githubLink: 'https://github.com/tjwls11/react-todolist',
    },
    {
      title: '캘린더',
      imageSrc: '/project/moodtracker.png',
      description: '리액트를 사용하여 만든 캘린더입니다',
      subDescription: '그날의 기분을 색깔로 표현하는 기능이 있습니다',
      projectLink: 'https://calendar-lake-xi.vercel.app/',
      githubLink: 'https://github.com/tjwls11/calendar',
    },
    {
      title: '해커톤',
      imageSrc: '/project/해커톤.mp4',
      description: '멋쟁이사자처럼 해커톤 프로젝트입니다',
      subDescription:
        '개인의 정신 건강과 감정 관리를 위해 일상과 감정을 기록하는 서비스입니다',
      projectLink:
        'https://www.canva.com/design/DAGNEV99esg/FTfYOKHk-iTGGaCpJ_xtIQ/view',
      githubLink: 'https://github.com/tjwls11/diary111',
    },
  ]

  return (
    <div className="flex items-center justify-center min-h-screen">
      <section className="my-12 w-full max-w-6xl">
        <h1 className="text-4xl text-center mb-10 font-bold text-gray-800">
          MY PROJECTS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg text-center shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {project.title}
              </h2>
              <div className="flex justify-center">
                {project.imageSrc.endsWith('.mp4') ? (
                  <video
                    src={project.imageSrc}
                    className="max-w-full h-64 object-cover rounded-lg mb-4"
                    controls
                  />
                ) : (
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="max-w-full h-64 object-cover rounded-lg mb-4"
                  />
                )}
              </div>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <p className="text-gray-500 mb-4">{project.subDescription}</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                >
                  바로가기
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                >
                  깃허브
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
