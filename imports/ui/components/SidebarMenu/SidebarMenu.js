import React, {PropTypes as T} from 'react'
import {Nav, INavLinkGroup} from 'office-ui-fabric-react/lib/Nav'

const SidebarMenu = ({groups, expanded, collapsed}) => (
  <div className='SidebarMenu'>
    <Nav groups={groups}
      expandedStateText={expanded}
      collapsedStateText={collapsed}
    />
  </div>
)

SidebarMenu.defaultProps = {
  groups: [{
    links: [{
      name: 'Item',
      url: '/crowdsale',
      links: [{
        name: 'New',
        url: '/crowdsale/new/1',
        icon: 'Add',
      }, {
        name: 'Manage',
        url: '/crowdsale/list',
        icon: 'Edit',
      }],
      isExpanded: true,
    },{
      name: 'Logout',
      url: '/logout',
      icon: 'Clear',}]
  }],
  expanded: 'expanded',
  collapsed: 'collapsed',
}

export default SidebarMenu