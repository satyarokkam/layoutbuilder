import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      const displayContent = showContent ? 'content' : 'hidden'
      const displayRightNavbar = showRightNavbar
        ? 'right-navbar-container'
        : 'hidden'
      const displayLeftNavbar = showLeftNavbar
        ? 'left-navbar-container'
        : 'hidden'
      return (
        <div className="body-container">
          <div className={displayLeftNavbar}>
            <h1 className="left-navbar-title">Left Navbar Menu</h1>
            <ul className="list-items">
              <li>item1</li>
              <li>item1</li>
              <li>item1</li>
              <li>item1</li>
            </ul>
          </div>

          <div className={displayContent}>
            <h1 className="content-title">Content</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          <div className={displayRightNavbar}>
            <h1 className="right-navbar-title">Right Navbar Items</h1>
            <div className="box">
              <p>Ad 1</p>
            </div>
            <div className="box">
              <p>Ad 2</p>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
