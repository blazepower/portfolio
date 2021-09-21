const initialInfoState = {
  experience: [],
  education: [],
  skills: [],
  projects: [],
};

const infoReducer = (state = initialInfoState, action) => {
  switch (action.type) {
    case "GET_EXPERIENCE":
      return { ...state, experience: action._payload.experience };
    case "GET_SKILLS":
      return { ...state, skills: action._payload.skills };
    case "GET_PROJECTS":
      return { ...state, projects: action._payload.projects };
    case "GET_EDUCATION":
      return { ...state, education: action._payload.education };
    default:
      return { ...state };
  }
};

export default infoReducer;
