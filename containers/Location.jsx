import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import { cyan100 } from 'material-ui/styles/colors';
import LocationSentiment from '../components/LocationSentiment';

const style = { padding: '35px' };

function Location(props) {
  return (
    <Paper zDepth={1} style={style}>
     <LocationSentiment
        // passing latitue and longitude for potential feature for displaying location on the final rendered graph
        latitude={props.latitude}
        longitude={props.longitude}
        primaryMovie={props.primaryMovie}
        primaryEmotion={props.primaryMovie.emotion}
        secondaryMovie={props.secondaryMovie}
        secondaryEmotion={props.secondaryMovie.emotion}
      />
    </Paper>
  );
}

Location.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  primaryMovie: PropTypes.shape({
    emotion: PropTypes.shape({})
  }),
  secondaryMovie: PropTypes.shape({
    emotion: PropTypes.shape({})
  })
};

function mapSentimentToProps({ latitude, longitude, primaryMovie, primaryEmotion, secondaryMovie, secondaryEmotion }) {
  return { latitude, longitude, primaryMovie, primaryEmotion, secondaryMovie, secondaryEmotion };
}

export default connect(mapSentimentToProps)(Location);