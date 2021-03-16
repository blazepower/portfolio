import React from "react";

const ExperienceCard = ({ cardHeader, cardDate, cardContent }) => {
  return (
    <div className="drop-header">
      <h4>{cardHeader}</h4>
      <h5>{cardDate}</h5>
      <div className="drop-content">
        <pre>{cardContent}</pre>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <div className={"experience"}>
      <h2>My Experience</h2>
      <h3>Education</h3>
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
      <h3>Work History</h3>
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
          "PIT Bandicoots (Fall 2020 - Summer 2021): \n" +
          '\t Developed and deployed the final phase of the "Configurable Checksheets" application leading to over $2.1 million added benefit to the business \n' +
          "\t\t -Configurable Checksheets allowed factory associates easy access to the instructions and customer requests for the development of custom utility trucks \n" +
          "\t Developed and deployed the initial deliverable for the Audit Application leading to over $800 thousand added benefit for the business \n" +
          "\t\t -The Audit application allowed auditors to determine whether trucks had been built safely while following all standard and requested protocols and instructions \n" +
          "IS Intern Team (Summer 2020): \n" +
          "\t Created and deployed an application allowing all company associates to view basic information about any build job \n" +
          "\t Designed and implemented an interface for a new company-wide system for the storage and management of high quality photographs"
        }
      />
      <ExperienceCard
        cardHeader={"Breakthrough Electrolytes for Energy Storage"}
        cardDate={"2020 - 2021"}
        cardContent={
          "Maintained and update the webpage for the BEES EFRC \n" +
          "\t -Increased traffic from 100 views to over 2000 views per month \n" +
          "Scripted a means of data archival, display, and delivery to the Department of Energy"
        }
      />
    </div>
  );
};

export default ExperienceSection;
