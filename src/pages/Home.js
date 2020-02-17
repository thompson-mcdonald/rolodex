import React from 'react';
import WorkBox from '../components/WorkBox';
import styled from 'styled-components';
import { H1, H1Stretched, Pred, ButtonLink } from '../styled';
import ORB from '../orb.png';
import PARTISAN from '../cr004.mp4';
import CR2019 from '../cr2019.mp4';
import CR003 from '../cr003.mp4';
import LASTJAPAN from '../lastjapan.mp4';
import TREE from '../tree-dl.png';
import ASPH from '../asph.mp4';
import FANFARE from '../fanfare.jpg';
import '../index.css';

const Layout = styled.div`
  padding: 0 2rem;
`;

const Header = styled.header`
  padding: 10rem 0 3rem;
  @media (min-width: 867px) {
    padding: 6rem 0 3rem;
  }
  h1 {
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  max-width: 600px;
`;

const P = styled.p`
  font-size: 1.2rem;
  padding-top: 1rem;
  letter-spacing: -0.033rem;
  color: #111;
  line-height: 1.9rem;
  transform: scaleY(1.1);
`;

const H1StretchedFixed = styled(H1Stretched)`
  transform: scaleX(.8);
  
  transition: transform 2s;
  transform-origin: left center;
  &:hover {
    transform: scaleX(1);
    transition: transform 2s;
  }
  @media (min-width: 867px) {
    left: 2rem;
    top: 40px;
    transform: scaleX(.6);
  }
`;

const WorkArea = styled.div`
  margin-top:2rem;
  margin-bottom: 13rem;
`;

const Desktop = styled.div`
  display: none;
  @media (min-width: 867px) {
    display: block;
  }
`;

const Mobile = styled.div`
  display: block;
  @media (min-width: 867px) {
    display: none;
  }
`;

const VideoContainer = styled.div`
  margin: 5rem 0;
  video {
    width: 100%;
  }
`;

const PBold = styled.p`
  font-weight: bold;
`;

const A = styled.a`
  :link, :visited {
    color: black;
  }
  :hover {
    text-decoration: none;
  }
`;

const VideoWorkaround = ({ src }) => (
  <div dangerouslySetInnerHTML={{ __html: `
    <video
      muted
      autoplay
      loop
      playsinline
      src="${src}"
    />
  ` }}
  />
);

const Home = () => {

  return ( 
    <Layout>
      <Header>
        <H1StretchedFixed>Jacob Thompson-McDonald</H1StretchedFixed>
        <P>I'm a Designer + Front End Developer with 6 years total experience. My last full-time position was Visual Lead at Release Platform. Since then I've been contracting, and working as a part of <A href="https://circadian-rhythms.com">Circadian Rhythms</A>, as website admin and developer.</P>

        <P>In my career, I've designed digital apps for both the web & native. For clients in local government, all the way through to the music industry. </P>

        <P>In my spare time, I'm usually learning how to use Ableton better</P>

        <P>Email: jthompsonmcdonald [at] gmail [dot] com</P>

        > <A href="https://github.com/thompson-mcdonald" target="_blank">Github</A>
      </Header>
      <WorkArea>
        <Mobile>
          <PBold>RECENT WORK</PBold>
          <VideoContainer>
            <H1Stretched>ASPHALT TANGO</H1Stretched>
            <Pred>Designer + Developer</Pred>
            <VideoWorkaround
                src={ASPH}
              />

            <div>
              COMING SOON
            </div>
          </VideoContainer>
          <VideoContainer>
            <H1Stretched>CR004: PARTISAN</H1Stretched>
            <Pred>Developer</Pred>
            <VideoWorkaround
                src={PARTISAN}
              />
            <div>
              <ButtonLink 
                href='https://circadian-rhythms.com/cr004'
                target="_blank"
              >VISIT</ButtonLink>
            </div>
          </VideoContainer>
          <VideoContainer>
            <H1Stretched>Circadian Rhythms Website</H1Stretched>
            <Pred>Developer</Pred>
            <VideoWorkaround
                src={CR2019}
              />

            <div>
              <ButtonLink 
                href='https://circadian-rhythms.com'
                target="_blank"
              >VISIT</ButtonLink>
            </div>
          </VideoContainer>
          <VideoContainer>
            <H1Stretched>Last Japan Website</H1Stretched>
            <Pred>Designer & Developer</Pred>
            <VideoWorkaround
                src={LASTJAPAN}
              />
            <div>
              <ButtonLink 
                href='https://lastjapan.com'
                target="_blank"
              >VISIT</ButtonLink>
            </div>
          </VideoContainer>
          <VideoContainer>
           <H1Stretched>CR003: PLATA - LAST DAYZ</H1Stretched>
            <Pred>Developer</Pred>
            <VideoWorkaround
                src={CR003}
              />
            <div>
              <ButtonLink 
                href='https://circadian-rhythms.com/cr003'
                target="_blank"
              >VISIT</ButtonLink>
            </div>
          </VideoContainer>
        </Mobile>
        <Desktop>
          <PBold>RECENT WORK<br />
          (Hover to see video preview)</PBold>
          <WorkBox 
            project='ASPHALT TANGO'
            role='Designer & Developer'
            videourl={ASPH}
            imageurl={FANFARE}
            alt="fanfare ciocarlia stand in a field"
          />
          <WorkBox 
            project='CR004: PARTISAN'
            role='Developer'
            videourl={PARTISAN}
            imageurl={ORB}
            url="https://circadian-rhythms.com/cr004"
            alt="partisan orb"
            buttonText="VISIT"
          />
          <WorkBox 
            project='Circadian Rhythms Website'
            role='Developer'
            videourl={CR2019}
            imageurl=''
            url="https://circadian-rhythms.com/cr004"
            buttonText="VISIT"
          />
          <WorkBox 
            project='Last Japan Website'
            role='Designer & Developer'
            videourl={LASTJAPAN}
            imageurl=''
            url="https://circadian-rhythms.com/cr004"
            buttonText="VISIT"
          />
          <WorkBox 
            project='CR003: LAST DAYZ'
            role='Developer'
            videourl={CR003}
            imageurl={TREE}
            url="https://circadian-rhythms.com/cr003"
            alt="tree silhouette"
            buttonText="VISIT"
          />
        </Desktop>
      </WorkArea>
    </Layout>
  );
};

export default Home;