import React, { Component } from 'react'
import { checkWeb3 } from '../../../utils/blockchainHelpers'
import { Link } from 'react-router-dom';
import { setFlatFileContentToState, toast } from '../../../utils/utils';
import { NAVIGATION_STEPS, CONTRACT_TYPES, TOAST } from '../../../utils/constants';
import { inject, observer } from 'mobx-react';
const { CROWDSALE_CONTRACT } = NAVIGATION_STEPS;

const DOWNLOAD_STATUS = {
  PENDING: 'pending',
  SUCCESS: 'success',
  FAILURE: 'failure'
}

const ContinueButton = ({downloadStatus}) => {
  const success = downloadStatus === DOWNLOAD_STATUS.SUCCESS

  if (success) {
    return (
      <Link to="/2">
        <span className="button button_fill">Continue</span>
      </Link>
    );
  } else {
    return (
      <Link to="/2" onClick={e => e.preventDefault()}>
        <span className="button button_disabled button_fill">Continue</span>
      </Link>
    );
  }
};

@inject('contractStore', 'web3Store') @observer
export default class CrowdsaleContractStep1 extends Component {

  constructor() {
    super()

    this.state = {
      contractsDownloaded: DOWNLOAD_STATUS.PENDING
    }
  }

  getStandardCrowdsaleAssets() {
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
    const src = setFlatFileContentToState(`./contracts/${contractName}_flat.sol`)
    const bin = setFlatFileContentToState(`./contracts/${contractName}_flat.bin`)
    const abi = setFlatFileContentToState(`./contracts/${contractName}_flat.abi`)

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

    downloadContracts
      .then(
        () => {
          this.setState({
            contractsDownloaded: DOWNLOAD_STATUS.SUCCESS
          })
        },
        (e) => {
          console.error('Error downloading contracts', e)
          toast.showToaster({
            type: TOAST.TYPE.ERROR,
            message: 'The contracts could not be downloaded.Please try to refresh the page. If the problem persists, try again later.'
          })
          this.setState({
            contractsDownloaded: DOWNLOAD_STATUS.FAILURE
          })
        }
      )
  }

  render() {
    return (
       <section className="steps steps_crowdsale-contract">       
        <div className="steps-content container">
          <div className="radios">
            <label className="radio">
              <input
                type="radio"
                name="contract-type"
                id={CONTRACT_TYPES.whitelistwithcap}
                onChange={(e) => this.contractTypeSelected(e)}
              />
              <span className="title">Whitelist with Cap</span>
              <span className="description">
                Modern crowdsale strategy with multiple tiers, whitelists, and limits. Recommended for every crowdsale.
              </span>
            </label>
          </div>
        </div>        
      </section>
    )
  }
}
