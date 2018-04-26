import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const LoginScreen = ({ isLoggedIn, dispatch }) => {
    if (!isLoggedIn) {
      return <Text>Please log in</Text>;
    }
    return (
      <View>
        <Text style={styles.welcome}>
          {'You are "logged in" right now'}
        </Text>
        <Button
          title='Log Out'
        onPress={logout}
        />
      </View>
    );
  };
  
  LoginScreen.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn,
  });
  
  const mapDispatchToProps = dispatch => ({
    logout: () => dispatch({ type: 'Logout' }),
  });
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
