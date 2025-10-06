import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Line, Rect } from 'react-native-svg';
import styles from './styles';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const TradingChart = () => {
  const [chartWidth] = useState(SCREEN_WIDTH - 75);
  const chartHeight = 220;
  const volumeHeight = 30;

  const candleData = Array.from({ length: 20 }, (_) => {
    const isGreen = Math.random() > 0.5;
    const open = 6000 + Math.random() * 2000;
    const close = isGreen ? open + Math.random() * 500 : open - Math.random() * 500;
    const high = Math.max(open, close) + Math.random() * 200;
    const low = Math.min(open, close) - Math.random() * 200;

    return {
      open,
      close,
      high,
      low,
      volume: Math.random() * 100,
      isGreen,
    };
  });

  // Calculate min/max for scaling
  const allPrices = candleData.flatMap(d => [d.high, d.low]);
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);
  const priceRange = maxPrice - minPrice;
  const maxVolume = Math.max(...candleData.map(d => d.volume));

  // Calculate positions
  const candleWidth = (chartWidth - 40) / candleData.length;
  const wickWidth = 1;
  const bodyWidth = Math.max(candleWidth * 0.7, 4);

  return (
    <View style={[styles.container, { marginTop: 20 }]}>
      <View style={styles.header}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$7.3K</Text>
          <View style={styles.changeContainer}>
            <Text style={styles.changeText}>+$1.8k (+29.41%) 24h</Text>
          </View>
        </View>
      </View>

      <View style={styles.tabsContainer}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>1m</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>5m</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>1h</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Tools Display</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>PriceChart</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.tabText}>USDCXL</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.marketInfo}>
        <Text style={styles.marketText}>
          <Text style={styles.marketLabel}>DCX/SOL Market Cap (USD)</Text>
          <Text style={styles.marketValue}> S- Pump </Text>
          <Text style={styles.marketChange}>
            O: <Text style={styles.greenText}>7.1k</Text> H:{' '}
            <Text style={styles.redText}>7.8k</Text> L:{' '}
            <Text style={styles.greenText}>5.4k</Text> C:{' '}
            <Text style={styles.redText}>7.3k(+2.04%)</Text>
          </Text>
        </Text>
      </View>

      <View style={styles.chartContainer}>
        <View style={styles.leftToolbar}>
          <TouchableOpacity style={styles.toolButton}>
            <Text style={styles.toolIcon}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolButton}>
            <Text style={styles.toolIcon}>✕</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolButton}>
            <Text style={styles.toolIcon}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolButton}>
            <Text style={styles.toolIcon}>—</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolButton}>
            <Text style={styles.toolIcon}>↗</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolButton}>
            <Text style={styles.toolIcon}>✎</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolButton}>
            <Text style={styles.toolIcon}>T</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolButton}>
            <Text style={styles.toolIcon}>⊕</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolButton}>
            <Text style={styles.toolIcon}>○</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.chartArea}>
          <Svg
            height={chartHeight + volumeHeight}
            width={chartWidth}
            style={styles.chartSvg}>
            {[0, 1, 2, 3, 4].map(i => (
              <Line
                key={i}
                x1="0"
                y1={(chartHeight / 4) * i}
                x2={chartWidth}
                y2={(chartHeight / 4) * i}
                stroke="#2a2a2a"
                strokeWidth="0.5"
              />
            ))}

            <Line
              x1="0"
              y1={chartHeight / 2}
              x2={chartWidth}
              y2={chartHeight / 2}
              stroke="#FF5252"
              strokeWidth="1"
              strokeDasharray="5,5"
            />

            {/* Candlesticks */}
            {candleData.map((candle, index) => {
              const x = 20 + index * candleWidth + candleWidth / 2;
              const yHigh =
                chartHeight -
                ((candle.high - minPrice) / priceRange) * chartHeight;
              const yLow =
                chartHeight -
                ((candle.low - minPrice) / priceRange) * chartHeight;
              const yOpen =
                chartHeight -
                ((candle.open - minPrice) / priceRange) * chartHeight;
              const yClose =
                chartHeight -
                ((candle.close - minPrice) / priceRange) * chartHeight;
              const color = candle.isGreen ? '#4CAF50' : '#FF5252';

              return (
                <React.Fragment key={index}>
                  {/* Wick */}
                  <Line
                    x1={x}
                    y1={yHigh}
                    x2={x}
                    y2={yLow}
                    stroke={color}
                    strokeWidth={wickWidth}
                  />
                  <Rect
                    x={x - bodyWidth / 2}
                    y={Math.min(yOpen, yClose)}
                    width={bodyWidth}
                    height={Math.max(Math.abs(yOpen - yClose), 1)}
                    fill={color}
                  />
                  <Rect
                    x={x - bodyWidth / 2}
                    y={
                      chartHeight +
                      volumeHeight -
                      (candle.volume / maxVolume) * volumeHeight
                    }
                    width={bodyWidth}
                    height={(candle.volume / maxVolume) * volumeHeight}
                    fill="#333333"
                  />
                </React.Fragment>
              );
            })}
          </Svg>

          <View style={styles.priceLabels}>
            {[0, 1, 2, 3, 4, 5, 6].map(i => {
              const price = maxPrice - (i / 6) * priceRange;
              const displayPrice =
                price >= 1000
                  ? `${(price / 1000).toFixed(1)}K`
                  : price.toFixed(0);
              const isCurrent = i === 3;

              return isCurrent ? (
                <View key={i} style={styles.currentPriceLabel}>
                  <Text style={styles.currentPriceLabelText}>
                    {displayPrice}
                  </Text>
                </View>
              ) : (
                <Text key={i} style={styles.priceLabel}>
                  {displayPrice}
                </Text>
              );
            })}
          </View>
        </View>
      </View>

      <View style={styles.timeLabels}>
        {[0, 5, 10, 15, 20, 25].map(time => (
          <Text key={time} style={styles.timeLabel}>
            {time.toString().padStart(2, '0')}
          </Text>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>26/12 08:15 UTC 0 -3d</Text>
      </View>
    </View>
  );
};

export default TradingChart;
