import React from 'react'
import { Alert, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../assets/Colors/colors'
import { FlatList } from 'react-native'

const DetailsPage = ({route, navigation}) => {
    const {item} = route.params

    const renderIngredientItem = ({item}) => {
        return (
            <View style={[styles.ingredientItemWrapper, {
                marginLeft: item.id == 1 ? 20 : 0
            }]}>
                <Image source={item.image} style={styles.ingredientImage} />
                <Text style={styles.ingredientName}>{item.name}</Text>
            </View>
        )
    }

  return (
    <View style={styles.container}>
        <SafeAreaView>
            <View style={styles.headerWrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.headerLeft}>
                        <Feather name='chevron-left' size={20} color={colors.textDark} />
                    </View>
                </TouchableOpacity>

                <View style={styles.headerRight}>
                    <MaterialCommunityIcons name='star' size={12} color={colors.white} />
                </View>
            </View>
        </SafeAreaView>

        {/* Titles */}
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>
                {item.title}
            </Text>
        </View>

        {/* Price */}
        <View style={styles.priceWrapper}>
            <Text style={styles.price}>
                ${item.price}
            </Text>
        </View>

        {/* ItemDetails */}
        <View style={styles.infoWrapper}>
            <View style={styles.infoLeft}>
                <View style={styles.infoItemsWrapper}>
                    <Text style={styles.infoTitle}>
                        Size
                    </Text>

                    <Text style={styles.infoTitleText}>
                        {item.sizeName} {item.sizeNumber}"
                    </Text>
                </View>

                <View style={styles.infoItemsWrapper}>
                    <Text style={styles.infoTitle}>
                        Crust
                    </Text>

                    <Text style={styles.infoTitleText}>
                        {item.crust}
                    </Text>
                </View>

                <View style={styles.infoItemsWrapper}>
                    <Text style={styles.infoTitle}>
                        Delivery in
                    </Text>

                    <Text style={styles.infoTitleText}>
                        {item.deliveryTime} min
                    </Text>
                </View>
            </View>

            <View style={styles.infoRight}>
                <Image source={item.image}style={styles.itemImage}/>
            </View>
        </View>

        {/* Ingredients */}
        <View style={styles.ingredientsWrapper}>
            <Text style={styles.ingredientsTitle}>Ingredients</Text>

            <View style={styles.ingredientsListWrapper}>
                <FlatList 
                    data={item.ingredients}
                    renderItem={renderIngredientItem}
                    keyExtractor={item => item.id}
                    horizontal = {true}
                    showsHorizontalScrollIndicator= {false}
                />
            </View>
                
        </View>

        {/* Place Order */}
        <TouchableOpacity onPress={() => alert("Your Order has been placed.")}>
            <View style={styles.orderWrapper}>
                <Text style={styles.orderText}>Place Order</Text>

                <Feather name='chevron-right' size={18} color={colors.black}/>
            </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 50,
    },
    headerWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    headerLeft:{
        borderWidth: 2,
        borderColor: colors.textLight,
        borderRadius: 10,
        padding: 12
    },
    headerRight:{
        backgroundColor: colors.primary,
        padding: 12,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: colors.primary,
    },
    titleWrapper:{
        paddingHorizontal: 20,
        marginTop: 30
    },
    title: {
        fontWeight: 'bold',
        fontSize: 32,
        color: colors.textDark,
        width: '50%'
    },
    priceWrapper: {
        paddingHorizontal: 20,
        marginTop: 20
    },
    price: {
        color: colors.price,
        fontWeight: 'bold',
        fontSize: 28
    },
    infoWrapper: {
        flexDirection: 'row',
        marginTop: 60,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    infoLeft: {
        paddingLeft: 20
    },
    infoItemsWrapper: {
        marginBottom: 20
    },
    infoTitle: {
        fontSize: 14,
        color: colors.textLight
    },
    infoTitleText: {
        fontSize: 18,
        color: colors.textDark,
        fontWeight: 'bold'
    },
    infoRight: {},
    itemImage: {
        resizeMode: 'contain',
        marginLeft: 50
    },
    ingredientsWrapper: {
        marginTop: 40
    },
    ingredientsTitle: {
        paddingHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.textDark
    },
    ingredientsListWrapper: {
        paddingVertical: 20
    },
    ingredientItemWrapper : {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        borderRadius: 15,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.05,
        shadowRadius: 15,
        elevation: 2,
        marginBottom: 5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'

    },
    ingredientImage : {
        resizeMode: 'contain'
    },
    ingredientName: {
        fontSize: 15
    },
    orderWrapper: {
        marginTop: 60,
        marginHorizontal: 20,
        backgroundColor: colors.primary,
        borderRadius: 50,
        paddingVertical: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    orderText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 10
    }
})

export default DetailsPage