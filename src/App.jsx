import Header from "./components/Header";
import Section from "./components/Section";
import HelpfulResource from "./components/HelpfulResource";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Section title="What is react?">
        React is a popular JavaScript library for building user interfaces,
        particularly single-page applications where a dynamic and
        responsive user experience is essential.
        React uses JSX, a syntax extension that allows HTML-like code to coexist with JavaScript. 
        JSX makes it easier to write and understand the structure of the UI components.
        React maintains a virtual representation of the DOM, 
        which allows it to efficiently update and render only the components that have changed, 
        improving performance.
      </Section>
      <Section title="Benefits of react">
        <ul>
          <li>Virtual DOM</li>
          <li>Reusable Components</li>
          <li>Hooks for state & side effects</li>
          <li>Strong TypeScript support</li>
          <li>React Native & Expo</li>
        </ul>
      </Section>
      <Section title="Helpful resources">
        <HelpfulResource label={'w3schools'} link={'https://www.w3schools.com/react'}></HelpfulResource>
        <HelpfulResource label={'React Documentation'} link={'https://react.dev/'}></HelpfulResource>
        <HelpfulResource label={'Getting started with React'} link={'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started'}></HelpfulResource>
      </Section>
    </div>
  )
}

export default App;
