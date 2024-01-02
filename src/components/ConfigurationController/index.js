import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value

      const onShowContent = event => {
        onToggleShowContent(event.target.checked)
      }

      const onShowLeftBar = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const onShowRightBar = event => {
        onToggleShowRightNavbar(event.target.checked)
      }

      return (
        <div className="configuration-controller-main-container">
          <div className="configuration-controller-container">
            <h1 className="title">Layout</h1>

            <div className="label-container">
              <input
                type="checkbox"
                id="content"
                onChange={onShowContent}
                checked={showContent}
              />
              <label htmlFor="content" className="labelContent">
                Content
              </label>
            </div>

            <div className="label-container">
              <input
                type="checkbox"
                id="leftNavbar"
                onChange={onShowLeftBar}
                checked={showLeftNavbar}
              />
              <label htmlFor="leftNavbar" className="labelContent">
                Left Navbar
              </label>
            </div>

            <div className="label-container">
              <input
                type="checkbox"
                id="rightNavbar"
                onChange={onShowRightBar}
                checked={showRightNavbar}
              />
              <label htmlFor="rightNavbar" className="labelContent">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
