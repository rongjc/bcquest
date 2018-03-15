import React, {PropTypes as T} from 'react'
import {SearchBox} from 'office-ui-fabric-react/lib/SearchBox'
import './NavBar.css'

const NavBar = ({onChange, onSearch}) => (
  <div className="NavBar ms-bgColor-themePrimary">
    <div className="logo ms-font-xl">
      <strong>BCQuest</strong>
    </div>
  </div>
)

export default NavBar