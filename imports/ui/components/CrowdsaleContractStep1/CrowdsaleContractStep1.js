import React, { Component } from 'react'
import { checkWeb3 } from '../../../utils/blockchainHelpers'
import { Link } from 'react-router-dom';
import { setFlatFileContentToState, toast } from '../../../utils/utils';
import { NAVIGATION_STEPS, CONTRACT_TYPES, TOAST } from '../../../utils/constants';
import { inject, observer } from 'mobx-react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

const DOWNLOAD_STATUS = {
  PENDING: 'pending',
  SUCCESS: 'success',
  FAILURE: 'failure'
}

@inject('contractStore', 'web3Store') @observer
export default class CrowdsaleContractStep1 extends Component {
      
  constructor(props) {    
    super(props)    

    this.state = {
      contractsDownloaded: DOWNLOAD_STATUS.PENDING,
      contractType: this.props.contractStore.contractType

    }
    this.addContractsToState = this.addContractsToState.bind(this);
    this._next = this._next.bind(this);
  }

  getStandardCrowdsaleAssets() {
    console.log(contractStore);
    return Promise.all([
      this.getCrowdsaleAsset("CrowdsaleStandard", "crowdsale"),
      this.getCrowdsaleAsset("CrowdsaleStandardToken", "token")
    ])
  }

  getWhiteListWithCapCrowdsaleAssets () {
    return Promise.all([
      this.getCrowdsaleAsset("SafeMathLibExt", "safeMathLib"),
      this.getCrowdsaleAsset("CrowdsaleWhiteListWithCap", "crowdsale"),
      this.getCrowdsaleAsset("CrowdsaleWhiteListWithCapToken", "token"),
      this.getCrowdsaleAsset("CrowdsaleWhiteListWithCapPricingStrategy", "pricingStrategy"),
      this.getCrowdsaleAsset("CrowdsaleWhiteListWithCapPricingStrategy", "pricingStrategy"),
      this.getCrowdsaleAsset("FinalizeAgent", "finalizeAgent"),
      this.getCrowdsaleAsset("NullFinalizeAgent", "nullFinalizeAgent"),
      this.getCrowdsaleAsset("Registry", "registry")
    ])
  }

  getCrowdsaleAsset(contractName, stateProp) {
    const src = setFlatFileContentToState(`/contracts/${contractName}_flat.sol`)
    const bin = setFlatFileContentToState(`/contracts/${contractName}_flat.bin`)
    const abi = setFlatFileContentToState(`/contracts/${contractName}_flat.abi`)

    return Promise.all([src, bin, abi])
      .then(result => this.addContractsToState(...result, stateProp))
  }
  addContractsToState(src, bin, abi, contract) {
    this.props.contractStore.setContract(contract, {
      src,
      bin,
      abi: JSON.parse(abi),
      addr: (contract==="crowdsale" || contract==="pricingStrategy" || contract==="finalizeAgent") ? [] : "",
      abiConstructor: (contract==="crowdsale" || contract==="pricingStrategy" || contract==="finalizeAgent") ? [] : ""
    });    
  }

  contractTypeSelected(e) {
    this.props.contractStore.setContractType(e.currentTarget.id);
    this.getWhiteListWithCapCrowdsaleAssets();
  }
  componentDidMount() {
    //console.log(this.props);

    
    checkWeb3(this.props.web3Store.web3);

    let downloadContracts = null

    switch (this.props.contractStore.contractType) {
      case CONTRACT_TYPES.standard:
        downloadContracts = this.getStandardCrowdsaleAssets();
        break;
      case CONTRACT_TYPES.whitelistwithcap:
        downloadContracts = this.getWhiteListWithCapCrowdsaleAssets();
        break
      default:
        break
    }
    
    downloadContracts = this.getWhiteListWithCapCrowdsaleAssets();    
    downloadContracts
      .then(
        () => {
          this.setState({
            contractsDownloaded: DOWNLOAD_STATUS.SUCCESS
          })
        },
        (e) => {
          console.error('Error downloading contracts', e)          
          this.setState({
            contractsDownloaded: DOWNLOAD_STATUS.FAILURE
          })
        }
    )
  }
  _next(){
    this.props.contractStore.name = 
    console.log(this.props.contractStore);
    //this.props.history.push('/2');
  }
  
  @autobind
  _onChange(ev: React.FormEvent<HTMLInputElement>, option: any) {
    console.dir(option);
  }

  render() {
    const options = {

    }
    return (
       <div>    
          <div>   
            <TextField
            label='Name '
            errorMessage=''/>    
          </div>
          <div>   
            <ChoiceGroup
              defaultSelectedKey= {this.props.contractStore.contractType}
              options={ [
                {
                  key: CONTRACT_TYPES.whitelistwithcap,
                  text: CONTRACT_TYPES.whitelistwithcap
                },
                {
                  key: "Test",
                  text: "TEST, don't select"
                }
              ] }
              onChange={ this._onChange }
              label='Pick your crowdsale contract'
              required={ true }
            />    
          </div>
          <div>
            <DefaultButton              
              primary={ true }
              disabled = {this.state.contractsDownloaded != DOWNLOAD_STATUS.SUCCESS}
              text='Next'
              onClick={ this._next }
            />
          </div>
          <div>
            
          </div>
      </div>
    )
  }
}
