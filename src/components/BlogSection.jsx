import React from 'react';
import { Box, Heading, Stack, Text, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const BlogSection = ({ posts }) => {
  const { t } = useTranslation();

  return (
    <Box id="blogs" py={{ base: 8, md: 16 }} textAlign="center">
      <Heading as="h2" size="xl" mb={6} color="teal.600">
        {t('latest_news')} {/* Translated heading */}
      </Heading>
      <Stack spacing={4} direction={{ base: 'column', md: 'row' }} justify="center" align="stretch">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
              maxW={{ base: '100%', md: '30%' }} // Adjust width for responsiveness
              textAlign="left"
            >
              <Heading size="md" mb={2}>
                {post.title || t('untitled_post')} {/* Fallback for missing title */}
              </Heading>
              <Text mt={2} color="gray.600">
                {post.description || t('no_description')} {/* Fallback for missing description */}
              </Text>
              <Button
                mt={4}
                colorScheme="teal"
                onClick={() => window.open(post.link, '_blank')}
                aria-label={`Read more about ${post.title || t('this_post')}`}
              >
                {t('read_more')} {/* Translated button text */}
              </Button>
            </Box>
          ))
        ) : (
          <Text>{t('no_posts_available')}</Text>
        )}
      </Stack>
    </Box>
  );
};

export default BlogSection;
