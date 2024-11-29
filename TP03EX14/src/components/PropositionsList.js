import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ProposicaoItem from './PropositionItem';
import LoadingFooter from './LoadingFooter';

const PropositionsList = ({ data, loading, loadMore, hasMore, refreshing, onRefresh }) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <ProposicaoItem item={item} />}
            keyExtractor={item => item.id.toString()}
            ListFooterComponent={() => <LoadingFooter loading={loading} />}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
            refreshing={refreshing}
            onRefresh={onRefresh}
        />
    );
};

export default PropositionsList;
