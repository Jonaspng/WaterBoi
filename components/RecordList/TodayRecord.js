import { Avatar, Card, Text, List, IconButton } from 'react-native-paper';
import { View, ScrollView } from 'react-native'
import Timeline from 'react-native-timeline-flatlist'
import RecordListItem from './RecordListItem';


function TodayRecord(props) {

  function renderDetail(rowData, sectionID, rowID) {
    return (
      <RecordListItem rowData={rowData} />
    )
  }

  return (
    <View>
      <Text className="mx-2 py-2 text-2xl font-bold">Today's Records</Text>
      <Card mode={"elevated"} className="mx-2" style={{ padding: 10 }}>

        {props.data.length == 0 ?
          <Text variant="titleSmall" style={{ padding: 10 }}> Start drinking water!</Text> :
          <ScrollView>
            <Timeline isUsingFlatlist={false} data={props.data} renderDetail={renderDetail} />
          </ScrollView>
        }
      </Card>
    </View>
  )

}

export default TodayRecord;