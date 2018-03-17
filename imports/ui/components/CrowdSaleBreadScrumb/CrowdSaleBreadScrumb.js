/* tslint:disable:no-unused-variable */
import React, { Component } from 'react'
/* tslint:enable:no-unused-variable */
import {
  Breadcrumb, IBreadcrumbItem
} from 'office-ui-fabric-react/lib/Breadcrumb';

export default class CrowdSaleContract extends Component {
  constructor(props){
    super(props);
  }

  handleSubmit(e){

  }

  render(){    
    return (
      <div>
       <Breadcrumb
          items={ [
            { text: 'Name' },
            { text: 'Token'},
            { text: 'Pricing Strategy', isCurrentItem: true }
          ] }
          ariaLabel={ 'Website breadcrumb' }
        />
        test
      </div>
    );
  }
}