import { useState } from "react";
import Card from "../common/Card";
import { Heading } from "../common/Texts";
import { SearchBar } from "react-native-screens";
import ActionReloader from "../common/ActionReloader";
import ButtonGroup from "../common/ButtonGroup";
import { View } from "react-native";

export default function PreferenceCard({ title, serviceCallback }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  useStateEffect(() => {
    fetchData();
  }, [serviceCallback]);

  const fetchData = async () => {
    setLoading(true);
    setItems([]);
    try {
      let respItems = await serviceCallback();
      setItems(respItems);
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.item}>
      <Card style={styles.card}>
        <Heading>{title}</Heading>
        <SearchBar placeholder={`Search for ${title.toLowerCase()} here`} />
        <ActionReloader loading={loading} error={error} callback={fetchData}>
          <ButtonGroup
            items={items.map((value, index) => value.name)}
            numberOfColumns={2}
            isSingleSelection={false}
          />
        </ActionReloader>
      </Card>
    </View>
  );
}
