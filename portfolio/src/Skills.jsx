function Skills(){
    const skills=["Backend Developer","front end developer","full stack developer"]
    return(
        <div>
            <h1>Skills</h1>
            <ul>
                {skills.map((s,i)=><li key={i}>{s}</li>)}
            </ul>
        </div>
    )
}
export default Skills