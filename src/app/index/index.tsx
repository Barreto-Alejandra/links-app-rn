import { View, Image, TouchableOpacity, FlatList, Modal, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"

import { styles } from "./styles"
import { colors } from "@/styles/colors"

import { Categories } from "@/components/categories"
import { Link } from "@/components/link"
import { Option } from "@/components/option"

export default function Index() {
  return (
   <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity onPress={() => router.navigate("/add")}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
    <Categories />
    
    <FlatList
      data={["1","2", "3", "4"]}
      keyExtractor={(item) => item}
      renderItem={() => (
        <Link 
          name="Link Project" 
          url="https://reactnative.dev/docs/environment-setup" 
          onDetails={() => console.log("Click")}
        />
      )}
      style={styles.links}
      contentContainerStyle={styles.linksContent}
      showsVerticalScrollIndicator={false}
    />
    <Modal transparent visible={false} >
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalCategory}>
              Course
            </Text>
            <TouchableOpacity>
              <MaterialIcons name="close" size={20} color={colors.gray[400]} />
            </TouchableOpacity>
          </View>
          <Text style={styles.modalLinkName}>
            Link Project
          </Text>
          <Text style={styles.modalUrl}>
            https://
          </Text>

          <View style={styles.modalFooter}>
            <Option name="Delete" icon="delete" variant="secondary"/>
            <Option name="Open" icon="language" />
          </View>
        </View>
      </View>
    </Modal>
   </View>
  )
}