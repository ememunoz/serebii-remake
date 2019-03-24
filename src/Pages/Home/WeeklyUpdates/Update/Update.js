import React from 'react';
import PropTypes from 'prop-types';
import styles from './Update.module.css';
import Heading from '../../../../shared/Components/Typography/Heading/Heading';
import Subheading from '../../../../shared/Components/Typography/Subheading/Subheading';

const Update = props => (
  <div className={styles.update} style={{ backgroundImage: `url(${props.src})` }}>
    <div className={styles.updateText}>
      <Heading type='h3'>{props.title}</Heading>
      <Subheading className={styles.updateTextSub}>{props.category}</Subheading>
    </div>
  </div>
)

Update.propTypes = {
  category: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
export default Update;