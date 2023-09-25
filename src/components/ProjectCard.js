import { Col } from "react-bootstrap";
import styled from 'styled-components';

const ProjectContainer = styled.div`
  margin: 0 auto;
  max-width: 45%;
  background-color: rgb(23, 23, 33);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 12px 4px;
  overflow: hidden;
  padding: 26px 20px;
  transition: all 0.5s ease-in-out 0s;
  @media screen and (max-width:600px) {
    margin-top: 15px;
    max-width: 75%;
    padding: 10px;
  }
`
const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: rgb(133, 76, 230);
    background-color: rgba(133, 76, 230, 0.082);
    padding: 2px 8px;
    border-radius: 10px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
    @media screen and (max-width:600px) {
      font-size: 12px;
    }
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: rgb(177, 178, 179);
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top:12px;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: rgba(177, 178, 179, 0.6);
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`
const Description = styled.div`
    font-weight: 400;
    color: rgba(177, 178, 179, 0.6);
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`
export const ProjectCard = ({id, title, agenda, date, description, image, tags, github, website }) => {
  return (
    <ProjectContainer key={id} >
      <Col  md={12}>
        <div className="proj-imgbx">
          <img src={image} alt="projectImage" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{agenda}</span>
            <div className="d-flex justify-content-center">
              <a href={github}><button className="btns">Code</button></a>
              <a href={website}><button className="btns">Website</button></a>
            </div>
          </div>
        </div>
      </Col>
      <div className="btn-box">
        <a href={github}><button className="">Code</button></a>
        <a href={website}><button className="">Website</button></a>
      </div>
      <Tags>
        {tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Description>{description}</Description>
      </Details>
    </ProjectContainer>
  )
}
