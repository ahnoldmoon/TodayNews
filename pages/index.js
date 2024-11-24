import styled, { createGlobalStyle } from "styled-components";
import Image from "next/image";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Fraunces', serif;
    color: #2D2D2D;
    background-image: url('https://cdn.pixabay.com/photo/2024/01/07/09/35/background-8422123_1280.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    min-height: 100vh;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: 30px;

  span {
    background-color: #5D4037;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 1.2rem;
  }
`;

const SiteTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 40px;
  color: #2D2D2D;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const ImageSection = styled.div`
  position: relative;
  height: 600px;
`;

const ContentSection = styled.div`
  padding: 40px;
  grid-column: span 2;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;

  a {
    text-decoration: none;
    color: #2D2D2D;
    font-size: 1rem;
  }
`;

const MainTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  line-height: 1.2;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
`;

const Feature = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  p {
    font-size: 0.9rem;
    color: #666;
  }
`;

const Button = styled.button`
  background-color: #4A90E2;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #357ABD;
    transform: translateY(-2px);
  }
`;

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Logo>
          <span>MS</span>
        </Logo>
        <SiteTitle>School Websitedfjlsafjdlfjld</SiteTitle>
        <MainContent>
          <ImageSection>
            <Image
              src="/images/student.jpg"
              alt="Student studying"
              layout="fill"
              objectFit="cover"
            />
          </ImageSection>
          <ContentSection>
            <Navigation>
              <a href="#about">About</a>
              <a href="#academics">Academics</a>
              <a href="#admissions">Admissions</a>
              <a href="#news">News & Events</a>
              <a href="#contact">Contact Us</a>
            </Navigation>
            <MainTitle>Unlocking True Potential Through Individual Strengths</MainTitle>
            <Description>
              We nurture each student's unique strengths, helping them grow into confident, capable individuals ready to succeed.
            </Description>
            <Features>
              <Feature>
                <h3>High Graduation Rate</h3>
                <p>We prepare students for success with a strong graduation rate</p>
              </Feature>
              <Feature>
                <h3>Personalized Attention</h3>
                <p>We ensure focused learning with a low student-teacher ratio</p>
              </Feature>
              <Feature>
                <h3>Active Engagement</h3>
                <p>We boost development with high extracurricular participation</p>
              </Feature>
            </Features>
            <Button>Enroll Today</Button>
          </ContentSection>
        </MainContent>
      </Container>
    </>
  );
}
