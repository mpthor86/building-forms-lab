import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'
import Band from '../components/Band'

class BandsContainer extends Component {
  renderBands = () => this.props.bands.map((b, i) => <Band key={i} name={b.name} />)

  render() {
    console.log(this.props.bands)
    return(
      <div>
        <BandInput addBand={(name) => this.props.addBand(name)}/>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: data => dispatch({type: 'ADD_BAND', payload: data})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
