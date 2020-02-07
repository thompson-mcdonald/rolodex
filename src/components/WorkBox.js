import React from 'react';
import styled from 'styled-components';
import { H1, H1Stretched, PredStretched, ButtonLink } from '../styled';
import MouseToolTip from 'react-sticky-mouse-tooltip';

const OuterBox = styled.div`
  border: 1px solid black;

  width: 100%;
  height: 400px;

  padding: 1rem;

  box-sizing: border-box;

  cursor: crosshair;
  position: static;

  @media (min-width: 800px) {
    width: 100%;
    height: 350px;
  }

  @media (min-width: 940px) {
    width: 60%;
  }

  @media (min-width: 1080px) {
    width: 40%;
  }

`;

const Video = styled.video`
  height: 500px;
  width: auto;

  z-index: 500;

  border: 2px solid #000;
  box-shadow: 5px 5px 1px #000;

  transform: all 2s;
  transition: scale(1);
`;

const ImgBox = styled.div`
  display: none;
  position: static;
  z-index: -3;

  @media (min-width: 800px) {
    display: block;
  }

  img {
    max-width: 350px;

    padding-left: 80px;
  }

  @media (min-width: 1080px) {
    padding: 0 0 0 200px;
  }
`;

const WorkBoxContainer = styled.div`
  display: flex;
  align-items: center;

  margin: 3rem 0;

  @media (min-width: 800px) {
    flex-wrap: wrap;
  }

  @media (min-width: 940px) {
    flex-wrap: nowrap;
    margin: .8rem 0;
  }

`;

const MouseToolTipBox = styled(MouseToolTip)`
  z-index: 8;
`;

const VideoWorkaround = ({ src }) => (
  <div dangerouslySetInnerHTML={{ __html: `
    <video
      muted
      autoplay
      playsinline
      src="${src}"
    />
  ` }}
  />
);

class WorkBox extends React.Component {
  state = {
    isMouseTooltipVisible: false,
    video: false
  };

  toggleMouseTooltip = () => {
    this.setState(prevState => ({ isMouseTooltipVisible: !prevState.isMouseTooltipVisible }));
    this.setState(prevState => ({ video: !prevState.video }));
  };

  render() {
    return (
      <WorkBoxContainer>
          <OuterBox 
            onMouseEnter={this.toggleMouseTooltip}
            onMouseLeave={this.toggleMouseTooltip}          
          >
            <H1>
              {this.props.project}
            </H1>
            <PredStretched>Role: {this.props.role}</PredStretched>
            {this.props.url && (
              <ButtonLink 
              href={this.props.url}
              target="_blank"
              >
                {this.props.buttonText}
              </ButtonLink>
            )}
            <MouseToolTipBox
              visible={this.state.isMouseTooltipVisible}
              offsetX={5}
              offsetY={5}
            >
            <VideoWorkaround
              src={this.props.videourl}
            />
              
            </MouseToolTipBox>
          </OuterBox>
        <ImgBox>
          <img src={this.props.imageurl} alt={this.props.alt} />
        </ImgBox>
      </WorkBoxContainer>
    )
  }
};

export default WorkBox;