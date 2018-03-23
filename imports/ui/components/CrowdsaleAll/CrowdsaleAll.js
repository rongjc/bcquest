import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Loader } from '../../Common/Loader'
import { loadRegistryAddresses } from '../../../utils/blockchainHelpers'
import CrowdsalesList from '../../Common/CrowdsalesList'
import { inject, observer } from 'mobx-react'

@inject('crowdsaleStore')
export default class CrowdsaleAll extends Component {

  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      loading: true
    }
  }

  chooseContract = () => {
    this.setState({
      loading: true
    })

    loadRegistryAddresses()
      .then(() => {
        this.setState({
          loading: false,
          showModal: true
        })        
        console.log(this.props.crowdsaleStore)
      }, (e) => {
        console.error('There was a problem loading the crowdsale addresses from the registry', e)
        this.setState({
          loading: false
        })
      })
  }


  componentDidMount () {
    this.chooseContract()
  }



  onClick = crowdsaleAddress => {
    this.props.history.push('/crowdsale/manage/' + crowdsaleAddress)
  }

  hideModal = () => {
    this.setState({ showModal: false })
  }

  render () {
    return (
      <div>
      <CrowdsalesList onClick={this.onClick}/>
      <Loader show={this.state.loading}></Loader>
      </div>

    );
  }
}
