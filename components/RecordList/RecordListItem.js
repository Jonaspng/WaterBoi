import { Avatar, Card, Text, List, IconButton} from 'react-native-paper';
import { View } from 'react-native'

function RecordListItem(props) {
  return (
    <View style={{flex:1, flexDirection:"row" }}>
        <View>
          <Text>{props.rowData.title}</Text>
          <Text>{props.rowData.description}</Text>
        </View>
        <IconButton
          icon="pencil"
          size={20}
          onPress={() => console.log('Pressed')}
          style={{marginLeft: "auto"}}
        />
      </View>
  );
}

export default RecordListItem;