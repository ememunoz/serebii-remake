import React from 'react';
import PropTypes from 'prop-types';
import styles from './Update.module.css';
import { Heading3 } from '../../../../Components/Typography/Headings';
import Subheading from '../../../../Components/Typography/Subheading';

const Update = props => (
  <div className={styles.update} style={{ backgroundImage: `url(${props.src})` }}>
    <div className={styles.updateText}>
      <Heading3>{props.title}</Heading3>
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