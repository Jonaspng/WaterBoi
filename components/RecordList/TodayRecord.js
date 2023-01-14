import { Avatar, Card, Text, List, IconButton} from 'react-native-paper';
import { View, ScrollView } from 'react-native'
import Timeline from 'react-native-timeline-flatlist'
import RecordListItem from './RecordListItem';


function TodayRecord(props) {

  function renderDetail(rowData, sectionID, rowID) {
    return (
      <RecordListItem rowData = {rowData}/>      
    )
  }

  return (
  
    <Card mode={"elevated"} style={{padding: 10, margin: 6}}>
      <Card.Title title="Today Records" />
      {props.data.length == 0 ? 
        <Text variant="titleSmall" style={{padding: 10}}> Start drinking water!</Text> :
        <ScrollView>
            <Timeline isUsingFlatlist={false} data={props.data} renderDetail= {renderDetail}/>
        </ScrollView>
      }
      
    </Card>
    
  )
  
} 

export default TodayRecord;