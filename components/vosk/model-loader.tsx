import { Button, Select } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

const { Option } = Select;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  box-sizing: border-box;
  margin-left: 0.5rem;
`;
interface Props {
  onModelChange: (value: string) => void;
  onModelSelect: (value: string) => void;
  loading: boolean;
}

export const models: Array<{ name: string; path: string }> = [
  {
    name: "English",
    path: "vosk-model-small-en-us-0.15.tar.gz",
  },
];

const ModelLoader: React.FunctionComponent<Props> = ({
  onModelChange,
  onModelSelect,
  loading,
}) => {
  const [model, setModel] = useState(models[0].path);

  return (
    <div>
      <StyledButton onClick={() => onModelSelect(model)}>
        {loading ? "Loading..." : "Resource Load"}
      </StyledButton>
    </div>
  );
};

export default ModelLoader;
