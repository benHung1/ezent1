import styled from "styled-components";

export const Container = styled.div`
  background: url("https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-size: cover;
  background-position: center center;
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: multiply;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const TextTitle = styled.h1`
  padding: 20px;
  color: ${({ inverse }) => (inverse ? "#f8f8f8" : "#000")};
  font-size: clamp(2.5rem, 6vw, 4.5rem);
`;

export const TextContent = styled.p`
  padding: 20px;
  font-size: clamp(0.9rem, 2.3vw, 1.9rem);

  color: ${({ inverse }) => (inverse ? "#f8f8f8" : "#000")};
`;

export const TextButton = styled.button`
  padding: 12px 64px;
  border-radius: 4px;
  border: 2px solid #d12d2d;
  margin-top: 20px;
  background: none;
  font-size: 1rem;
  color: #f8f8f8;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  &:before {
    background-color: #d12d2d;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 1.5s ease;
    width: 102%;
    height: 0%;
  }
  &:hover:before {
    height: 200%;
  }
  &:hover {
    z-index: 1;
    color: black;
  }
`;
