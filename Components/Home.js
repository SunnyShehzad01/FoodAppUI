import React from 'react'
import { FlatList, Image, SafeAreaView, SafeAreaViewBase, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import categoriesData from '../assets/data/categoriesData'
import popularData from '../assets/data/popularData'
import colors from '../assets/Colors/colors'
import globalStyles from '../globalStyles'
import { ScrollView } from 'react-native'

const Home = ({navigation}) => {

    const renderCategoryItem = ({item}) => {
        return (
            <View style={[styles.categoryItemWrapper, {
                        backgroundColor: item.selected ? colors.primary : colors.white,
                        marginLeft: item.id == 1 ? 20 : 0
            }]}>
                <Image source={item.image} style={styles.categoryItemImage} />
                <Text style={styles.categoryItemTitle}>{item.title}</Text>

                <View style={[styles.categorySelectWrapper, {
                    backgroundColor: item.selected ? colors.white : colors.secondary,
                }]}>
                    <Feather name='chevron-right' size={12} style={styles.categorySelectIcon} color={ item.selected ? colors.black : colors.white} />
                </View>
            </View>
        )
    }

  return (
    <View style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior='automatic' showsVerticalScrollIndicator={false}>
        <SafeAreaView >
            <View style={styles.headerWrapper}>
                <Image source={require('../assets/Images/profile.png')} style={styles.profileImg}/>
                {/* Icon */}
                <Feather name='menu' size={24} color={colors.textDark} />
            </View>
        </SafeAreaView>

        <View style={styles.titleWrapper}>
            <Text style={styles.title1}>Food</Text>
            <Text style={styles.title2}>Delivery</Text>
        </View>

        {/* Search Wrapper */}
        <View style={styles.searchWrapper}>
            <Feather name='search' size={16} color={colors.textDark} style={styles.searchIcon} />

            <View style={styles.search}>
                <Text style={styles.searchText}>Search</Text>
            </View>
        </View>

        {/* Categories */}
        <View style={styles.categoriesWrapper}>
            <Text style={styles.categoriesTitle}>Categories</Text>

            <View style={styles.categoriesListWrapper}>
                <FlatList 
                    data={categoriesData}
                    renderItem={renderCategoryItem}
                    keyExtractor={item => item.id}
                    horizontal = {true}
                />
            </View>
        </View>

        {/* Popular */}
        <View style={styles.popularWrapper}>
            <Text style={styles.popularTitle}>Popular</Text>

            {
                popularData.map((item) => {
                    return (
                        <TouchableOpacity key={item.id} onPress={() => navigation.navigate('DetailsPage', {item: item})}>
                        <View style={[styles.popularCardWrapper, {
                            marginTop: item.id == 1 ? 10 : 20
                        }]}>
                            <View>
                                <View>
                                    <View style={styles.popularTop}>
                                        <MaterialCommunityIcons name='crown' size={16} color={colors.primary} />
                                        <Text style={styles.popularTopTitle}>Top of the week</Text>
                                    </View>

                                    <View style={styles.popularTitlesWrapper}>
                                        <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                                        <Text style={styles.popularTitlesWeight}>Weight: {item.weight}</Text>
                                    </View>
                                </View>

                                <View style={styles.popularCardButton}>
                                    <View style={styles.addPizzaButton}>
                                        <Feather name='plus' size={10} color={colors.textDark} />
                                    </View>

                                    <View style={styles.popularRating}>
                                        <MaterialCommunityIcons name='star' size={10} color={colors.textDark} />
                                        <Text style={styles.rating}>{item.rating}</Text>
                                    </View>
                                </View>

                            </View>

                            <View style={styles.popularCardRight}>
                                <Image style={styles.popularCardImage} source={item.image} />
                            </View>

                        </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 50,
        alignItems: 'center'
    },
    profileImg: {
        width: 40,
        height: 40,
        borderRadius: 40
    },
    titleWrapper: {
        marginTop: 30,
        paddingHorizontal: 20
    },
    title1 : {
        fontWeight: 'light',
        fontSize: 16,
        color: colors.textDark
    },
    title2: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.textDark,
        marginTop: 5
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30
    },
    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2
    },
    searchText: {
        fontSize: 14,
        marginBottom: 5,
        color: colors.textLight
    },
    categoriesWrapper: {
        marginTop: 20
    },
    categoriesTitle: {
        fontWeight: 'bold',
        paddingHorizontal: 20,
        fontSize: 16
    },
    categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
    },
    categoryItemWrapper: {
        backgroundColor: '#f5ca48',
        marginRight: 20,
        borderRadius: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2
    },
    categoryItemImage: {
        width: 60,
        height: 60,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20
    },
    categoryItemTitle: {
        textAlign: 'center',
        fontSize: 14,
        marginTop: 10
    },
    categorySelectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 25,
        marginBottom: 20,
    },
    categorySelectIcon: {
        alignSelf: 'center',
    },
    popularWrapper: {
        paddingHorizontal: 20
    },
    popularTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    popularCardWrapper: {
        backgroundColor: colors.white,
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2
    },
    popularTop: {
        flexDirection: 'row'
    },
    popularTopTitle: {
        // fontWeight: 'Montserrat-SemiBold',
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 10
    },
    popularTitlesWrapper: {
        marginTop: 20
    },
    popularTitlesTitle: {
        fontSize: 14,
        color: colors.textDark
    },
    popularTitlesWeight: {
        fontSize: 14,
        color: colors.textLight,
        marginTop: 5
    },
    popularCardButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20
    },
    addPizzaButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25
    },
    popularRating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20
    },
    rating: {
        fontWeight: 'bold',
        fontSize: 12,
        color: colors.textDark,
        marginLeft: 5
    },
    popularCardRight: {
        marginLeft: 40
    },
    popularCardImage: {
        width: 210,
        height: 125,
        resizeMode: 'contain'
    },

})

export default Home