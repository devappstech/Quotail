/**
 * Sample React Native App
 * https://github.com/facebook/react-

 @flow
 */

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  NavigatorIOS,
  Image,
  AlertIOS,
  Navigator,
} = React;


var global_styles = require('./Styles');
//var LocalStorage = require('./stores/LocalStorage');

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var Login = require('./Login');
var Home = require('./Home');
var Filters = require('./FilterPage');
var MessageView = require('./MessageView');
var Watchlist = require('./Watchlist');
var Menu = require('./Menu');
var Loading = require ('./Loading');
var SignUp = require('./SignUp');
var ForgotPassword = require('./ForgotPassword');
var Launch = require('./Launch');

var AuthService = require('./services/AuthService');

var settings_uri = 'http://cdn.flaticon.com/png/256/70443.png';
var msg_uri = 'http://cdn.flaticon.com/png/256/98.png';
//var RNRouter = require('react-native-router');
var {Router, Route, Container, Actions, Animations, Schema} = require('react-native-router-flux');

//var LoginStore = require('./stores/LoginStore');

var AwesomeProject = React.createClass({
  /* defining routes that either lead to all below nav bar
     OR routes that are not children of the nav bar */
  render(){
    return(
      <Router>
        <Route name="launch" component={Launch} initial={true}/>
        <Route name="home" component={Home}/>
        <Route name="login" component={Login}/>
        <Route name="forgot" component={ForgotPassword}/>
        <Route name="signup" component={SignUp}/>
      </Router>
    );
  }

});

var styles = StyleSheet.create({
  app: { width, height },
})


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);