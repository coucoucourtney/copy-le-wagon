import React from 'react';
import logo from '../../assets/images/logo.svg';
import '../../assets/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Courtney Wagner',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'this is the title of the home page',
        subtitle: 'this is a subtitle',
        subtext: 'this is subtext for the home page ex check out my projects'
      },
      about: {
        title: 'About me'
      },
      contact: {
        title: 'Hit me up!'
      }
    };
  }

  render() {
    return (
      <div>
        <h1>Hey this is my react site!</h1>
      </div>
    );
  }
}
// const App = () => {
//   // const imageUrl = window.innerWidth >= 650 ? "desktopImage" : "mobileImage";
//   return(
//     <div>
//       <div className="navbar navbar-expand-sm navbar-light navbar-index">
//         <img src={logo} className="logo" alt="Courtney's logo" />
//       </div>
//       <div className="mobileImage banner">
//         <div className="container">
//           <p>Hi! I'm</p>
//           <h1>Courtney Wagner</h1>
//           <a className="btn btn-ghost" href="#">About</a>
//           <a className="btn btn-ghost" href="#">Code</a>
//         </div>
//       </div>
//       <ul>
//         <li>Linked in</li>
//         <li>Github</li>
//         <li>@</li>
//       </ul>
//     </div>
//   );
// }

export default App;
