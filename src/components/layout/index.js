import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Footer from './footer';
import OneLove from '../one-love';
import store from '../../store';
import actions from './actions';
import { history, postLogoutURL } from '../../constants';
import './index.scss';
import Settings from './settings';


const mapStateToProps = state => ({
  status: state.settingsShow.status,
});


const Layout = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    status: React.PropTypes.string,
  },

  handleOnClick() {
    store.dispatch(actions.hide());
  },

  handleLogout(event) {
    event.preventDefault();
    window.localStorage.removeItem('OneLoveAuthToken');
    store.dispatch(actions.hide());
    history.push(postLogoutURL);
  },

  render() {
    const children = this.props.children || <OneLove />;
    return (
      <div>
        <Settings />
        <Header />
        <div className="content">
          {children}
        </div>
        <center><Footer /></center>
      </div>
    );
  },
});


export default connect(mapStateToProps, actions)(Layout);
