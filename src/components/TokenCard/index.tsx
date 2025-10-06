import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../utils/colors';

export type Token = {
  id: string;
  name: string;
  age: string; // e.g. "3s"
  vol: string; // e.g. "$40.67"
  mc: string; // e.g. "$19.8K"
  tx: number; // e.g. 13
  tags: string[]; // e.g. ["A1","6%","15%"]
  avatar?: any; // require(...) or {uri}
};

const IconRender: React.FC<{ iconName: string }> = ({ iconName }) => (
  <Ionicons name={iconName} size={12} color={colors.textSecondary} />
);

const TokenCard: React.FC<{ token: Token }> = ({ token }) => {
  return (
    <View style={styles.card}>
      <View style={styles.avatarView}>
        <Image
          source={require('../../assets/images/meme1.png')}
          style={styles.avatar}
        />
      </View>

      <View style={{ flex: 1 }}>
        <View style={styles.rowTop}>
          <View style={{ gap: 3 }}>
            <Text numberOfLines={1} style={styles.title}>
              {token.name}
            </Text>
            <View style={styles.metaRow}>
              <Text style={styles.age}>{token.age}</Text>
              <IconRender iconName="chatbubble-ellipses-outline" />
              <IconRender iconName="star-outline" />
              <IconRender iconName="paper-plane-outline" />
            </View>
            <Text style={styles.dimText}>2fuj…QH5h</Text>

            <View style={styles.tagRow}>
              {token.tags.map(t => (
                <View key={t} style={styles.tag}>
                  <Text style={styles.tagText}>{t}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.bottomRow}>
            <Text style={styles.vol}>Vol {token.vol}</Text>
            <Text style={styles.mc}>MC {token.mc}</Text>
            <View style={styles.progressWrap}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${Math.min(token.tx * 6, 100)}%` },
                ]}
              />
            </View>
            <Text style={styles.tx}>TX {token.tx}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.outline,
    padding: 10,
    marginHorizontal: 18,
    marginBottom: 8,
    flexDirection: 'row',
    gap: 12,
  },
  avatarView: {
    width: 55,
    height: 55,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },
  rowTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.textPrimary,
    fontSize: 12,
    fontWeight: '600',
    flex: 1,
  },
  vol: {
    color: colors.textPrimary,
    fontWeight: '600',
    fontSize: 12,
    textAlign: 'right',

  },
  metaRow: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  age: {
    color: colors.accent,
    fontSize: 10,
    fontWeight: '600',
  },
  dimText: {
    color: colors.textSecondary,
    fontSize: 10,
  },
  tagRow: {
    flexDirection: 'row',
    gap: 3,
    marginTop: 6,
  },
  tag: {
    borderWidth: 1,
    borderColor: colors.outline,
    backgroundColor: colors.cardAlt,
    borderRadius: 10,
    paddingHorizontal: 6.5,
    paddingVertical: 3.5,
  },
  tagText: {
    color: colors.textSecondary,
    fontSize: 7,
  },
  bottomRow: {
    width: '30%',
    gap: 4,
  },
  mc: {
    color: colors.textPrimary,
    fontWeight: '600',
    fontSize: 12,
    textAlign: 'right',
  },
  progressWrap: {
    height: 6,
    backgroundColor: colors.accentDim,
    borderRadius: 999,
    overflow: 'hidden',
    alignSelf:'flex-end',
    width:'60%',

  },
  progressFill: {
    height: 6,
    backgroundColor: colors.success,
    
  },
  tx: {
    color: colors.textPrimary,
    fontWeight: '600',
    fontSize: 12,
    textAlign: 'right',
  },
});

export default TokenCard;
