import { Briefcase, Code, User } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
          About <span className="text-primary "> Me</span>
        </h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:items-center min-h-[550px]">

         <div className="space-y-6 text-center md:text-left">
  <h3 className="text-2xl md:text-3xl font-semibold">
    Passionate Web Developer & Tech Enthusiast
  </h3>

  <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
    I'm a creative and driven developer with a passion for building thoughtful, user-focused digital experiences.
  </p>

  <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 max-w-xl mx-auto md:mx-0">
    <li>Solid foundation in both front-end & back-end web technologies.</li>
    <li>Enjoy transforming complex problems into elegant, intuitive interfaces.</li>
    <li>Curious and constantly learning new tools and frameworks.</li>
    <li>Committed to writing accessible, scalable, and maintainable code.</li>
  </ul>

  <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start">
    <a href="#contact" className="cosmic-button">
      Get In Touch
    </a>
    <a
      href=""
      className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-meteor/10 transition-colors duration-300"
    >
      Download CV
    </a>
  </div>
</div>


          <div className="grid grid-cols-1 gap-6 ">
            <div className=" gradient-border p-6 card-hover  ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-meteor/10">
                  <Code className="h-6 w-6 text-primary " />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg ">Web Development</h4>
                    <p className="text-muted-foreground">Creating responsive websites and web applications with modern frameworks. </p>
                </div>
              </div>
            </div>
            <div className=" gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-meteor/10">
                  <User className="h-6 w-6 text-primary " />
                  
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg ">UI/UX Design</h4>
                    <p className="text-muted-foreground">Designing intuitive user interfaces and seamless user experiences.  </p>
                </div>
              </div>
            </div>
            <div className=" gradient-border p-6 card-hover ">
                 <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-meteor/10">
                    <Briefcase className="h-6 w-6 text-primary "/>
                    </div>
                    <div className="text-left">
                    <h4 className="font-semibold text-lg ">Project Management </h4>
                    <p className="text-muted-foreground">Leading Projects from conception to completion with agile methodologies. </p>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
