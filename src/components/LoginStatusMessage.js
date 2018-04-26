import React, { Component }from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class LoginStatusMessage extends Component{
  render() {
    return(
      <View>
      <Text style={styles.welcome}>
        {(this.props.isLoggedIn) ? 'You are "logged in" right now' : 'Please log in'}
      </Text>
    </View>
    )
  }
}

LoginStatusMessage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(LoginStatusMessage);
