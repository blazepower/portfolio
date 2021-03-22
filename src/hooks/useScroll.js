import { useInView } from "react-intersection-observer";

export const useScroll = () => {
  const [element, view] = useInView({ threshold: 0.2 });
  return [element, view];
};
