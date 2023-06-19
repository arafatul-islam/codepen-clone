import React from "react";
import { Box, styled } from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import { Controlled as ControlledEditor } from "react-codemirror2";

const Editor = ({ language, icon, heading, color, value, changeValue }) => {
  const Container = styled(Box)`
    flex-grow: 1;
    background: #020202;
    height: 100%;
    display: flex;
    flex-direction: column;
  `;

  const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const HeaderLeft = styled(Box)`
    display: flex;
    align-items: center;
    column-gap: 3px;
    background: #222222;
    border-top: 2px solid #444444;
    padding: 4px;
    border-radius: 2px;
  `;
  const HeaderRight = styled(Box)`
    background: #222222;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    height: 50%;
    padding: 3px;
    border-radius: 1px;
  `;

  const Body = styled(Box)`
    display: flex;
    flex-direction: column;
    background: #222222;
    height: 100%;
    color: #f1f1f1;
    padding: 5px;
    width: 100%;
  `;
  const IconContainer = styled(Box)`
    background: ${color};
    border-radius: 5px;
    padding: 3px 7px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const HeadingContainer = styled(Box)`
    color: #fff;
  `;

  const handleChange = (editor, data, value) => {
    changeValue(value);
  };
  return (
    <Container>
      <Header>
        <HeaderLeft>
          <IconContainer>{icon}</IconContainer>
          <HeadingContainer>{heading}</HeadingContainer>
        </HeaderLeft>
        <HeaderRight>
          <OpenInFullIcon />
        </HeaderRight>
      </Header>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="controlled-editor"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </Container>
  );
};

export default Editor;
