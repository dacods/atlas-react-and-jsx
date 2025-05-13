import mePhoto from '../assets/face.JPG'

function AboutMe() {
    return (
        <div className="about-me">
            <img src={mePhoto} alt="Photo of Dacoda Takagi"/>
            <p>
                My name is Dacoda Takagi. I am in Full Stack Web Development.
                I am currently in T5. Some of my favorite languages to work
                with are JavaScript and Python. After school i'd like to get
                a job somewhere in Seattle. Some of my hobbies include reading,
                playing video games, and listening to music.
            </p>
        </div>
    )
}

export default AboutMe;