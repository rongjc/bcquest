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
      name: 'Crowdsale',
      url: '/crowdsale',
      links: [{
        name: 'New',
        url: '/crowdsale/new',
        icon: 'Add',
      }, {
        name: 'Edit',
        url: '/crowdsale/edit',
        icon: 'Edit',
      }, {
        name: 'Complete',
        url: '/crowdsale/complete',
        icon: 'Accept',
      }],
      isExpanded: true,
    }]
  }],
  expanded: 'expanded',
  collapsed: 'collapsed',
}

export default SidebarMenu