import React, { useState } from 'react';
import { Box, Heading, Stack, Text, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import blogPosts from '../locales/blogPost.json'; // Adjust the path as necessary

const BlogSection = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next blog
  const nextBlog = () => {
    if (currentIndex < blogPosts.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Function to go to the previous blog
  const previousBlog = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <Box id="blogs" py={{ base: 8, md: 16 }} textAlign="center" bg="gray.50" borderRadius="md" boxShadow="lg">
      <Heading as="h2" size="xl" mb={6} color="teal.600">
        {t('latest_news')}
      </Heading>

      {blogPosts.length > 0 ? (
        <>
          {/* Highlighted Main Blog Post */}
          <Box
            mb={8}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            bg="white"
            boxShadow="md"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }} // Hover effect
          >
            <Box display="flex" justifyContent="center">
              <img 
                src={blogPosts[currentIndex].image} 
                alt={blogPosts[currentIndex].title} 
                style={{ maxWidth: '100%', height: 'auto', maxHeight: '300px', borderRadius: '8px' }} 
              />
            </Box>
            <Heading size="lg" mb={2}>
              {blogPosts[currentIndex].title || t('untitled_post')}
            </Heading>
            <Text fontSize="sm" color="gray.500">
              {`${blogPosts[currentIndex].details.author} | ${blogPosts[currentIndex].details.datePublished} | ${blogPosts[currentIndex].details.readingTime}`}
            </Text>
            <Text mt={2} color="gray.600">
              {blogPosts[currentIndex].description || t('no_description')}
            </Text>
            <Button
              mt={4}
              colorScheme="teal"
              onClick={() => window.open(blogPosts[currentIndex].link, '_blank')}
              aria-label={`Read more about ${blogPosts[currentIndex].title || t('this_post')}`}
            >
              {t('read_more')}
            </Button>
          </Box>

          {/* Navigation Buttons */}
          <Box mb={6}>
            <Button
              onClick={previousBlog}
              isDisabled={currentIndex === 0} // Disable if it's the first post
              mr={4}
              colorScheme="teal"
            >
              Previous
            </Button>
            <Button
              onClick={nextBlog}
              isDisabled={currentIndex === blogPosts.length - 1} // Disable if it's the last post
              colorScheme="teal"
            >
              Next
            </Button>
          </Box>

          {/* List of Other Blog Posts (up to 3) */}
          <Stack spacing={6} direction={{ base: 'column', md: 'row' }} justify="center" align="stretch">
            {blogPosts.slice(1).map((post, index) => (
              <Box
                key={index}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p={4}
                maxW={{ base: '100%', md: '30%' }}
                textAlign="left"
                bg="white"
                boxShadow="md"
                transition="transform 0.2s"
                _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }} // Hover effect
              >
                <Heading size="md" mb={2}>
                  {post.title || t('untitled_post')}
                </Heading>
                <Text fontSize="sm" color="gray.500">
                  {`${post.details.author} | ${post.details.datePublished} | ${post.details.readingTime}`}
                </Text>
                <Text mt={2} color="gray.600">
                  {post.description || t('no_description')}
                </Text>
                <Button
                  mt={4}
                  colorScheme="teal"
                  onClick={() => window.open(post.link, '_blank')}
                  aria-label={`Read more about ${post.title || t('this_post')}`}
                >
                  {t('read_more')}
                </Button>
              </Box>
            ))}
          </Stack>
        </>
      ) : (
        <Text>{t('no_posts_available')}</Text>
      )}
    </Box>
  );
};

export default BlogSection;
