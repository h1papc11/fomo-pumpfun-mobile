import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import ChipTabs from '../../components/ChipTabs';
import { Icons } from '../../utils/icons';
import styles from './style';

const TABS = ['All', 'Following', 'You'];

const CardView = () => {
  return (
    <View style={styles.cardActivity}>
      <View style={styles.imageBox}>
        <Image source={Icons.placeholder} style={styles.imageMargin} />
        <View style={styles.leftSection}>
          <Text style={styles.whiteText}>XYZDH</Text>
          <Text style={styles.graySmallText}>1s Ago</Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.greenText}>+$24,999.3</Text>
        <Text style={styles.graySmallText}>99.46%</Text>
      </View>
    </View>
  );
};

const Activity = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <View>
      <ChipTabs 
      tabs={TABS} 
      activeIndex={tabIndex} 
      onChange={setTabIndex} 
      customStyle={styles.activityTabHeader}
      activityTabButton={styles.activityTabButton}/>
      <View style={styles.activityBox}>
        <CardView />
        <CardView />
        <CardView />
        <CardView />
      </View>
    </View>
  );
};

export default Activity;
