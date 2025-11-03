import { useState } from "react"
import { View, Text, TouchableOpacity, Alert } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"

import { styles } from "./styles"
import { colors } from "@/styles/colors"
import { linkStorage } from "@/storage/link-storage"

import { Categories } from "@/components/categories"
import { Input } from "@/components/input"
import { Button } from "@/components/button"

export default function Add() {

  const [category, setCategory] = useState("")
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")

  async function handleAdd() {
    try {
      if(!category) {
        return Alert.alert("Category", "Select category")
      }

      if(!name.trim()) {
        return Alert.alert("Name", "Add name")
      }

      if(!url.trim()) {
        return Alert.alert("Url", "Add Url")
      }

      await linkStorage.save({
        id: new Date().getTime().toString(),
        name,
        url, 
        category
      })


    } catch (error) {
      Alert.alert("Error", "Failed to save link")
      console.log(error)
    }
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={styles.title}>NEW</Text>
      </View>
      <Text style={styles.label}>Select category</Text>
      <Categories onChange={setCategory} selected={category} />
      <View style={styles.form}>
        <Input placeholder="Name" onChangeText={setName} autoCorrect={false} />
        <Input placeholder="Url" onChangeText={setUrl} autoCorrect={false} autoCapitalize="none"/>
        <Button title="Add" onPress={handleAdd}/>
      </View>
    </View> 
  )
}