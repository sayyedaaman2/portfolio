interface SectionTitleProp {
    title : string,
}

export default function SectionTitle({title="Title"}:SectionTitleProp){
    return(
        <h1 className="text-xl lg:text-2xl uppercase font-black tracking-[0.5em] lg:tracking-[1em] text-center my-8">{title}</h1>

    )
}