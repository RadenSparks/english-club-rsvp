import React from 'react';
import { Box, Heading, Stack, Text, Button } from '@chakra-ui/react';

const BlogSection = ({ posts }) => {
  return (
    <Box id="blogs" py={{ base: 8, md: 16 }} textAlign="center">
      <Heading as="h2" size="xl" mb={6} color="teal.600">Latest News & Blogs</Heading>
      <Stack spacing={4}>
        {posts.map((post, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Heading size="md">{post.title}</Heading>
            <Text mt={2}>{post.description}</Text>
            <Button mt={4} colorScheme="teal" onClick={() => window.open(post.link, "_blank")}>
              Read More
            </Button>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default BlogSection;
