/* tslint:disable:no-unused-variable */
import React, { Component } from 'react'
/* tslint:enable:no-unused-variable */
import {
  Breadcrumb, IBreadcrumbItem
} from 'office-ui-fabric-react/lib/Breadcrumb';
import CrowdSaleBreadScrumb from '../components/CrowdSaleBreadScrumb/CrowdSaleBreadScrumb.js'

export default class CrowdSaleContract extends Component {
  constructor(props){
    super(props);
  }

  handleSubmit(e){

  }

  render(){    
    return (
      <div>
       <CrowdSaleBreadScrumb />
       <div>test</div>        
      </div>
    );
  }
}