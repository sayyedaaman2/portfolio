import CardList from "@/components/Card/CardList";
import SectionTitle from "@/components/common/SectionTitle";

export default function Project(){
    return(
        <section id="project" >
            <div className="container  grid ">
                <SectionTitle title={"project"}/>
              <CardList/>
            </div>
        </section>
    )
}