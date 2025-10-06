import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';
import { colors } from '../../utils/colors';

const HolderDetailBox = () => {
  return (
    <View style={styles.statsContainer}>
      <View style={styles.statRow}>
        <View style={styles.statItem}>
          <Text style={[styles.statValue, styles.holderText]}> 81 </Text>
          <View style={localStyles.rowWithMargin}>
            <Image source={require('./../../assets/images/person.png')} />
            <Text style={[styles.statLabel, localStyles.font14]}>
              {' '}
              Holders{' '}
            </Text>
          </View>
        </View>
        <View style={styles.statSeparator} />
        <View style={styles.statItem}>
          <Text style={[styles.statValue, styles.holderCreatorText]}>
            {' '}
            0.00%{' '}
          </Text>
          <Text style={[styles.statLabel, styles.holdersValue]}> Creator </Text>
        </View>
      </View>
      <View style={styles.statRow}>
        <View style={styles.statItem}>
          <Text style={[styles.statValue, styles.holderText]}> 19 </Text>
          <Text style={[styles.statLabel, styles.holdersValue]}> Sniper </Text>
        </View>
        <View style={styles.statSeparator} />
        <View style={styles.statItem}>
          <Text style={[styles.statValue, styles.holderTopText]}> 27.57% </Text>
          <Text style={[styles.statLabel, styles.holdersValue]}> Top 10 </Text>
        </View>
      </View>
    </View>
  );
};

type ButtonTxtProps = {
  title: string;
  style?: object;
  textStyle?: object;
  didClickTab?: (title: string) => void;
};
const ButtonTxt: React.FC<ButtonTxtProps> = ({
  title,
  style,
  textStyle,
  didClickTab,
}) => (
  <TouchableOpacity
    style={[localStyles.buttonTxtContainer, style]}
    onPress={() => didClickTab && didClickTab(title)}
  >
    <Text style={[localStyles.buttonTxt, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const SegmentButton = () => {
  const [selectedTab, setSelectedTab] = React.useState('All');
  const didClickTab = (title: string) => {
    console.log('title', title);
    setSelectedTab(title);
  }
  return (
    <View style={localStyles.segmentButtonRow}>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <ButtonTxt
          title="All"
          didClickTab={didClickTab}
          style={
            selectedTab === 'All' ? localStyles.followingButton : undefined
          }
        />
        <ButtonTxt
          title="Following"
          didClickTab={didClickTab}
          style={
            selectedTab === 'Following'
              ? localStyles.followingButton
              : undefined
          }
        />
      </View>
      <ButtonTxt
        title="Bubblemaps"
        didClickTab={didClickTab}
        style={
          selectedTab === 'Bubblemaps' ? localStyles.followingButton : undefined
        }
      />
    </View>
  );
};

const Holders = () => {
  return (
    <View style={{ flex: 1 }}>
      <HolderDetailBox />
      <SegmentButton />

      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          paddingVertical: 15,
          backgroundColor: '#1C1C1C',
          borderRadius: 10,
          alignItems: 'center',
        }}
      >
        <Image
          source={require('./../../assets/images/syringe.png')}
          style={{ marginLeft: 10, height: 35, width: 35 }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: 'white' }}>Bonding Curve</Text>
        </View>
        <View style={{ marginLeft: '42%', alignItems: 'flex-end' }}>
          <Text style={{ color: '#00E98C' }}>+$24,999.3</Text>
          <Text style={{ color: '#949494', fontSize: 10 }}>99.46%</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          paddingVertical: 15,
          backgroundColor: '#1C1C1C',
          borderRadius: 10,
          alignItems: 'center',
        }}
      >
        <Image
          source={require('./../../assets/images/icon.png')}
          style={{ marginLeft: 10 }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: 'white' }}>XYZDH</Text>
          <Text style={{ color: '#949494', fontSize: 10 }}>1s Ago</Text>
        </View>
        <View style={{ marginLeft: '50%', alignItems: 'flex-end' }}>
          <Text style={{ color: '#00E98C' }}>+$24,999.3</Text>
          <Text style={{ color: '#949494', fontSize: 10 }}>99.46%</Text>
        </View>
      </View>
    </View>
  );
};

export default Holders;
// export default Holders;

const localStyles = StyleSheet.create({
  rowWithMargin: {
    flexDirection: 'row',
    marginTop: 10,
  },
  font14: {
    fontSize: 14,
  },
  buttonTxtContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.darkGray,
  },
  buttonTxt: {
    color: 'white',
  },
  segmentButtonRow: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  followingButton: {
    backgroundColor: colors.accent,
    borderColor: colors.accentBorder,
    borderWidth:1
  },

});
