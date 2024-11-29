import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, FlatList, RefreshControl } from "react-native";
import axios from "axios";
import NewsList from "./src/components/NewsList";
import SearchBar from "./src/components/SearchBar";
import Filters from "./src/components/Filters";

export default function App() {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("date");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://servicodados.ibge.gov.br/api/v3/noticias/"
      );
      setNews(response.data.items);
      setFilteredNews(response.data.items);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchNews();
    setRefreshing(false);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = news.filter((item) =>
      item.titulo.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNews(filtered);
  };

  const handleSort = (option) => {
    setSortOption(option);
    const sorted = [...filteredNews].sort((a, b) => {
      if (option === "date") return new Date(b.data_publicacao) - new Date(a.data_publicacao);
      return a[option]?.localeCompare(b[option]);
    });
    setFilteredNews(sorted);
  };

  const handleFilterByDate = (start, end) => {
    setDateRange({ start, end });
    const filtered = news.filter((item) => {
      const date = new Date(item.data_publicacao);
      return date >= new Date(start) && date <= new Date(end);
    });
    setFilteredNews(filtered);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <Filters onSort={handleSort} onFilterByDate={handleFilterByDate} />
      <FlatList
        data={filteredNews}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NewsList news={item} />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
        onEndReached={fetchNews}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
