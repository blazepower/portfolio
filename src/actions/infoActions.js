import axios from "axios";
import * as api from "../services/api";

export const loadExperiences = () => async (dispatch) => {
  const experienceData = await axios.get(api.getAllExperience);
  dispatch({
    type: "GET_EXPERIENCE",
    _payload: {
      experience: experienceData.data,
    },
  });
};

export const loadEducation = () => async (dispatch) => {
  const educationData = await axios.get(api.getAllEducation);
  dispatch({
    type: "GET_EDUCATION",
    _payload: {
      education: educationData.data,
    },
  });
};

export const loadProjects = () => async (dispatch) => {
  const projectData = await axios.get(api.getAllProjects);
  dispatch({
    type: "GET_PROJECTS",
    _payload: {
      projects: projectData.data,
    },
  });
};

export const loadSkills = () => async (dispatch) => {
  const skillsData = await axios.get(api.getAllSkills);
  dispatch({
    type: "GET_SKILLS",
    _payload: {
      skills: skillsData.data,
    },
  });
};
