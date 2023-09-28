import Head from 'next/head'
import Typography from 'components/Typography'
import DefaultLayout from 'layouts/DefaultLayout'
import styles from './About.module.scss'

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <Head>
        <title>Sobre - Cesar Boaventura</title>
        <meta
          name="description"
          content="Cesar Boaventura, Front-End Engineer"
        />
      </Head>
      <DefaultLayout small>
        <div className={styles.textContainer}>
          <Typography as="h1" variant="h1">
            Hello,
          </Typography>
          <Typography as="p" variant="p">
            My name is Cesar and I am 26 years old. I have over 7 years of
            professional experience. Throughout my career, I have developed a
            strong passion for software development and front-end technologies.
            I enjoy experimenting with new technologies and keeping up with the
            latest trends in the industry.
          </Typography>

          <Typography as="p" variant="p">
            My experience with React, a JavaScript library for building user
            interfaces, allows me to develop high-quality, scalable, and
            efficient web applications. With NextJS, a React framework for
            building SSR (Server Side Rendering) web applications, I can create
            applications with better performance, SEO, and UX.
          </Typography>

          <Typography as="p" variant="p">
            In addition, I have advanced knowledge in JavaScript, such as:
            Prototypes, Closures, Functional Programming, Asynchronous
            Programming and Event Loop.
          </Typography>

          <Typography as="p" variant="p">
            As a frontend developer, I also have some knowledge of product and
            metrics. I understand the importance of aligning development efforts
            with the business goals of the project, and I am capable of
            collaborating with product teams to ensure the success of the final
            product. Additionally, I have experience working with metrics and
            analytics tools to track user behavior and optimize the user
            experience. With these skills, I am able to contribute to the full
            development cycle of a product, from ideation to release, and ensure
            that the end result meets both technical and business requirements.
          </Typography>

          <Typography as="p" variant="p">
            I am always open to learning new technologies and expanding my
            knowledge. I am confident that I can adapt to new projects and
            provide valuable contributions to development teams.
          </Typography>
        </div>
      </DefaultLayout>
    </div>
  )
}

export default About
