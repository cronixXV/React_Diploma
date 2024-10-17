import { useRef } from 'react';

import {
  Box,
  Container,
  Typography,
  Stack,
  Card,
  CardContent,
} from '@mui/material';
import { mainLandingTheme } from '../../../theme/mainLandingTheme';

import { useReviewsStore } from '../../../store/ReviewsStore';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper';

import Quotes from '../../../media/icons/others/Quotes.svg';
import ArrowRight from '../../../media/icons/others/CaretRight.svg';
import ArrowLeft from '../../../media/icons/others/CaretLeft.svg';

export default function ReviewsSection() {
  const { reviews } = useReviewsStore();

  const swiperRef = useRef<SwiperClass | null>(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <Container
      sx={{
        marginTop: '50px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Stack sx={{ width: '100%', alignItems: 'start' }}>
        <Box
          sx={{
            borderRadius: '16px',
            width: '210px',
            height: '45px',
            background: 'rgba(123, 74, 226, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h5">💬 Рекомендации</Typography>
        </Box>

        <Typography variant="h1" sx={{ marginTop: '28px' }}>
          Последние отзывы
        </Typography>

        <Stack
          direction="row"
          gap={2}
          sx={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '96%',
            marginTop: '20px',
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid rgba(123, 74, 226, 0.5)',
              borderRadius: '16px',
              width: '60px',
              height: '60px',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'rgba(123, 74, 226, 0.10)',
              },
            }}
            onClick={handlePrev}
          >
            <img src={ArrowLeft} alt="ArrowLeft" />
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid rgba(123, 74, 226, 0.5)',
              borderRadius: '16px',
              width: '60px',
              height: '60px',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'rgba(123, 74, 226, 0.10)',
              },
            }}
            onClick={handleNext}
          >
            <img src={ArrowRight} alt="ArrowRight" />
          </Box>
        </Stack>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Mousewheel]}
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            [mainLandingTheme.breakpoints.values.xs]: {
              slidesPerView: 1,
              mousewheel: true,
            },
            [mainLandingTheme.breakpoints.values.sm]: {
              slidesPerView: 1,
              mousewheel: true,
            },
            [mainLandingTheme.breakpoints.values.md]: {
              slidesPerView: 2,
              mousewheel: false,
            },
            [mainLandingTheme.breakpoints.values.lg]: {
              slidesPerView: 2,
              mousewheel: false,
            },
          }}
          style={{ width: '100%', marginTop: '20px' }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <Card
                sx={{
                  width: { xs: '298px', md: '280px', lg: '530px' },
                  height: { xs: '271px', md: '355px', lg: '295px' },
                  '&:hover': {
                    backgroundColor: 'rgba(123, 74, 226, 0.10)',
                  },
                }}
              >
                <CardContent>
                  <Box>
                    <img src={Quotes} alt="Quotes" />
                  </Box>
                  <Typography variant="subtitle1" mt={'12px'}>
                    {review.description}
                  </Typography>

                  {/* <Box>
                    <img src={review.imageUrl} alt={review.name} />
                  </Box> */}

                  <Stack mt={'21px'} alignItems={'flex-end'} width={'100%'}>
                    <Typography variant="h5" sx={{ color: '#fff' }}>
                      {review.name}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      sx={{ color: '#7B4AE2', fontWeight: '400' }}
                    >
                      {review.post}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </Container>
  );
}
