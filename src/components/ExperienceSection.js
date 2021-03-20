import React from "react";
import styled from "styled-components";
import {Layout} from "../styles";

const ExperienceCard = ({cardHeader, cardDate, cardContent}) => {
    return (
        <Drop>
            <div className={"card-title"}>
                <h4>{cardHeader}</h4>
                <h5>{cardDate}</h5>
            </div>
            <div className="drop-content">
                <p>{cardContent}</p>
            </div>
            <div className="exp-line"/>
        </Drop>
    );
};

const ExperienceSection = () => {
    return (
        <Experience>
            <h2>My Experience</h2>
            <h3><span>Education</span></h3>
            <br/>
            <ExperienceCard
                cardHeader={"Case Western Reserve University"}
                cardDate={"2018 - 2021"}
                cardContent={
                    "Graduating in Fall 2021 with a BS in Computer Science on the Software Engineering Track"
                }
            />
            <ExperienceCard
                cardHeader={"Hoover High School"}
                cardDate={"2014 - 2018"}
                cardContent={
                    "Graduated in Spring 2018 as a Valedictorian and National Merit Scholar with an IB diploma"
                }
            />
            <h3><span>Work History</span></h3>
            <br/>
            <ExperienceCard
                cardHeader={"Microsoft Azure"}
                cardDate={"2021"}
                cardContent={
                    "Intern on the Azure Compute Team for Summer 2021 \n" + "More to come"
                }
            />
            <ExperienceCard
                cardHeader={"Altec Inc."}
                cardDate={"2020 - 2021"}
                cardContent={
                    "PIT Bandicoots (Fall 2020 - Summer 2021): \n\n" +
                    'Developed and deployed the final phase of the "Configurable Checksheets" application leading to over $2.1 million added benefit to the business \n' +
                    "\t-Configurable Checksheets allowed factory associates easy access to the instructions and customer requests for the development of custom utility trucks \n" +
                    "Developed and deployed the initial deliverable for the Audit Application leading to over $800 thousand added benefit for the business \n" +
                    "\t-The Audit application allowed auditors to determine whether trucks had been built safely while following all standard and requested protocols and instructions"
                }
            />
            <ExperienceCard
                cardHeader={"Altec Inc."}
                cardDate={"2020 - 2021"}
                cardContent={
                    "IS Intern Team (Summer 2020): \n\n" +
                    "Created and deployed an application allowing all company associates to view basic information about any build job \n" +
                    "Designed and implemented an interface for a new company-wide system for the storage and management of high quality photographs"
                }
            />
            <ExperienceCard
                cardHeader={"Breakthrough Electrolytes for Energy Storage"}
                cardDate={"2020 - 2021"}
                cardContent={
                    "Maintained and update the webpage for the BEES EFRC \n" +
                    "\t-Increased traffic from 100 views to over 2000 views per month \n" +
                    "Scripted a means of data archival, display, and delivery to the Department of Energy"
                }
            />
        </Experience>
    );
};

const Experience = styled(Layout)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .exp-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
`;

const Drop = styled.div`
  .card-title {
    padding: 3rem 0;
    cursor: pointer;
  }

  .drop-content {
    padding: 2rem 0;

    p {
      padding: 0.5rem 0;
      margin: 0;
      white-space: pre-wrap;
      line-height: 2.7rem;
    }
  }
`;


export default ExperienceSection;
