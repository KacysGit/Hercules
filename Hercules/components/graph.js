import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const GraphWithButton = ({ data, labels, buttonText, onButtonPress }) => {
    return (
        <TouchableOpacity onPress={onButtonPress} style={{ alignItems: 'center' }}>
            <View>
                <LineChart
                    data={{
                        labels: labels,
                        datasets: [{ data: data }],
                    }}
                    width={300}
                    height={200}
                    chartConfig={{
                        backgroundGradientFrom: '#fff',
                        backgroundGradientTo: '#fff',
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    }}
                />
                <Text style={{ textAlign: 'center' }}>{buttonText}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default GraphWithButton;
