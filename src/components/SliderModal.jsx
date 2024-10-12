import React, { useState } from 'react';
import { Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text, SimpleGrid, Button, Spinner, Heading, HStack, IconButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import learningMaterials from '../locales/LearningMaterials.json';

const MotionBox = motion(Box);

const postsPerPage = 3; // Number of posts to display at once

const SliderModal = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [highlightedMaterialId, setHighlightedMaterialId] = useState(null); // Highlight state

  const totalPages = Math.ceil(learningMaterials.length / postsPerPage);

  const openModal = (material) => {
    setSelectedMaterial(material);
    setHighlightedMaterialId(material.id); // Set highlighted material
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedMaterial(null);
    setHighlightedMaterialId(null); // Reset highlighted material
    setCurrentPage(0);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const paginatedMaterials = learningMaterials.slice(
    currentPage * postsPerPage,
    currentPage * postsPerPage + postsPerPage
  );

  return (
    <Box textAlign="center" py={8}>
      <Heading as="h2" size="xl" mb={8} color="teal.600">
        {t('materials.heading', 'Check out our materials')}
      </Heading>
      
      <MotionBox p={4} borderRadius="md" boxShadow="md" bg="gray.50"> 
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          {learningMaterials.slice(0, 3).map((material) => (
            <MotionBox 
              key={material.id} 
              onClick={() => openModal(material)} 
              cursor="pointer" 
              borderWidth="1px" 
              borderRadius="md" 
              overflow="hidden" 
              boxShadow="lg" 
              p={4}
              transition="transform 0.2s" 
              whileHover={{ scale: 1.05 }}
              role="button" 
              aria-label={t('materials.openDetails', { title: material.title })}
            >
              <Text fontWeight="bold" fontSize="lg" mb={2}>
                {material.title}
              </Text>
              <Text fontSize="md">
                {material.description}
              </Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </MotionBox>

      <Modal isOpen={isOpen} onClose={closeModal} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent borderRadius="md" boxShadow="2xl" bg="gray.100"> {/* Changed background color */}
          <ModalHeader fontSize="xl" fontWeight="bold">
            {selectedMaterial?.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {loading && <Spinner size="lg" color="teal.500" />}

            <SimpleGrid columns={1} spacing={4}>
              {paginatedMaterials.map((material) => (
                <Box 
                  key={material.id} 
                  p={4} 
                  borderRadius="md" 
                  boxShadow="md"
                  bg={highlightedMaterialId === material.id ? "teal.100" : "gray.50"} // Updated background for highlighted and non-highlighted materials
                >
                  <Text fontWeight="bold" fontSize="lg">
                    {material.title}
                  </Text>
                  <Text mt={2} fontSize="md">{material.description}</Text>
                  <Button 
                    mt={4} 
                    colorScheme="teal" 
                    as="a"
                    href={material.fileUrl} 
                    download
                    aria-label={t('modal.downloadAria', { title: material.title })}
                  >
                    {t('modal.download', 'Download')}
                  </Button>
                </Box>
              ))}
            </SimpleGrid>

            <HStack justifyContent="center" mt={4}>
              <IconButton 
                onClick={handlePrevious} 
                icon={<ChevronLeftIcon />} 
                isDisabled={currentPage === 0} 
                aria-label={t('pagination.previous')}
              />
              <Text>{`${currentPage + 1} / ${totalPages}`}</Text>
              <IconButton 
                onClick={handleNext} 
                icon={<ChevronRightIcon />} 
                isDisabled={currentPage === totalPages - 1} 
                aria-label={t('pagination.next')}
              />
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SliderModal;
