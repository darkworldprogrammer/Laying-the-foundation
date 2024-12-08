import React from 'react';
import ReactDOM from 'react-dom/client';

// const child = React.createElement('h1', {}, 'Hello World!');

// // // // //  JSX
//  /// // this html code is transpiled by parcel and their one of dependency called babel package.
// // // // babel is a JS compiler
const navMenu = (
  <div id="navbar">
    <h2>Himanshu</h2>
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Contact</a>
    <img
      width="24"
      height="24"
      src="https://img.icons8.com/android/24/forward-arrow.png"
      alt="forward-arrow"
    />
  </div>
);
const nav = ReactDOM.createRoot(document.querySelector('#nav'));
nav.render(navMenu);

// // // // React Element
// const parent = ReactDOM.createRoot(document.querySelector('#parent'));
// const jsxHeading = (
//   <div id="child">
//     <h1 id="heading1">Hello From JSX</h1>
//     <h1 id="heading2">Hello From JSX</h1>
//     <h1 id="heading3">Hello From JSX</h1>
//   </div>
// );
// parent.render(jsxHeading);

// // // React functional components
// const Headings = () => (
//   <div id="child">
//     <h1 id="heading1">Hello From React</h1>
//     <h1 id="heading2">Hello From React</h1>
//     <h1 id="heading3">Hello From React</h1>
//   </div>
// );
// const name = 'Himanshu';
// const parent2 = ReactDOM.createRoot(document.querySelector('#parent2'));
// const Heading4 = () => {
//   return (
//     <div>
//       {/* Rendering upper Headings function inside our div */}
//       <Headings />
//       {/* name variable from JS */}
//       {name}
//       <h2>Hello from React functional component</h2>
//     </div>
//   );
// };
// parent2.render(Heading4());
//  // // (OR)
// parent2.render(<Heading4 />);

// // // // putting react element inside react component
// const parent3 = ReactDOM.createRoot(document.querySelector('#parent3'));
// const name = <h1>Himanshu Tiwari</h1>;
// const head4 = (
//   <h4>
//     {name}
//     Hello from React element
//   </h4>
// );
// const Component = () => {
//   return (
//     <div>
//       {head4}
//       <h2>I am component</h2>
//     </div>
//   );
// };
// parent3.render(<Component />);

// // // // render element inside element
const parent4 = ReactDOM.createRoot(document.querySelector('#parent4'));
const child1 = (
  <div>
    <h2>Hello,</h2>
  </div>
);
const child2 = (
  <div>
    {child1}
    <h2>Himanshu</h2>
  </div>
);
const Child3 = () => <h2>Tiwari</h2>;
const child4 = (
  <div>
    {child2}
    {Child3()}
    {'hyy'}
    {<h2>Hello h2</h2>}
    {/* <Child3/> */}
    <h2>Welcome Back</h2>
  </div>
);
parent4.render(child4);
