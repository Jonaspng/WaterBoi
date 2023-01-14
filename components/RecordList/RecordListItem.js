import { Avatar, Card, Text, List, IconButton} from 'react-native-paper';
import { View } from 'react-native'

function RecordListItem(props) {
  return (
    <View className="flex-row justify-between">
        <View>
          <Text>{props.rowData.cups} Cups</Text>
          <Text>{props.rowData.cups * 300} ml</Text>
        </View>
        <View>
          <IconButton
            icon="pencil"
            size={20}
            onPress={() => console.log('Pressed')}
          />
        </View>
        
      </View>
  );
}

export default RecordListItem;