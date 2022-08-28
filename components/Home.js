import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { SafeAreaView, Text, StyleSheet, Image, View, ScrollView, TouchableOpacity,} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assetss/data/categoriesData';
import popularData from '../assetss/data/popularData';
import colors from '../assetss/fonts/colors/colors';



Feather.loadFont();
MaterialCommunityIcons.loadFont();





export default Home = ( {navigation }) => {
 
    


    const renderCategoryItem = ({ item }) => {
        return (
            <View style={[styles.categoryItemWrapper,
            {
                backgroundColor: item.selected ? colors.primary : colors.white,
                marginLeft: item.id == 1 ? 20 : 0,
            },
            ]}>

                
                <Image source={item.image} style={styles.categoryItemImage} />
                <Text style={styles.categoryItemTitle} >{item.title}</Text>
                <View style={[styles.categorySelectWrapper, {
                    backgroundColor: item.selected ? colors.white : colors.secondary,
                    borderRadius: 26,
                }]}>
                    <Feather name='chevron-right' size={8} style={styles.categorySelectIcon} color={item.selected ? colors.black : colors.white} />
                </View>
            </View>
        );
    };





    return (
        <View style={styles.container}>

            <ScrollView contentInsetAdjustBehavior="automatic" showsVerticalScrollIndicator={false}>


                {/* Header  */}
                <SafeAreaView>
                    <View style={styles.headerWrapper}>
                        <Image source={require('../assetss/images/profile.png')} style={styles.profileImage} />
                        <Feather name='menu' size={24} color={colors.textDark} />
                    </View>
                </SafeAreaView>
                <StatusBar style='black' />
                {/* Titles */}

                <View style={styles.titlesWrapper}>
                    <Text style={styles.titlesSubtitle}>Food</Text>
                    <Text style={styles.titlesTitle}>Delivery</Text>
                </View>


          


                {/* {Categories} */}


                <View style={styles.categoriesWrapper}>
                    <Text style={styles.categoriesTitle} >Categories</Text>
                    <View style={styles.categoriesListWrapper}>

                        <FlatList
                            data={categoriesData}
                            renderItem={renderCategoryItem}
                            keyExtractor={item => item.id}
                            horizontal={true}

                        />

                    </View>


                    {/* {Popular} */}


                    <View style={styles.popularWrapper}>

                        <Text style={styles.popularTitle}>Popular</Text>
                        {popularData.map((item) => (
                            <TouchableOpacity
                            key={item.id}
                            onPress={() =>
                              navigation.navigate('Details', {
                                item: item,
                              })
                            }>
                                <View  style={[styles.popularCardWrapper, {
                                    marginTop: item.id == 1 ? 10 : 20,
                                }]}>
                                    <View>
                                        <View>
                                            <View style={styles.popularTopWrapper}>
                                                <MaterialCommunityIcons name='crown' size={12} color={colors.primary} />
                                                <Text style={styles.popularTopText}>top of the week</Text>
                                            </View>
                                            <View style={styles.popularTitlesWrapper}>
                                                <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                                                <Text style={styles.popularTitlesWeight}>Weight {item.weight}</Text>

                                            </View>
                                        </View>
                                        <View style={styles.popularCardBottom}>
                                            <View style={styles.addPizzaButton}>
                                                <Feather name='plus' size={10} color={colors.textDark} />

                                            </View>

                                            <View style={styles.ratingWrapper}>
                                                <MaterialCommunityIcons name='star' size={10} color={colors.textDark} />
                                                <Text style={styles.rating}>{item.rating}</Text>
                                            </View>



                                        </View>
                                    </View>
                                    <View style={styles.popularCardRight}>
                                        <Image source={item.image} style={styles.popularCardImage} />
                                    </View>


                                </View>
                            </TouchableOpacity>
                        ))}

                    </View>
                </View>

            </ScrollView>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    },

    headerWrapper: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,

    },
    titlesWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    titlesSubtitle: {
        fontSize: 16,
        color: colors.textDark,

    },
    titlesTitle: {
        fontWeight: 'bold',
        fontSize: 32,
        color: colors.textDark,
        marginTop: 5,
    },
    searchWrapper: {
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 15,
    },
    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2,
    },
    searchText: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 5,
        color: colors.textLight
    },
    categoriesWrapper: {
        marginTop: 30,


    },
    categoriesTitle: {
        fontWeight: "bold",
        fontSize: 20,
        paddingHorizontal: 20,
    },
    categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,


    },
    categoryItemWrapper: {
        backgroundColor: '#F5CA48',
        marginRight: 20,
        borderRadius: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,



    },

    categoryItemImage: {
        width: 60,
        height: 60,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,

    },
    categoryItemTitle: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 14,
        marginTop: 10,

    },
    categorySelectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 26,
        marginBottom: 20,


    },
    categorySelectIcon: {
        alignSelf: 'center',


    },
    popularWrapper: {
        paddingHorizontal: 20,
    },

    popularTitle: {
        fontWeight: "bold",
        fontSize: 16,
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
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    popularTopText: {
        marginLeft: 10,
        fontWeight: '600',
        fontSize: 14,
    },
    popularTitlesWrapper: {
        marginTop: 20,

    },
    popularTitlesTitle: {
        fontWeight: "600",
        fontSize: 14,
        color: colors.textDark,
    },
    popularTitlesWeight: {
        fontWeight: "500",
        fontSize: 12,
        color: colors.textLight,
        marginTop: 5,
    },
    popularCardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20,
    },
    addPizzaButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,



    },
    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },

    rating: {
        fontWeight: '600',
        fontSize: 12,
        color: colors.textDark,
        marginLeft: 5,
    },
    popularCardRight: {
        marginLeft: 50,

    },
    popularCardImage: {
        width: 210,
        height: 125,
        resizeMode: 'contain',


    }



});