import CardList from "@/components/Card/CardList";

export default function Project(){
    return(
        <section id="project">
            <div className="container  grid ">
                <h1 className="text-2xl uppercase font-black tracking-[1em] text-center my-8">Project</h1>
              <CardList/>
            </div>
        </section>
    )
}