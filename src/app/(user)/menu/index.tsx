import { FlatList, StyleSheet } from 'react-native';
import products from '@assets/data/products';
import ProductListItem from '@components/ProductListItem';
import {memo} from "react";

 const MenuScreen = () => {
    return (
        <FlatList data={products}
                  renderItem={({item}) => <ProductListItem product={item}/>}
                  numColumns={2}
                  contentContainerStyle={styles.contentContainer}
                  columnWrapperStyle={styles.columnWrapper}
        />
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        gap: 10,
        padding: 10,
    },
    columnWrapper: {
        gap: 10,
    }
});

 export default memo(MenuScreen);
