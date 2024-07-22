import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import RenderHTML, { HTMLSource } from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';

interface HtmlContentProps {
  html: HTMLSource;
}

const HtmlContent: React.FC<HtmlContentProps> = ({ html }) => {
  const { width } = useWindowDimensions();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RenderHTML contentWidth={width} source={html} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default HtmlContent;
