import React, { useRef, useState } from "react";
import styled from "styled-components";

function ModalContentsInsertURL() {
  const [nameWarning, setNameWarning] = useState<string>("");

  return (
    <>
      <Background>
        <div>
          <LabelWrapper>
            <label htmlFor="name">이미지 URL</label>
            {nameWarning !== "" && <span>{nameWarning}</span>}
          </LabelWrapper>
          <Input id="name" />
        </div>
        <div>
          <button type="submit">확인</button>
        </div>
      </Background>
    </>
  );
}

export default ModalContentsInsertURL;

const Background = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.white};

  button {
    background-color: ${({ theme }) => theme.colors.bg1f};

    width: 39rem;
    height: 5rem;

    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.title};

    border: 0.1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 1.5rem;
    cursor: pointer;
    transition: filter 0.25s ease;

    :disabled {
      filter: brightness(50%);
    }

    :enabled {
      ${({ theme }) => theme.common.hoverEffect}
    }
  }

  div > label > strong {
    text-decoration: underline;

    transition: filter 0.25s ease;

    ${({ theme }) => theme.common.hoverEffect}
  }
`;

const LabelWrapper = styled.label`
  height: 2rem;

  margin-bottom: 0.625rem;

  display: flex;
  align-items: flex-end;

  > label {
    margin-right: 0.625rem;

    width: max-content;

    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.subTitle};

    > span {
      color: ${({ theme }) => theme.colors.error};
      font-size: ${({ theme }) => theme.fontSizes.text};

      @keyframes fadeIn {
        0% {
          color: #fefefe;
        }
        100% {
          color: #ff0000;
        }
      }

      animation: fadeIn 0.5s ease;
    }
  }
`;

interface InputProps {
  isOverlaid?: boolean;
}

const Input = styled.input<InputProps>`
  background-color: ${({ theme }) => theme.colors.bg1f};

  padding-left: 1.5rem;
  ${(props) =>
    props.isOverlaid ? "padding-right: 9.25rem" : "padding-right: 1.5rem"};
  margin-bottom: 1.5rem;

  width: 39rem;
  height: 5rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.subTitle};

  border-radius: 1.5rem;
  border: 0.1px solid ${({ theme }) => theme.colors.grey};

  ::-ms-reveal {
    filter: invert(100%);
  }
`;
