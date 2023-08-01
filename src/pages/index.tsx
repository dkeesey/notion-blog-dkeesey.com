//this only works with Node 14

import Header from '../components/header'
import ExtLink from '../components/ext-link'
// import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1>Dean A. Keesey</h1>
        <h2>
          Full-stack JavaScript & UI Engineer |<br />
          AWS Solutions Architect Associate
        </h2>

        {/* <Features /> */}

        <div className="explanation">
          <p>
            Welcome! I'm Dean, a seasoned engineer with 15+ years of experience
            delivering web and application design, driving digital
            transformations for Fortune 500 corporations and non-profit
            organizations alike.
          </p>
          <p>
            [Hero Image Suggestion: A high-resolution, professional photo of
            yourself. An alternative could be an image that represents your work
            – abstract code lines or an engaging UI design.]
          </p>
          <p>
            Through leveraging my vast UI/UX engineering expertise and a
            certification in cloud engineering as an AWS Solutions Architect
            Associate, I create innovative, user-friendly digital experiences
            that enhance customer experience across all touchpoints.
          </p>
          <p>
            In my diverse career, I've founded and developed the Masumi Hayashi
            Foundation, worked on large-scale client websites at Agency.com, and
            delivered complex licensing contracts at Oracle Corporation. I've
            also designed 3D motion graphics for ESPN's international coverage
            and resolved critical defects in e-commerce applications.
          </p>
          <p>
            [Image Suggestions: Images/logos from the Masumi Hayashi Foundation,
            Agency.com, Oracle Corporation, and ESPN.] Animation Suggestions:
            Animate the introduction of the list of your experiences, each one
            fading in sequentially. Another idea could be to have a 'typewriter'
            animation for the introductory text.
          </p>
          <p>
            Explore my blog to read more about my thoughts on technology,
            innovation, and the intersection of art and tech. [Image Suggestion:
            A teaser image or excerpt from your most recent blog post.] Looking
            for a proven engineer to help deliver your next project? Let's get
            in touch! [Button: 'Contact Me' with a link to your contact page or
            email.]
          </p>
        </div>
      </div>
    </>
  )
}
