import { Box, styled } from "@mui/material";
import Editor from "../components/Editor";
import { useData } from "../hooks/useData";

const Container = styled(Box)`
  display: flex;
  height: 50vh;
  column-gap: 5px;
  background: #060606;
  padding: 0 10px;
  @media only screen and (max-width: 668px) {
    flex-direction: column;
  }
`;
const CodeEditor = () => {
  const { html, setHtml, css, setCss, js, setJs } = useData();
  return (
    <Container>
      <Editor
        language="xml"
        heading="HTML"
        icon="/"
        color="#FF3C41"
        value={html}
        ChangeValue={setHtml}
      />
      <Editor
        language="css"
        heading="CSS"
        icon="*"
        color="#0EBEFF"
        value={css}
        ChangeValue={setCss}
      />
      <Editor
        language="javascript"
        heading="JS"
        icon="()"
        color="#FCD000"
        value={js}
        ChangeValue={setJs}
      />
    </Container>
  );
};

export default CodeEditor;
