import 'devicon'

type SkillIcon ={
  title : string,
  class? : string
}
const SkillIconList: SkillIcon[] = [
  {
    title: "HTML",
    class: "devicon-html5-plain text-orange-500",
  },
  {
    title: "CSS",
    class: "devicon-css3-plain text-blue-500",
  },
  {
    title: "JavaScript",
    class: "devicon-javascript-plain text-yellow-400",
  },
  {
    title: "TypeScript",
    class: "devicon-typescript-plain text-blue-600",
  },
  {
    title: "React.js",
    class: "devicon-react-original text-cyan-400",
  },
  {
    title: "Next.js",
    class: "devicon-nextjs-plain text-black dark:text-white",
  },
  {
    title: "Node.js",
    class: "devicon-nodejs-plain text-green-600 ",
  },
  {
    title: "TailwindCSS",
    class: "devicon-tailwindcss-plain text-sky-500",
  },
  {
    title: "MySQL",
    class: "devicon-mysql-plain text-blue-500",
  },
  {
    title: "MariaDB",
    class: "devicon-mariadb-plain text-indigo-500",
  },
  {
    title: "MongoDB",
    class: "devicon-mongodb-plain text-green-700",
  },
  {
    title: "Sequelize",
    class: "devicon-sequelize-plain text-sky-700",
  },
  {
    title: "Mongoose",
    class: "devicon-mongodb-plain text-green-700", 
  },
  {
    title: "OAuth",
    class: "devicon-openapi-plain text-gray-600", 
  },
  {
    title: "Passport.js",
    class: "devicon-javascript-plain text-yellow-400", 
  },
  {
    title: "NextAuth",
    class: "devicon-nextjs-plain text-black dark:text-white", 
  },
  {
    title: "NPM",
    class: "devicon-npm-original-wordmark text-red-600",
  },
  {
    title: "Git",
    class: "devicon-git-plain text-orange-600",
  },
  {
    title: "Postman",
    class: "devicon-postman-plain text-orange-500",
  },
  {
    title: "API",
    class: "devicon-openapi-plain text-gray-600",
  },
  {
    title: "DSA",
    class: "devicon-cplusplus-plain text-blue-600", 
  },
];

export default function Skills(){
    return(
        <div id="skills">
            <div className="container">
                <h1 className="text-2xl uppercase font-black tracking-[1em] text-center my-8">Skills</h1>
                  <SkillLayout  List={SkillIconList}/>
            </div>
        </div>
    )
}
interface SkillLayoutProps {
  List : SkillIcon[]
}
function SkillLayout({ List }: SkillLayoutProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 ">
      {List.map((icon:SkillIcon, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center justify-center space-y-2 p-4 rounded-xl shadow-sm hover:shadow-md dark:shadow-slate-300 transition"
        >
          <Icon {...icon} />
        </div>
      ))}
    </div>
  );
}


function Icon(props:SkillIcon){
  
  return(<>
    <i className={`text-lg md:text-4xl lg:text-6xl font-meduim ${props?.class ? props.class : ""}`}></i>
    <span className="text-sm font-medium">{props.title}</span>
  </>
  )
}