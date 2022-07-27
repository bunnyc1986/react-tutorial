import {
  MarkdownSlide,
} from "spectacle";

function WhatsWebDev() {
  return (
    <MarkdownSlide componentProps={{fontSize: '22pt'}}>
      {`
      # Getting Started

      - Development environment
        - Node.js ([nvm](https://github.com/nvm-sh/nvm))
        - Package Manager, e.g. [Yarn](https://yarnpkg.com/getting-started/install)
        - IDE, e.g. [vscode](https://code.visualstudio.com/)
        - Web Browser, e.g. [Chrome](https://www.google.com/chrome/)
      - Setup a project
        - \`yarn create react-app my-app --template typescript\`
        - \`cd my-app\`
        - \`yarn start\`
      `}
    </MarkdownSlide>
  );
}

export default WhatsWebDev;
