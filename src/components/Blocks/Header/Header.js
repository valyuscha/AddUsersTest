import React, {Component} from 'react'
import {connect} from 'react-redux'
import {menuClose, menuOpen} from '../../../redux/actions/headerMenuActions'

import HeaderMenu from './HeaderMenu'
import HeaderBanner from './HeaderBanner'
import SideDrawer from './SideDrawer/SideDrower'
import Backdrop from './SideDrawer/Backdrop'

class Header extends Component {
  drawerToggleClickHandler = () => {
    this.props.menuOpen()
  }

  backdropClickHandler = () => {
    this.props.menuClose()
  }

  render() {
    let backdrop

    if (this.props.menuCondition) {
      backdrop = <Backdrop onClick={this.backdropClickHandler}/>
    }

    return (
      <div>
        <HeaderMenu drawerToggleClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.props.menuCondition}/>
        {backdrop}
        <HeaderBanner/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    menuCondition: state.headerMenu.menuOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    menuOpen: () => dispatch(menuOpen()),
    menuClose: () => dispatch(menuClose())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)