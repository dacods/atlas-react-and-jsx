import Header from "./components/Header";
import Section from "./components/Section";

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
    </div>
  )
}

export default App;
