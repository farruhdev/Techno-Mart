import React from 'react';
import { Alert, AlertTitle, AlertIcon, AlertDescription, Box, Button, Center, Wrap, WrapItem } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../redux/actions/productActions';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

export default function LivingAppliance() {

    const dispatch = useDispatch();
	const { loading, error, products, pagination, favoritesToggled } = useSelector((state) => state.product);

	useEffect(() => {
		dispatch(getProducts(1));
	}, [dispatch]);

	const paginationButtonClick = (page) => {
		dispatch(getProducts(page));
	};

  return (
<>
{products.length >= 1 && (
				<Box>
					<Wrap spacing='30px' justify='center' minHeight='80vh' mx={{ base: '12', md: '20', lg: '32' }}>
						{error ? (
							<Alert status='error'>
								<AlertIcon />
								<AlertTitle>We are sorry!</AlertTitle>
								<AlertDescription>{error}</AlertDescription>
							</Alert>
						) : (
							products.map((product) => (
                                product.category==='Living Appliances' &&
								<WrapItem key={product._id}>
									<Center w='250px' h='450px'>
										<ProductCard product={product} loading={loading} />
									</Center>
								</WrapItem>
							))
						)}
					</Wrap>
					{!favoritesToggled && (
						<Wrap spacing='10px' justify='center' p='5'>
							<Button colorScheme='gray' onClick={() => paginationButtonClick(1)}>
								<ArrowLeftIcon />
							</Button>
							{Array.from(Array(pagination.totalPages), (e, i) => {
								return (
									<Button
										colorScheme={pagination.currentPage === i + 1 ? 'gray' : 'gray'}
										key={i}
										onClick={() => paginationButtonClick(i + 1)}>
										{i + 1}
									</Button>
								);
							})}
							<Button colorScheme='gray' onClick={() => paginationButtonClick(pagination.totalPages)}>
								<ArrowRightIcon />
							</Button>
						</Wrap>
					)}
				</Box>
			)}</>
  )
}
